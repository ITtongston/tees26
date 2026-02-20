"use client"

import { useState, useCallback, useMemo } from "react"
import axios from "axios"
import { toast } from "react-toastify"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSpinner, faCheckCircle } from "@fortawesome/free-solid-svg-icons"
import PersonalInfoSection from "./PersonalInfoSection"
import ProfessionalInfoSection from "./ProfessionalInfoSection"
import EventPreferencesSection from "./EventPreferencesSection"
import PitchInfoSection from "./PitchInfoSection"
import AdditionalInfoSection from "./AdditionalInfoSection"

const REQUIRED_FIELDS = [
  "fullName",
  "email",
  "phone",
  "country",
  "city",
  "organization",
  "jobTitle",
  "industry",
  "experienceLevel",
  "participationType",
]

const BRAND_COLORS = {
  primary: "#EAB308",
  secondary: "#DC2626",
  success: "#059669",
  error: "#DC2626",
}

const RegistrationForm = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    organization: "",
    jobTitle: "",
    industry: "",
    experienceLevel: "",
    participationType: "",
    interests: [],
    linkedinProfile: "",
    websiteUrl: "",
    bio: "",
    pitchTitle: "",
    pitchDescription: "",
    lookingToConnect: [],
    specialRequirements: "",
  })

  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})

  const fieldStatus = useMemo(() => {
    const status = {}
    REQUIRED_FIELDS.forEach((field) => {
      status[field] = formData[field] && formData[field].toString().trim() !== ""
    })
    return status
  }, [formData])

  const showPitchFields = useMemo(() => {
    return formData.participationType === "Entrepreneur/Pitcher" || formData.participationType === "Speaker"
  }, [formData.participationType])

  const isFormComplete = useMemo(() => {
    return REQUIRED_FIELDS.every((field) => formData[field] && formData[field].toString().trim() !== "")
  }, [formData])

  const completedFieldsCount = useMemo(() => {
    return REQUIRED_FIELDS.filter((field) => formData[field] && formData[field].toString().trim() !== "").length
  }, [formData])

  const progressPercentage = useMemo(() => {
    return Math.round((completedFieldsCount / REQUIRED_FIELDS.length) * 100)
  }, [completedFieldsCount])

  const validateField = useCallback((name, value) => {
    let error = ""

    if (REQUIRED_FIELDS.includes(name) && (!value || value.toString().trim() === "")) {
      const fieldNames = {
        fullName: "Full Name",
        email: "Email Address",
        phone: "Phone Number",
        country: "Country",
        city: "City",
        organization: "Organization",
        jobTitle: "Job Title",
        industry: "Industry",
        experienceLevel: "Experience Level",
        participationType: "Participation Type",
      }
      error = `${fieldNames[name]} is required`
    } else if (name === "email" && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      error = "Please enter a valid email address"
    } else if (name === "phone" && value && value.length < 10) {
      error = "Please enter a valid phone number"
    } else if ((name === "linkedinProfile" || name === "websiteUrl") && value && !value.startsWith("http")) {
      error = "Please enter a valid URL (starting with http:// or https://)"
    }

    return error
  }, [])

  const handleInputChange = useCallback((e) => {
    const { name, value, type, checked } = e.target

    setFormData((prev) => {
      if (type === "checkbox") {
        if (name === "interests" || name === "lookingToConnect") {
          return {
            ...prev,
            [name]: checked ? [...prev[name], value] : prev[name].filter((item) => item !== value),
          }
        }
      }
      return { ...prev, [name]: value }
    })

    setTouched((prev) => ({ ...prev, [name]: true }))

    setErrors((prev) => {
      if (prev[name]) {
        return { ...prev, [name]: "" }
      }
      return prev
    })
  }, [])

  const validateForm = useCallback(() => {
    const newErrors = {}

    REQUIRED_FIELDS.forEach((field) => {
      const error = validateField(field, formData[field])
      if (error) newErrors[field] = error
    })

    if (formData.linkedinProfile) {
      const error = validateField("linkedinProfile", formData.linkedinProfile)
      if (error) newErrors.linkedinProfile = error
    }

    if (formData.websiteUrl) {
      const error = validateField("websiteUrl", formData.websiteUrl)
      if (error) newErrors.websiteUrl = error
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }, [formData, validateField])

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault()

      if (!validateForm()) {
        const errorCount = Object.keys(errors).length
        toast.error(`Fix ${errorCount} error${errorCount > 1 ? "s" : ""}`, {
          position: "top-center",
          autoClose: 3000,
        })

        const firstErrorField = Object.keys(errors)[0]
        const element = document.querySelector(`[name="${firstErrorField}"]`)
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "center" })
          element.focus()
        }
        return
      }

      setLoading(true)
      toast.info("Submitting...", { position: "top-center", autoClose: false, closeButton: false })

      try {
        const response = await axios.post("/api/register", formData, {
          headers: { "Content-Type": "application/json" },
          timeout: 30000,
        })

        if (response.data.success) {
          toast.dismiss()
          toast.success("Registration successful!", { position: "top-center", autoClose: 3000 })

          setFormData({
            fullName: "",
            email: "",
            phone: "",
            country: "",
            city: "",
            organization: "",
            jobTitle: "",
            industry: "",
            experienceLevel: "",
            participationType: "",
            interests: [],
            linkedinProfile: "",
            websiteUrl: "",
            bio: "",
            pitchTitle: "",
            pitchDescription: "",
            lookingToConnect: [],
            specialRequirements: "",
          })

          if (onSuccess) {
            onSuccess(response.data)
          }
        }
      } catch (error) {
        toast.dismiss()
        console.error("Registration error:", error)

        if (error.response?.status === 409) {
          toast.error("Email already registered", { position: "top-center", autoClose: 4000 })
        } else if (error.response?.data?.message) {
          toast.error(error.response.data.message, { position: "top-center", autoClose: 4000 })
        } else if (error.response?.data?.errors) {
          setErrors(error.response.data.errors)
          toast.error("Fix validation errors", { position: "top-center", autoClose: 4000 })
        } else {
          toast.error("Connection error. Try again.", { position: "top-center", autoClose: 4000 })
        }
      } finally {
        setLoading(false)
      }
    },
    [formData, validateForm, errors, onSuccess],
  )

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4 font-montserrat">Register for TES 2026</h1>
        <p className="text-base md:text-lg text-gray-600 mb-6 font-lato">
          Join the Global Virtual Summit on Value, Influence & Profitability
        </p>

        {/* Progress Bar */}
        <div className="max-w-md mx-auto mb-6">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Progress</span>
            <span>{progressPercentage}% Complete</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="h-2 rounded-full transition-all duration-300"
              style={{
                width: `${progressPercentage}%`,
                background: `linear-gradient(90deg, ${BRAND_COLORS.primary} 0%, ${BRAND_COLORS.success} 100%)`,
              }}
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-sm md:text-base text-gray-600">
          <span>July 26, 2026</span>
          <span className="hidden md:inline">•</span>
          <span>Virtual & Abuja</span>
          <span className="hidden md:inline">•</span>
          <span>61+ Countries</span>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <PersonalInfoSection
          formData={formData}
          handleInputChange={handleInputChange}
          errors={errors}
          fieldStatus={fieldStatus}
        />

        <ProfessionalInfoSection
          formData={formData}
          handleInputChange={handleInputChange}
          errors={errors}
          fieldStatus={fieldStatus}
        />

        <EventPreferencesSection
          formData={formData}
          handleInputChange={handleInputChange}
          errors={errors}
          fieldStatus={fieldStatus}
        />

        <PitchInfoSection
          formData={formData}
          handleInputChange={handleInputChange}
          errors={errors}
          showPitchFields={showPitchFields}
        />

        <AdditionalInfoSection formData={formData} handleInputChange={handleInputChange} errors={errors} />

        {/* Submit Button */}
        <div className="text-center pt-6">
          <button
            type="submit"
            disabled={loading || !isFormComplete}
            className={`px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 ${
              isFormComplete && !loading
                ? "text-white shadow-lg hover:shadow-xl"
                : "bg-gray-400 text-gray-600 cursor-not-allowed"
            }`}
            style={{
              background:
                isFormComplete && !loading
                  ? `linear-gradient(135deg, ${BRAND_COLORS.success} 0%, ${BRAND_COLORS.primary} 100%)`
                  : undefined,
            }}
          >
            {loading ? (
              <>
                <FontAwesomeIcon icon={faSpinner} className="animate-spin mr-2" />
                Registering...
              </>
            ) : (
              <>
                <FontAwesomeIcon icon={faCheckCircle} className="mr-2" />
                Register for TES 2026
              </>
            )}
          </button>

          {!isFormComplete && (
            <p className="text-gray-500 text-sm mt-2">
              Complete {REQUIRED_FIELDS.length - completedFieldsCount} more required field
              {REQUIRED_FIELDS.length - completedFieldsCount !== 1 ? "s" : ""} to submit
            </p>
          )}
        </div>
      </form>
    </div>
  )
}

export default RegistrationForm

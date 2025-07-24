"use client"

import { useState, useCallback, useMemo } from "react"
import { useRouter } from "next/router"
import Head from "next/head"
import axios from "axios"
import { toast, ToastContainer } from "react-toastify"
import Nav2 from "@/components/Nav/Nav2"
import Foot from "@/components/Nav/Foot"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons"

// Memoized constants
const EXPERIENCE_LEVELS = ["Student", "Entry Level", "Mid Level", "Senior Level", "Executive", "Entrepreneur"]
const PARTICIPATION_TYPES = ["Attendee", "Speaker", "Investor", "Entrepreneur/Pitcher", "Student", "Media"]
const INTEREST_OPTIONS = [
  "Education",
  "Enterprise",
  "Media",
  "Finance",
  "Technology",
  "Healthcare",
  "Agriculture",
  "Sustainability",
]
const NETWORKING_OPTIONS = ["Investors", "Mentors", "Collaborators", "Customers", "Partners", "Industry Experts"]

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

// Brand colors
const BRAND_COLORS = {
  primary: "#EAB308", // Yellow-500
  secondary: "#DC2626", // Red-600
  success: "#059669", // Emerald-600
  error: "#DC2626", // Red-600
}

// Move InputField component outside to prevent recreation
const InputField = ({
  label,
  name,
  type = "text",
  placeholder,
  required = false,
  children,
  value,
  onChange,
  error,
  isCompleted,
  ...props
}) => {
  return (
    <div className="relative">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label} {required && <span className="text-red-500">*</span>}
        {isCompleted && <FontAwesomeIcon icon={faCheckCircle} className="ml-2 text-green-500" />}
      </label>
      {children || (
        <input
          type={type}
          name={name}
          value={value || ""} // Ensure controlled input
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full px-4 py-3 border rounded-lg focus:outline-none transition-colors ${
            error
              ? "border-red-500 bg-red-50"
              : isCompleted
                ? "border-green-500 bg-green-50"
                : "border-gray-300 focus:border-yellow-500"
          }`}
          {...props}
        />
      )}
      {error && <div className="text-red-500 text-sm mt-1">{error}</div>}
    </div>
  )
}

const Register2026 = () => {
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

  const router = useRouter()

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

  // Stable handleInputChange function
  const handleInputChange = useCallback((e) => {
    const { name, value, type, checked } = e.target

    // Update form data
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

    // Mark field as touched
    setTouched((prev) => ({ ...prev, [name]: true }))

    // Clear errors immediately for better UX
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

          setTimeout(() => router.push("/registration-success"), 1500)
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
    [formData, validateForm, errors, router],
  )

  return (
    <>
      <Head>
        <title>Register for TES 2026 | Tongston Entrepreneurial Education Summit</title>
        <meta
          name="description"
          content="Register for TES 2026 - The premier global virtual summit on value, influence & profitability"
        />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <Nav2 />

        <div
          className="text-white py-16 mt-20"
          style={{
            background: `linear-gradient(135deg, ${BRAND_COLORS.primary} 0%, ${BRAND_COLORS.secondary} 100%)`,
          }}
        >
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 font-montserrat">Register for TES 2026</h1>
            <p className="text-lg md:text-xl mb-6 font-lato opacity-90">
              Join the Global Virtual Summit on Value, Influence & Profitability
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-sm md:text-base">
              <span>July 26, 2026</span>
              <span>•</span>
              <span>Virtual & Abuja</span>
              <span>•</span>
              <span>61+ Countries</span>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-6">Personal Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <InputField
                    label="Full Name"
                    name="fullName"
                    placeholder="Enter your full name"
                    required
                    value={formData.fullName}
                    onChange={handleInputChange}
                    error={errors.fullName}
                    isCompleted={fieldStatus.fullName}
                  />
                  <InputField
                    label="Email Address"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    error={errors.email}
                    isCompleted={fieldStatus.email}
                  />
                  <InputField
                    label="Phone Number"
                    name="phone"
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    error={errors.phone}
                    isCompleted={fieldStatus.phone}
                  />
                  <InputField
                    label="Country"
                    name="country"
                    placeholder="Your country"
                    required
                    value={formData.country}
                    onChange={handleInputChange}
                    error={errors.country}
                    isCompleted={fieldStatus.country}
                  />
                  <InputField
                    label="City"
                    name="city"
                    placeholder="Your city"
                    required
                    value={formData.city}
                    onChange={handleInputChange}
                    error={errors.city}
                    isCompleted={fieldStatus.city}
                  />
                </div>
              </div>

              {/* Professional Information */}
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-6">Professional Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <InputField
                    label="Organization"
                    name="organization"
                    placeholder="Your organization/company"
                    required
                    value={formData.organization}
                    onChange={handleInputChange}
                    error={errors.organization}
                    isCompleted={fieldStatus.organization}
                  />
                  <InputField
                    label="Job Title"
                    name="jobTitle"
                    placeholder="Your current position"
                    required
                    value={formData.jobTitle}
                    onChange={handleInputChange}
                    error={errors.jobTitle}
                    isCompleted={fieldStatus.jobTitle}
                  />
                  <InputField
                    label="Industry"
                    name="industry"
                    placeholder="Your industry sector"
                    required
                    value={formData.industry}
                    onChange={handleInputChange}
                    error={errors.industry}
                    isCompleted={fieldStatus.industry}
                  />
                  <InputField
                    label="Experience Level"
                    name="experienceLevel"
                    required
                    value={formData.experienceLevel}
                    onChange={handleInputChange}
                    error={errors.experienceLevel}
                    isCompleted={fieldStatus.experienceLevel}
                  >
                    <select
                      name="experienceLevel"
                      value={formData.experienceLevel}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none transition-colors ${
                        errors.experienceLevel
                          ? "border-red-500 bg-red-50"
                          : fieldStatus.experienceLevel
                            ? "border-green-500 bg-green-50"
                            : "border-gray-300 focus:border-yellow-500"
                      }`}
                    >
                      <option value="">Select experience level</option>
                      {EXPERIENCE_LEVELS.map((level) => (
                        <option key={level} value={level}>
                          {level}
                        </option>
                      ))}
                    </select>
                  </InputField>
                </div>
              </div>

              {/* Event Preferences */}
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-6">Event Preferences</h2>

                <div className="mb-6">
                  <InputField
                    label="Participation Type"
                    name="participationType"
                    required
                    value={formData.participationType}
                    onChange={handleInputChange}
                    error={errors.participationType}
                    isCompleted={fieldStatus.participationType}
                  >
                    <select
                      name="participationType"
                      value={formData.participationType}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none transition-colors ${
                        errors.participationType
                          ? "border-red-500 bg-red-50"
                          : fieldStatus.participationType
                            ? "border-green-500 bg-green-50"
                            : "border-gray-300 focus:border-yellow-500"
                      }`}
                    >
                      <option value="">Select participation type</option>
                      {PARTICIPATION_TYPES.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </InputField>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Areas of Interest (Select all that apply)
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {INTEREST_OPTIONS.map((interest) => (
                      <label key={interest} className="flex items-center p-2 border rounded-lg hover:bg-gray-50">
                        <input
                          type="checkbox"
                          name="interests"
                          value={interest}
                          checked={formData.interests.includes(interest)}
                          onChange={handleInputChange}
                          className="mr-2 h-4 w-4 rounded"
                          style={{ accentColor: BRAND_COLORS.primary }}
                        />
                        <span className="text-sm text-gray-700">{interest}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-3">Looking to Connect With</label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {NETWORKING_OPTIONS.map((option) => (
                      <label key={option} className="flex items-center p-2 border rounded-lg hover:bg-gray-50">
                        <input
                          type="checkbox"
                          name="lookingToConnect"
                          value={option}
                          checked={formData.lookingToConnect.includes(option)}
                          onChange={handleInputChange}
                          className="mr-2 h-4 w-4 rounded"
                          style={{ accentColor: BRAND_COLORS.primary }}
                        />
                        <span className="text-sm text-gray-700">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* Conditional Pitch Information */}
              {showPitchFields && (
                <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                  <h2 className="text-xl font-bold text-gray-800 mb-6">Pitch Information</h2>
                  <div className="space-y-4">
                    <InputField
                      label="Pitch Title"
                      name="pitchTitle"
                      placeholder="Title of your pitch/presentation"
                      value={formData.pitchTitle}
                      onChange={handleInputChange}
                      error={errors.pitchTitle}
                      isCompleted={!!formData.pitchTitle}
                    />
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Pitch Description</label>
                      <textarea
                        name="pitchDescription"
                        value={formData.pitchDescription}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500"
                        placeholder="Brief description of your pitch (max 1000 characters)"
                        maxLength={1000}
                      />
                      <p className="text-xs text-gray-500 mt-1">{formData.pitchDescription.length}/1000 characters</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Additional Information */}
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-6">
                  Additional Information <span className="text-sm text-gray-500 font-normal">(Optional)</span>
                </h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <InputField
                      label="LinkedIn Profile"
                      name="linkedinProfile"
                      type="url"
                      placeholder="https://linkedin.com/in/yourprofile"
                      value={formData.linkedinProfile}
                      onChange={handleInputChange}
                      error={errors.linkedinProfile}
                      isCompleted={!!formData.linkedinProfile}
                    />
                    <InputField
                      label="Website URL"
                      name="websiteUrl"
                      type="url"
                      placeholder="https://yourwebsite.com"
                      value={formData.websiteUrl}
                      onChange={handleInputChange}
                      error={errors.websiteUrl}
                      isCompleted={!!formData.websiteUrl}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Professional Bio</label>
                    <textarea
                      name="bio"
                      value={formData.bio}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500"
                      placeholder="Brief professional bio (max 500 characters)"
                      maxLength={500}
                    />
                    <p className="text-xs text-gray-500 mt-1">{formData.bio.length}/500 characters</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Special Requirements</label>
                    <textarea
                      name="specialRequirements"
                      value={formData.specialRequirements}
                      onChange={handleInputChange}
                      rows={2}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500"
                      placeholder="Any special requirements or accessibility needs"
                      maxLength={300}
                    />
                    <p className="text-xs text-gray-500 mt-1">{formData.specialRequirements.length}/300 characters</p>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center pt-6">
                <button
                  type="submit"
                  disabled={loading || !isFormComplete}
                  className={`px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 ${
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
                  {loading ? "Registering..." : "Register for TES 2026"}
                </button>

                {!isFormComplete && (
                  <p className="text-gray-500 text-sm mt-2">Complete all required fields to submit</p>
                )}
              </div>
            </form>
          </div>
        </div>

        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          limit={3}
        />
        <Foot />
      </div>
    </>
  )
}

export default Register2026

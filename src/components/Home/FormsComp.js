"use client"

import { useState } from "react"
import axios from "axios"
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"
import "sweetalert2/dist/sweetalert2.min.css"
import { toast } from "react-toastify"
import Button from "@/shared/Buttons"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faUser,
  faEnvelope,
  faMapMarkerAlt,
  faIndustry,
  faCheckCircle,
  faExclamationTriangle,
  faMicrophone,
  faBuilding,
} from "@fortawesome/free-solid-svg-icons"

const MySwal = withReactContent(Swal)

function FormsComp() {
  const showError = (message = "Failed! Please try again.") => {
    MySwal.fire({
      icon: "error",
      title: "Registration Failed",
      text: message,
      confirmButtonColor: "#ef4444",
      timer: 5000,
      timerProgressBar: true,
    })
  }

  const showSuccess = (message = "Registration successful!") => {
    MySwal.fire({
      icon: "success",
      title: "Success!",
      text: message,
      confirmButtonColor: "#10b981",
      timer: 4000,
      timerProgressBar: true,
    })
  }

  // Quick Registration Form State
  const [values, setValues] = useState({
    name: "",
    email: "",
    city: "",
    industry: "",
  })
  const [loading, setLoading] = useState(false)
  const [quickFormErrors, setQuickFormErrors] = useState({})

  // Speaker Application Form State
  const [values2, setValues2] = useState({
    name: "",
    email: "",
    city: "",
    industry_of_expertise: "",
    topic_interest: "",
    org_name: "",
    org_title: "",
  })
  const [load, setLoad] = useState(false)
  const [speakerFormErrors, setSpeakerFormErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })

    // Clear errors when user starts typing
    if (quickFormErrors[name]) {
      setQuickFormErrors((prev) => ({ ...prev, [name]: "" }))
    }

    // Show real-time validation feedback
    if (name === "email" && value && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      toast.success("✅ Valid email format", {
        position: "bottom-right",
        autoClose: 2000,
      })
    }
  }

  const handleChange2 = (e) => {
    const { name, value } = e.target
    setValues2({ ...values2, [name]: value })

    // Clear errors when user starts typing
    if (speakerFormErrors[name]) {
      setSpeakerFormErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const validateQuickForm = () => {
    const errors = {}
    const requiredFields = ["name", "email", "city", "industry"]

    requiredFields.forEach((field) => {
      if (!values[field] || values[field].trim() === "") {
        const fieldNames = {
          name: "Full Name",
          email: "Email Address",
          city: "City",
          industry: "Industry",
        }
        errors[field] = `${fieldNames[field]} is required`
      }
    })

    // Email validation
    if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      errors.email = "Please enter a valid email address"
    }

    setQuickFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const validateSpeakerForm = () => {
    const errors = {}
    const requiredFields = ["name", "email", "city", "industry_of_expertise", "topic_interest", "org_name", "org_title"]

    requiredFields.forEach((field) => {
      if (!values2[field] || values2[field].trim() === "") {
        const fieldNames = {
          name: "Full Name",
          email: "Email Address",
          city: "City",
          industry_of_expertise: "Industry of Expertise",
          topic_interest: "Topic of Interest",
          org_name: "Organization Name",
          org_title: "Organization Title",
        }
        errors[field] = `${fieldNames[field]} is required`
      }
    })

    // Email validation
    if (values2.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values2.email)) {
      errors.email = "Please enter a valid email address"
    }

    setSpeakerFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateQuickForm()) {
      const errorCount = Object.keys(quickFormErrors).length
      toast.error(`❌ Please fix ${errorCount} error${errorCount > 1 ? "s" : ""} before submitting`, {
        position: "top-center",
        autoClose: 4000,
      })
      return
    }

    setLoading(true)

    // Show loading notification
    const loadingToast = toast.loading("🚀 Processing your quick registration...", {
      position: "top-center",
    })

    try {
      const response = await axios.post("/api/quick-register", values, {
        headers: {
          "Content-Type": "application/json",
        },
      })

      if (response.data.success) {
        toast.dismiss(loadingToast)
        showSuccess("Quick registration successful! Check your email for confirmation.")

        // Show additional info toast
        toast.info("💡 For full access to all TES 2026 features, complete the full registration!", {
          position: "bottom-center",
          autoClose: 6000,
        })

        setValues({
          name: "",
          email: "",
          city: "",
          industry: "",
        })
      }
    } catch (error) {
      toast.dismiss(loadingToast)
      console.error("Quick registration error:", error)

      if (error.response?.status === 409) {
        showError("This email is already registered. Please use a different email address.")
      } else {
        const errorMessage = error.response?.data?.message || "Registration failed. Please try again."
        showError(errorMessage)
      }
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit2 = async (e) => {
    e.preventDefault()

    if (!validateSpeakerForm()) {
      const errorCount = Object.keys(speakerFormErrors).length
      toast.error(`❌ Please fix ${errorCount} error${errorCount > 1 ? "s" : ""} before submitting`, {
        position: "top-center",
        autoClose: 4000,
      })
      return
    }

    setLoad(true)

    // Show loading notification
    const loadingToast = toast.loading("🎤 Submitting your speaker application...", {
      position: "top-center",
    })

    try {
      const response = await axios.post("/api/speaker-application", values2, {
        headers: {
          "Content-Type": "application/json",
        },
      })

      if (response.data.success) {
        toast.dismiss(loadingToast)
        showSuccess("Speaker application submitted successfully! Our team will review and contact you soon.")

        // Show additional info toast
        toast.info("📧 You'll receive a confirmation email within 24 hours with next steps.", {
          position: "bottom-center",
          autoClose: 6000,
        })

        setValues2({
          name: "",
          email: "",
          city: "",
          industry_of_expertise: "",
          topic_interest: "",
          org_name: "",
          org_title: "",
        })
      }
    } catch (error) {
      toast.dismiss(loadingToast)
      console.error("Speaker application error:", error)

      if (error.response?.status === 409) {
        showError("A speaker application with this email already exists. Please use a different email address.")
      } else {
        const errorMessage = error.response?.data?.message || "Application failed. Please try again."
        showError(errorMessage)
      }
    } finally {
      setLoad(false)
    }
  }

  const InputField = ({ icon, label, name, type = "text", placeholder, value, onChange, error, required = true }) => (
    <div className="relative">
      <div className="relative">
        <FontAwesomeIcon icon={icon} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={`w-full rounded-md p-3 pl-10 pr-4 text-gray-900 text-base font-sans focus:outline-none 
            focus:scale-100 transform transition-all duration-300 ease-in-out bg-white border-2 
            ${
              error
                ? "border-red-500 bg-red-50 focus:border-red-600"
                : "border-gray-300 focus:border-yellow-500 focus:shadow-lg"
            }`}
        />
        {value && !error && (
          <FontAwesomeIcon
            icon={faCheckCircle}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500"
          />
        )}
      </div>
      {error && (
        <div className="flex items-center mt-1 text-red-500 text-sm">
          <FontAwesomeIcon icon={faExclamationTriangle} className="mr-1" />
          {error}
        </div>
      )}
    </div>
  )

  return (
    <div className="w-full h-[fixed] flex flex-col gap-y-6 justify-center items-center lg:h-[500px] mb-[5rem]">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 justify-center items-center px-2 md:px-5 lg:px-[4rem]">
        {/* Quick Registration Form */}
        <section className="first-form-container w-full h-[fixed] flex flex-col justify-start items-start p-2 gap-y-8 mb-auto">
          <div className="flex flex-col gap-y-4 justify-center w-full items-center md:justify-start md:items-start">
            <h4 className="text-yellow-600 font-black font-ger text-xl md:text-2xl text-center flex items-center">
              <FontAwesomeIcon icon={faUser} className="mr-2" />
              Register Now
            </h4>
            <p className="text-base font-sans font-bold text-gray-800 md:text-base text-center">
              Attend to Learn, Pitch or Invest
            </p>
            <Link href="/register-2026">
              <button className="bg-red-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Full Registration for TES 2026
              </button>
            </Link>
          </div>

          <form
            onSubmit={handleSubmit}
            className="w-full grid grid-cols-1 gap-x-3 gap-y-4 md:grid-cols-2 justify-start items-start p-4 border-2 border-gray-300 shadow-2xl rounded-lg bg-white hover:shadow-3xl transition-shadow duration-300"
          >
            <InputField
              icon={faUser}
              label="Full Name"
              name="name"
              placeholder="Full Name"
              value={values.name}
              onChange={handleChange}
              error={quickFormErrors.name}
            />

            <InputField
              icon={faEnvelope}
              label="Email Address"
              name="email"
              type="email"
              placeholder="Email Address"
              value={values.email}
              onChange={handleChange}
              error={quickFormErrors.email}
            />

            <InputField
              icon={faMapMarkerAlt}
              label="City"
              name="city"
              placeholder="City"
              value={values.city}
              onChange={handleChange}
              error={quickFormErrors.city}
            />

            <InputField
              icon={faIndustry}
              label="Industry"
              name="industry"
              placeholder="Industry"
              value={values.industry}
              onChange={handleChange}
              error={quickFormErrors.industry}
            />

            <Button
              text={loading ? "Processing..." : "Quick Register"}
              type="submit"
              disabled={loading}
              className={`transition-all duration-300 ${loading ? "opacity-50 cursor-not-allowed" : "hover:scale-105"}`}
            />

            <Link href="/register-2026" className="w-full">
              <button
                type="button"
                className="w-full bg-yellow-600 text-white p-3 rounded-md font-semibold hover:bg-yellow-700 transition-all duration-300 transform hover:scale-105 shadow-md"
              >
                Complete Registration
              </button>
            </Link>
          </form>
        </section>

        {/* Speaker Application Form */}
        <section className="first-form-container mt-[5rem] w-full h-[fixed] flex flex-col justify-center md:justify-start md:items-start items-center p-2 gap-y-8">
          <div className="flex flex-col gap-y-4 justify-start items-center md:ml-auto md:justify-start md:items-start">
            <h4 className="text-yellow-600 font-black font-ger text-xl md:text-2xl text-left flex items-center">
              <FontAwesomeIcon icon={faMicrophone} className="mr-2" />
              Want to Speak?
            </h4>
            <p className="text-base font-sans font-bold text-gray-800 md:text-base text-left">
              Apply to be a speaker at TEES 2026
            </p>
          </div>

          <form
            onSubmit={handleSubmit2}
            className="w-full grid grid-cols-1 gap-x-3 gap-y-4 md:grid-cols-2 justify-center items-start p-4 border-2 border-gray-300 shadow-2xl rounded-lg bg-white hover:shadow-3xl transition-shadow duration-300"
          >
            <InputField
              icon={faUser}
              label="Full Name"
              name="name"
              placeholder="Full Name"
              value={values2.name}
              onChange={handleChange2}
              error={speakerFormErrors.name}
            />

            <InputField
              icon={faEnvelope}
              label="Email Address"
              name="email"
              type="email"
              placeholder="Email Address"
              value={values2.email}
              onChange={handleChange2}
              error={speakerFormErrors.email}
            />

            <InputField
              icon={faMapMarkerAlt}
              label="City"
              name="city"
              placeholder="City"
              value={values2.city}
              onChange={handleChange2}
              error={speakerFormErrors.city}
            />

            <InputField
              icon={faIndustry}
              label="Industry of Expertise"
              name="industry_of_expertise"
              placeholder="Industry of Expertise"
              value={values2.industry_of_expertise}
              onChange={handleChange2}
              error={speakerFormErrors.industry_of_expertise}
            />

            <InputField
              icon={faMicrophone}
              label="Topic of Interest"
              name="topic_interest"
              placeholder="Topic of Interest"
              value={values2.topic_interest}
              onChange={handleChange2}
              error={speakerFormErrors.topic_interest}
            />

            <InputField
              icon={faBuilding}
              label="Organization Name"
              name="org_name"
              placeholder="Organization Name"
              value={values2.org_name}
              onChange={handleChange2}
              error={speakerFormErrors.org_name}
            />

            <div className="md:col-span-2">
              <InputField
                icon={faBuilding}
                label="Organization Title"
                name="org_title"
                placeholder="Organization Title"
                value={values2.org_title}
                onChange={handleChange2}
                error={speakerFormErrors.org_title}
              />
            </div>

            <div className="md:col-span-2">
              <Button
                text={load ? "Submitting Application..." : "Submit Speaker Application"}
                type="submit"
                className={`w-full transition-all duration-300 ${load ? "opacity-50 cursor-not-allowed" : "hover:scale-105"}`}
                disabled={load}
              />
            </div>
          </form>
        </section>
      </div>
    </div>
  )
}

export default FormsComp

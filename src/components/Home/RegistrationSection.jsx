import { useState } from "react"
import RegistrationForm from "../Registration/RegistrationForm"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheckCircle, faUsers, faCalendarAlt } from "@fortawesome/free-solid-svg-icons"
import Button from "@/shared/Buttons"

const RegistrationSection = () => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const [registrationData, setRegistrationData] = useState(null)

  const handleRegistrationSuccess = (data) => {
    setRegistrationData(data)
    setShowSuccessMessage(true)

    // Scroll to top to show success message
    window.scrollTo({ top: 0, behavior: "smooth" })

    // Hide success message after 10 seconds
    setTimeout(() => {
      setShowSuccessMessage(false)
    }, 10000)
  }

  if (showSuccessMessage) {
    return (
      <div className="w-full min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center px-4 py-8">
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-2xl p-8 text-center">
          <div className="mb-8">
            <FontAwesomeIcon icon={faCheckCircle} className="text-6xl text-green-500 mb-4" />
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 font-montserrat">
              Registration Successful!
            </h1>
            <p className="text-lg text-gray-600 font-lato">
              Thank you for registering for TES 2026. Your application has been received and is being processed.
            </p>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8 text-left">
            <h3 className="text-lg font-semibold text-yellow-800 mb-3">What happens next?</h3>
            <ul className="space-y-2 text-yellow-700">
              <li className="flex items-start">
                <FontAwesomeIcon icon={faCheckCircle} className="mt-1 mr-3 text-yellow-600" />
                <span>You'll receive a confirmation email within 24 hours</span>
              </li>
              <li className="flex items-start">
                <FontAwesomeIcon icon={faUsers} className="mt-1 mr-3 text-yellow-600" />
                <span>Our team will review your application</span>
              </li>
              <li className="flex items-start">
                <FontAwesomeIcon icon={faCalendarAlt} className="mt-1 mr-3 text-yellow-600" />
                <span>Event details and access links will be sent closer to the date</span>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">Event Date</h4>
              <p className="text-gray-600">July 26, 2026</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">Format</h4>
              <p className="text-gray-600">Virtual & Abuja</p>
            </div>
          </div>

          <Button
            text="Continue Exploring"
            onClick={() => setShowSuccessMessage(false)}
            className="bg-yellow-600 border-yellow-700 hover:bg-yellow-700"
          />

          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Questions? Contact us at{" "}
              <a href="mailto:tees@tongston.com" className="text-yellow-600 hover:underline">
                tees@tongston.com
              </a>
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full bg-gradient-to-br from-gray-50 to-blue-50 py-12">
      <div className="container mx-auto">
        <RegistrationForm onSuccess={handleRegistrationSuccess} />
      </div>
    </div>
  )
}

export default RegistrationSection

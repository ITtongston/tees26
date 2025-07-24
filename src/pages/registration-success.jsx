import Head from "next/head"
import Link from "next/link"
import Nav2 from "@/components/Nav/Nav2"
import Foot from "@/components/Nav/Foot"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheckCircle, faCalendarAlt, faEnvelope, faUsers } from "@fortawesome/free-solid-svg-icons"

const RegistrationSuccess = () => {
  return (
    <>
      <Head>
        <title>Registration Successful | TES 2026</title>
        <meta name="description" content="Your registration for TES 2026 has been successfully submitted" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <Nav2 />

        <div className="container mx-auto px-4 py-20 mt-20">
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-xl p-8 text-center">
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
                  <FontAwesomeIcon icon={faEnvelope} className="mt-1 mr-3 text-yellow-600" />
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

            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link href="/">
                <button className="bg-yellow-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-700 transition-colors">
                  Back to Home
                </button>
              </Link>
              <Link href="/register-2026">
                <button className="bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors">
                  Register Another Person
                </button>
              </Link>
            </div>

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

        <Foot />
      </div>
    </>
  )
}

export default RegistrationSuccess

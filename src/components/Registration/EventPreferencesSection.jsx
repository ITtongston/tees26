"use client"

import InputField from "./InputField"

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

const BRAND_COLORS = {
  primary: "#EAB308",
  secondary: "#DC2626",
  success: "#059669",
  error: "#DC2626",
}

const EventPreferencesSection = ({ formData, handleInputChange, errors, fieldStatus }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
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
            <label key={interest} className="flex items-center p-2 border rounded-lg hover:bg-gray-50 cursor-pointer">
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
            <label key={option} className="flex items-center p-2 border rounded-lg hover:bg-gray-50 cursor-pointer">
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
  )
}

export default EventPreferencesSection

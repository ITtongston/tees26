"use client"

import InputField from "./InputField"

const EXPERIENCE_LEVELS = ["Student", "Entry Level", "Mid Level", "Senior Level", "Executive", "Entrepreneur"]

const ProfessionalInfoSection = ({ formData, handleInputChange, errors, fieldStatus }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
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
  )
}

export default ProfessionalInfoSection

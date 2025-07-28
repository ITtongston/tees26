"use client"

import InputField from "./InputField"

const AdditionalInfoSection = ({ formData, handleInputChange, errors }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
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
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500 resize-none"
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
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500 resize-none"
            placeholder="Any special requirements or accessibility needs"
            maxLength={300}
          />
          <p className="text-xs text-gray-500 mt-1">{formData.specialRequirements.length}/300 characters</p>
        </div>
      </div>
    </div>
  )
}

export default AdditionalInfoSection

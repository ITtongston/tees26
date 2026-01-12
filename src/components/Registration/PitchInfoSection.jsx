"use client"

import InputField from "./InputField"

const PitchInfoSection = ({ formData, handleInputChange, errors, showPitchFields }) => {
  if (!showPitchFields) return null

  return (
    <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200 shadow-md">
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
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500 resize-none"
            placeholder="Brief description of your pitch (max 1000 characters)"
            maxLength={1000}
          />
          <p className="text-xs text-gray-500 mt-1">{formData.pitchDescription.length}/1000 characters</p>
        </div>
      </div>
    </div>
  )
}

export default PitchInfoSection

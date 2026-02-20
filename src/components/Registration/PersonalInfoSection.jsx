"use client"

import InputField from "./InputField"

const PersonalInfoSection = ({ formData, handleInputChange, errors, fieldStatus }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
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
        <div className="md:col-span-2">
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
    </div>
  )
}

export default PersonalInfoSection

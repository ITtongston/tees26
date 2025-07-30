// Registration model schema and validation functions
export const RegistrationSchema = {
  // Personal Information
  fullName: { type: "string", required: true, maxLength: 100 },
  email: { type: "string", required: true, pattern: /^\S+@\S+\.\S+$/ },
  phone: { type: "string", required: true },
  country: { type: "string", required: true },
  city: { type: "string", required: true },

  // Professional Information
  organization: { type: "string", required: true },
  jobTitle: { type: "string", required: true },
  industry: { type: "string", required: true },
  experienceLevel: {
    type: "string",
    required: true,
    enum: ["Student", "Entry Level", "Mid Level", "Senior Level", "Executive", "Entrepreneur"],
  },

  // Event Preferences
  participationType: {
    type: "string",
    required: true,
    enum: ["Attendee", "Speaker", "Investor", "Entrepreneur/Pitcher", "Student", "Media"],
  },
  interests: {
    type: "array",
    items: {
      enum: [
        "Education",
        "Enterprise",
        "Media",
        "Finance",
        "Technology",
        "Healthcare",
        "Agriculture",
        "Sustainability",
      ],
    },
  },

  // Additional Information
  linkedinProfile: { type: "string" },
  websiteUrl: { type: "string" },
  bio: { type: "string", maxLength: 500 },

  // For speakers/pitchers
  pitchTitle: { type: "string" },
  pitchDescription: { type: "string", maxLength: 1000 },

  // Networking preferences
  lookingToConnect: {
    type: "array",
    items: {
      enum: ["Investors", "Mentors", "Collaborators", "Customers", "Partners", "Industry Experts"],
    },
  },

  // Administrative
  registrationStatus: {
    type: "string",
    enum: ["pending", "confirmed", "waitlisted", "cancelled"],
    default: "pending",
  },
  paymentStatus: {
    type: "string",
    enum: ["pending", "completed", "failed", "refunded"],
    default: "pending",
  },
  specialRequirements: { type: "string", maxLength: 300 },

  // Timestamps
  registeredAt: { type: "date", default: () => new Date() },
  updatedAt: { type: "date", default: () => new Date() },
}

// Validation function
export function validateRegistration(data) {
  const errors = {}
  const requiredFields = [
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

  // Check required fields
  requiredFields.forEach((field) => {
    if (!data[field] || (typeof data[field] === "string" && data[field].trim() === "")) {
      errors[field] = `${field.replace(/([A-Z])/g, " $1").toLowerCase()} is required`
    }
  })

  // Email validation
  if (data.email && !/^\S+@\S+\.\S+$/.test(data.email)) {
    errors.email = "Please enter a valid email address"
  }

  // Enum validations
  if (data.experienceLevel && !RegistrationSchema.experienceLevel.enum.includes(data.experienceLevel)) {
    errors.experienceLevel = "Invalid experience level"
  }

  if (data.participationType && !RegistrationSchema.participationType.enum.includes(data.participationType)) {
    errors.participationType = "Invalid participation type"
  }

  // Length validations
  if (data.fullName && data.fullName.length > 100) {
    errors.fullName = "Full name cannot exceed 100 characters"
  }

  if (data.bio && data.bio.length > 500) {
    errors.bio = "Bio cannot exceed 500 characters"
  }

  if (data.pitchDescription && data.pitchDescription.length > 1000) {
    errors.pitchDescription = "Pitch description cannot exceed 1000 characters"
  }

  if (data.specialRequirements && data.specialRequirements.length > 300) {
    errors.specialRequirements = "Special requirements cannot exceed 300 characters"
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  }
}

// Create registration document
export function createRegistrationDocument(data) {
  return {
    ...data,
    email: data.email.toLowerCase(),
    registrationStatus: "pending",
    paymentStatus: "pending",
    registeredAt: new Date(),
    updatedAt: new Date(),
  }
}

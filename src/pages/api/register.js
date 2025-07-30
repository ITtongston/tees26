import clientPromise from "./config/db"
import { validateRegistration, createRegistrationDocument } from "./models/Registration"
import emailjs from "@emailjs/browser"

// Helper function to send confirmation emails
async function sendConfirmationEmails(registrationData, registrationId) {
  const emailJSConfig = {
    serviceId: process.env.EMAILJS_SERVICE_ID,
    userTemplateId: process.env.EMAILJS_USER_TEMPLATE_ID,
    adminTemplateId: process.env.EMAILJS_ADMIN_TEMPLATE_ID,
    publicKey: process.env.EMAILJS_PUBLIC_KEY,
    privateKey: process.env.EMAILJS_PRIVATE_KEY,
  }

  // User confirmation email template params
  const userTemplateParams = {
    to_name: registrationData.fullName,
    to_email: registrationData.email,
    participant_type: registrationData.participationType,
    registration_id: registrationId,
    organization: registrationData.organization,
    event_date: "July 26, 2026",
    event_name: "TES 2026 - Tongston Entrepreneurial Education Summit",
    event_location: "Virtual & Abuja",
    interests: registrationData.interests?.join(", ") || "Not specified",
    special_requirements: registrationData.specialRequirements || "None",
  }

  // Admin notification email template params
  const adminTemplateParams = {
    user_name: registrationData.fullName,
    user_email: registrationData.email,
    user_phone: registrationData.phone,
    user_organization: registrationData.organization,
    user_job_title: registrationData.jobTitle,
    user_country: registrationData.country,
    user_city: registrationData.city,
    user_type: registrationData.participationType,
    user_interests: registrationData.interests?.join(", ") || "Not specified",
    registration_id: registrationId,
    registration_date: new Date().toLocaleDateString(),
    pitch_title: registrationData.pitchTitle || "N/A",
    linkedin_profile: registrationData.linkedinProfile || "Not provided",
  }

  // Send user confirmation email
  await emailjs.send(emailJSConfig.serviceId, emailJSConfig.userTemplateId, userTemplateParams, emailJSConfig.publicKey)

  // Send admin notification email
  await emailjs.send(
    emailJSConfig.serviceId,
    emailJSConfig.adminTemplateId,
    adminTemplateParams,
    emailJSConfig.privateKey,
  )
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed",
    })
  }

  try {
    // Connect to database
    const client = await clientPromise
    const db = client.db("tees2026")
    const registrations = db.collection("registrations")

    const {
      fullName,
      email,
      phone,
      country,
      city,
      organization,
      jobTitle,
      industry,
      experienceLevel,
      participationType,
      interests,
      linkedinProfile,
      websiteUrl,
      bio,
      pitchTitle,
      pitchDescription,
      lookingToConnect,
      specialRequirements,
    } = req.body

    // Validate request data
    const validation = validateRegistration(req.body)
    if (!validation.isValid) {
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors: validation.errors,
      })
    }

    // Check if email already exists
    const existingRegistration = await registrations.findOne({
      email: req.body.email.toLowerCase(),
    })

    if (existingRegistration) {
      return res.status(409).json({
        success: false,
        message: "Email already registered",
        registrationId: existingRegistration._id,
      })
    }

    // Create registration document
    const registrationDoc = createRegistrationDocument(req.body)

    // Insert into database
    const result = await registrations.insertOne(registrationDoc)

    // Send confirmation emails
    try {
      await sendConfirmationEmails(registrationDoc, result.insertedId)
    } catch (emailError) {
      console.error("Email sending failed:", emailError)
      // Don't fail the registration if email fails
    }

    // Return success response
    res.status(201).json({
      success: true,
      message: "Registration successful",
      registrationId: result.insertedId,
      data: {
        fullName: registrationDoc.fullName,
        email: registrationDoc.email,
        participationType: registrationDoc.participationType,
        registrationStatus: registrationDoc.registrationStatus,
      },
    })
  } catch (error) {
    console.error("Registration error:", error)
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: process.env.NODE_ENV === "development" ? error.message : "Something went wrong",
    })
  }
}

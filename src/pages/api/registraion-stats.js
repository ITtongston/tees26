import clientPromise from "./config/db"

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed",
    })
  }

  try {
    const { name, email, city, industry_of_expertise, topic_interest, org_name, org_title } = req.body

    // Basic validation
    const requiredFields = {
      name,
      email,
      city,
      industry_of_expertise,
      topic_interest,
      org_name,
      org_title,
    }

    const missingFields = Object.entries(requiredFields)
      .filter(([key, value]) => !value || value.trim() === "")
      .map(([key]) => key)

    if (missingFields.length > 0) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields",
        missingFields,
      })
    }

    // Email validation
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email format",
      })
    }

    // Connect to database
    const client = await clientPromise
    const db = client.db("tees2026")
    const speakerApplications = db.collection("speaker_applications")

    // Check if email already exists
    const existingApplication = await speakerApplications.findOne({
      email: email.toLowerCase(),
    })

    if (existingApplication) {
      return res.status(409).json({
        success: false,
        message: "Speaker application already submitted for this email",
      })
    }

    // Create speaker application document
    const speakerDoc = {
      name: name.trim(),
      email: email.toLowerCase().trim(),
      city: city.trim(),
      industryOfExpertise: industry_of_expertise.trim(),
      topicInterest: topic_interest.trim(),
      organizationName: org_name.trim(),
      organizationTitle: org_title.trim(),
      applicationType: "speaker",
      applicationStatus: "pending",
      submittedAt: new Date(),
    }

    // Insert into database
    const result = await speakerApplications.insertOne(speakerDoc)

    res.status(201).json({
      success: true,
      message: "Speaker application submitted successfully",
      applicationId: result.insertedId,
      data: {
        name: speakerDoc.name,
        email: speakerDoc.email,
        applicationType: "speaker",
      },
    })
  } catch (error) {
    console.error("Speaker application error:", error)
    res.status(500).json({
      success: false,
      message: "Internal server error",
    })
  }
}

import clientPromise from "./config/db"

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed",
    })
  }

  try {
    const { name, email, city, industry } = req.body

    // Basic validation
    if (!name || !email || !city || !industry) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
        errors: {
          name: !name ? "Name is required" : null,
          email: !email ? "Email is required" : null,
          city: !city ? "City is required" : null,
          industry: !industry ? "Industry is required" : null,
        },
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
    const quickRegistrations = db.collection("quick_registrations")

    // Check if email already exists
    const existingRegistration = await quickRegistrations.findOne({
      email: email.toLowerCase(),
    })

    if (existingRegistration) {
      return res.status(409).json({
        success: false,
        message: "Email already registered",
      })
    }

    // Create quick registration document
    const quickRegDoc = {
      name: name.trim(),
      email: email.toLowerCase().trim(),
      city: city.trim(),
      industry: industry.trim(),
      registrationType: "quick",
      registeredAt: new Date(),
      status: "pending",
    }

    // Insert into database
    const result = await quickRegistrations.insertOne(quickRegDoc)

    // Send confirmation email using EmailJS (client-side approach)
    // For server-side, you might want to use nodemailer or similar
    try {
      // This would typically be done on the client side with EmailJS
      console.log("Quick registration email should be sent for:", email)
    } catch (emailError) {
      console.error("Email sending failed:", emailError)
    }

    res.status(201).json({
      success: true,
      message: "Quick registration successful",
      registrationId: result.insertedId,
      data: {
        name: quickRegDoc.name,
        email: quickRegDoc.email,
        registrationType: "quick",
      },
    })
  } catch (error) {
    console.error("Quick registration error:", error)
    res.status(500).json({
      success: false,
      message: "Internal server error",
    })
  }
}

"use client"

import { useState, useEffect } from "react"
import axios from "axios"
import CountUp from "react-countup"

function RegistrationStats() {
  const [stats, setStats] = useState({
    total: 0,
    confirmed: 0,
    pending: 0,
    recent: 0,
    participationTypes: [],
    topCountries: [],
  })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchStats = async () => {
      try {
        setLoading(true)
        const response = await axios.get("/api/registration-stats")

        if (response.data.success) {
          setStats(response.data.data)
          setError(null)
        }
      } catch (error) {
        console.error("Failed to fetch registration stats:", error)
        setError("Failed to load statistics")
      } finally {
        setLoading(false)
      }
    }

    fetchStats()
    // Refresh stats every 5 minutes
    const interval = setInterval(fetchStats, 5 * 60 * 1000)
    return () => clearInterval(interval)
  }, [])

  if (loading) {
    return (
      <div className="w-full h-[200px] bg-white flex justify-center items-center">
        <div className="text-gray-600">Loading registration statistics...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="w-full h-[200px] bg-white flex justify-center items-center">
        <div className="text-red-600">{error}</div>
      </div>
    )
  }

  const statCards = [
    {
      number: stats.total,
      text: "Total Registrations",
      color: "text-blue-600",
    },
    {
      number: stats.confirmed,
      text: "Confirmed Attendees",
      color: "text-green-600",
    },
    {
      number: stats.pending,
      text: "Pending Approvals",
      color: "text-yellow-600",
    },
    {
      number: stats.recent,
      text: "This Week",
      color: "text-purple-600",
    },
  ]

  return (
    <div className="w-full h-[fixed] bg-gradient-to-r from-gray-50 to-gray-100 flex flex-col gap-y-8 justify-center items-start mb-9 py-12">
      <section className="heading-section w-full h-[fixed] bg-opacity-80 flex justify-center items-center">
        <h1 className="text-xl font-bold text-gray-800 lg:text-3xl text-center font-ger">
          TES 2026 Registration Progress
        </h1>
      </section>

      <section className="w-full px-3 md:px-8 cards-container grid grid-cols-2 md:grid-cols-4 justify-center items-center mx-auto gap-y-4 gap-x-3">
        {statCards.map((card, index) => (
          <div
            key={index}
            className="w-full h-[180px] md:h-[220px] rounded-xl shadow-lg bg-white border border-gray-200 hover:shadow-xl transition-shadow duration-300 justify-center items-center flex flex-col gap-y-2 mx-auto"
          >
            <p className={`${card.color} font-black font-lato text-xl md:text-2xl lg:text-4xl`}>
              <CountUp end={card.number} duration={2} />
            </p>
            <p className="text-gray-700 font-semibold font-lato text-sm text-center md:text-base px-2">{card.text}</p>
          </div>
        ))}
      </section>

      {stats.participationTypes.length > 0 && (
        <section className="w-full px-3 md:px-8 mt-8">
          <h3 className="text-lg font-bold text-gray-800 mb-4 text-center">Registration by Type</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {stats.participationTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow-md text-center">
                <div className="text-2xl font-bold text-yellow-600">{type.count}</div>
                <div className="text-sm text-gray-600 mt-1">{type._id}</div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}

export default RegistrationStats

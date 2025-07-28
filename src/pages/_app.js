"use client"

import { useEffect } from "react"
import Head from "next/head"
import "./global.css"
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Foot from "@/components/Nav/Foot"

config.autoAddCss = false

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Prevent extension conflicts
    const handleError = (event) => {
      // Check if error is from browser extension
      if (event.filename && event.filename.includes("chrome-extension://")) {
        event.preventDefault()
        console.warn("Browser extension error suppressed:", event.error)
        return true
      }
    }

    // Add error handler
    window.addEventListener("error", handleError)

    // Cleanup
    return () => {
      window.removeEventListener("error", handleError)
    }
  }, [])

  return (
    <>
      <Head>
        <title>Tongston Entrepreneurial Education Summit (TES-2026)</title>
        <meta name="description" content="Learn | Connect | Pitch | Invest" />
        <link rel="icon" type="image/png" href="/assets/images/tees-logo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div>
        <Component {...pageProps} />
        <Foot />
        <ToastContainer />
      </div>
    </>
  )
}

export default MyApp

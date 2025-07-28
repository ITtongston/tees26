"use client"

import React from "react"

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    // Only log non-extension errors
    if (!error.stack || !error.stack.includes("chrome-extension://")) {
      console.error("Application Error:", error, errorInfo)
    }
  }

  render() {
    if (this.state.hasError) {
      // Check if it's an extension error
      if (this.state.error && this.state.error.stack && this.state.error.stack.includes("chrome-extension://")) {
        // Don't show error UI for extension errors, just render children
        return this.props.children
      }

      // Fallback UI for actual application errors
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Something went wrong</h2>
            <p className="text-gray-600 mb-6">
              We're sorry, but something unexpected happened. Please refresh the page.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-yellow-600 text-white px-6 py-3 rounded-lg hover:bg-yellow-700 transition-colors"
            >
              Refresh Page
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary

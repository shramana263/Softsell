import { useState } from "react"
import HomePage from "./pages/HomePage"
import LoginPage from "./app/login/LoginPage"


// Create a navigation context that can be used throughout the app
export type Page = "home" | "login"

function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home")

  // Function to navigate between pages
  const navigate = (page: Page) => {
    setCurrentPage(page)
    // Update URL for bookmarking without page reload
    window.history.pushState(null, "", page === "home" ? "/" : `/${page}`)
  }

  // Render the appropriate page based on the current state
  return (
    <>
      {currentPage === "home" && <HomePage navigate={navigate} />}
      {/* {currentPage === "login" && <LoginPage navigate={navigate} />} */}
    </>
  )
}

export default App

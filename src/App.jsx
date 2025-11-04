import { useState } from "react"
import { LoginPage } from "./components/LoginPage"
import { AdminDashboard } from "./components/AdminDashboard"
import { UserDashboard } from "./components/UserDashboard"

export default function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [userId, setUserId] = useState("")

  if (!currentUser) {
    return (
      <LoginPage
        onLogin={(role, id) => {
          setCurrentUser(role)
          setUserId(id)
        }}
      />
    )
  }

  return currentUser === "admin" ? (
    <AdminDashboard userId={userId} onLogout={() => setCurrentUser(null)} />
  ) : (
    <UserDashboard userId={userId} onLogout={() => setCurrentUser(null)} />
  )
}

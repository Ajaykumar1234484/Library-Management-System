import { useState } from "react"
import { Button } from "./ui/Button"
import { MaintenancePanel } from "./admin/MaintenancePanel"
import { ReportsPanel } from "./admin/ReportsPanel"
import { TransactionsPanel } from "./admin/TransactionsPanel"

export function AdminDashboard({ userId, onLogout }) {
  const [activeTab, setActiveTab] = useState("maintenance")

  const tabs = [
    { id: "maintenance", label: "Maintenance" },
    { id: "reports", label: "Reports" },
    { id: "transactions", label: "Transactions" },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
            <p className="text-sm text-gray-600">Welcome, {userId}</p>
          </div>
          <Button onClick={onLogout} variant="outline">
            Logout
          </Button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex gap-2 bg-gray-100 p-1 rounded-lg w-fit mb-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded font-medium transition-colors ${
                activeTab === tab.id
                  ? "bg-white text-gray-900 shadow"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {activeTab === "maintenance" && <MaintenancePanel />}
        {activeTab === "reports" && <ReportsPanel />}
        {activeTab === "transactions" && <TransactionsPanel />}
      </div>
    </div>
  )
}
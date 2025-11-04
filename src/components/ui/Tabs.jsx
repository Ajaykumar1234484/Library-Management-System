import { useState } from "react"

export function Tabs({ value, onValueChange, children }) {
  return <div>{children}</div>
}

export function TabsList({ children, className = "" }) {
  return <div className={`flex gap-2 bg-gray-100 p-1 rounded-lg w-fit ${className}`}>{children}</div>
}

export function TabsTrigger({ value, children, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded font-medium transition-colors ${
        isActive ? "bg-white text-gray-900 shadow" : "text-gray-600 hover:text-gray-900"
      }`}
    >
      {children}
    </button>
  )
}

export function TabsContent({ value, isActive, children }) {
  return isActive ? <div className="mt-6">{children}</div> : null
}

export function TabsWrapper({ defaultValue, children }) {
  const [activeTab, setActiveTab] = useState(defaultValue)

  return <div>{children(activeTab, setActiveTab)}</div>
}
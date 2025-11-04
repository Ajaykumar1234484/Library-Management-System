import { useState } from "react"
import { Button } from "../ui/Button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/Card"

export function TransactionsPanel() {
  const [transactions, setTransactions] = useState([
    {
      id: "TXN001",
      memberId: "MEM001",
      bookCode: "SC(B/M)000001",
      action: "issue",
      date: "2024-11-01",
      status: "completed",
      dueDate: "2024-11-15",
    },
    {
      id: "TXN002",
      memberId: "MEM002",
      bookCode: "FC(B/M)000001",
      action: "return",
      date: "2024-11-03",
      status: "completed",
    },
    {
      id: "TXN003",
      memberId: "MEM001",
      bookCode: "EC(B/M)000001",
      action: "issue",
      date: "2024-10-25",
      status: "overdue",
      dueDate: "2024-11-08",
    },
  ])

  const [searchId, setSearchId] = useState("")
  const [checkAvailable, setCheckAvailable] = useState(false)

  const handleCheckAvailability = () => {
    setCheckAvailable(true)
    setTimeout(() => setCheckAvailable(false), 2000)
  }

  const handleIssueBook = () => {
    const newTxn = {
      id: `TXN${String(transactions.length + 1).padStart(3, "0")}`,
      memberId: searchId || "MEM001",
      bookCode: "SC(B/M)000001",
      action: "issue",
      date: new Date().toISOString().split("T")[0],
      status: "completed",
      dueDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
    }
    setTransactions([...transactions, newTxn])
  }

  const handleReturnBook = () => {
    const newTxn = {
      id: `TXN${String(transactions.length + 1).padStart(3, "0")}`,
      memberId: searchId || "MEM001",
      bookCode: "SC(B/M)000001",
      action: "return",
      date: new Date().toISOString().split("T")[0],
      status: "completed",
    }
    setTransactions([...transactions, newTxn])
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case "completed":
        return "✅"
      case "pending":
        return "⏳"
      case "overdue":
        return "❌"
      default:
        return "•"
    }
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Check Book Availability</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <input
              type="text"
              placeholder="Enter book code"
              value={searchId}
              onChange={(e) => setSearchId(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <Button onClick={handleCheckAvailability} className="w-full">
              Check Availability
            </Button>
            {checkAvailable && (
              <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-sm text-green-800">✓ Book is available (5 copies in stock)</p>
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Issue a Book</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <input
              type="text"
              placeholder="Member ID"
              value={searchId}
              onChange={(e) => setSearchId(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <Button onClick={handleIssueBook} className="w-full">
              Issue Book
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Return a Book</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <input
              type="text"
              placeholder="Member ID"
              value={searchId}
              onChange={(e) => setSearchId(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <Button onClick={handleReturnBook} className="w-full">
              Return Book
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Transaction History</CardTitle>
          <CardDescription>All book transactions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Transaction ID</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Member ID</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Book Code</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Action</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Date</th>
                  <th className="text-center py-3 px-4 font-semibold text-gray-900">Status</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((txn) => (
                  <tr key={txn.id} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="py-3 px-4 font-mono text-gray-900">{txn.id}</td>
                    <td className="py-3 px-4 text-gray-900">{txn.memberId}</td>
                    <td className="py-3 px-4 font-mono text-gray-900">{txn.bookCode}</td>
                    <td className="py-3 px-4">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          txn.action === "issue" ? "bg-blue-100 text-blue-800" : "bg-purple-100 text-purple-800"
                        }`}
                      >
                        {txn.action.charAt(0).toUpperCase() + txn.action.slice(1)}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-gray-900">{txn.date}</td>
                    <td className="py-3 px-4 text-center text-lg">{getStatusIcon(txn.status)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
import { useState } from "react"
import { Button } from "./ui/Button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/Card"

export function UserDashboard({ userId, onLogout }) {
  const [searchQuery, setSearchQuery] = useState("")
  const [issuedBooks] = useState([
    {
      code: "SC(B/M)000001",
      title: "Introduction to Science",
      issueDate: "2024-11-01",
      dueDate: "2024-11-15",
      status: "active",
    },
    {
      code: "FC(B/M)000001",
      title: "Fiction Novel",
      issueDate: "2024-10-20",
      dueDate: "2024-11-03",
      status: "overdue",
    },
  ])

  const [availableBooks] = useState([
    { code: "EC(B/M)000001", title: "Economics Basics", category: "Economics", available: 3 },
    { code: "CH(B/M)000001", title: "Children's Story", category: "Children", available: 5 },
    { code: "PD(B/M)000001", title: "Self Improvement", category: "Personal Development", available: 2 },
  ])

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-card border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-foreground">My Library</h1>
            <p className="text-sm text-muted-foreground">Welcome, {userId}</p>
          </div>
          <Button onClick={onLogout} variant="outline">
            🚪 Logout
          </Button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>My Issued Books</CardTitle>
              <CardDescription>Books currently issued to you</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {issuedBooks.map((book) => (
                  <div key={book.code} className="p-4 border border-border rounded-lg bg-card hover:bg-muted/50">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold text-foreground">{book.title}</h4>
                        <p className="text-sm text-muted-foreground">Code: {book.code}</p>
                        <p className="text-xs text-muted-foreground mt-1">
                          Issued: {book.issueDate} | Due: {book.dueDate}
                        </p>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          book.status === "active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                        }`}
                      >
                        {book.status === "active" ? "Active" : "Overdue"}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Search Library Catalog</CardTitle>
              <CardDescription>Find and view available books</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <span className="absolute left-3 top-2.5 text-muted-foreground">🔍</span>
                  <input
                    type="text"
                    placeholder="Search books by title or code..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-3 py-2 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <Button>Search</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Available Books</CardTitle>
              <CardDescription>Books available for issue</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4 font-semibold text-foreground">Book Code</th>
                      <th className="text-left py-3 px-4 font-semibold text-foreground">Title</th>
                      <th className="text-left py-3 px-4 font-semibold text-foreground">Category</th>
                      <th className="text-left py-3 px-4 font-semibold text-foreground">Available</th>
                      <th className="text-center py-3 px-4 font-semibold text-foreground">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {availableBooks.map((book) => (
                      <tr key={book.code} className="border-b border-border hover:bg-muted/50">
                        <td className="py-3 px-4 font-mono text-foreground">{book.code}</td>
                        <td className="py-3 px-4 text-foreground">{book.title}</td>
                        <td className="py-3 px-4 text-foreground">{book.category}</td>
                        <td className="py-3 px-4">
                          <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            {book.available} available
                          </span>
                        </td>
                        <td className="py-3 px-4 text-center">
                          <Button size="sm">Request</Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Account Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <p className="text-sm text-muted-foreground">User ID</p>
                  <p className="font-semibold text-foreground">{userId}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Member Status</p>
                  <p className="font-semibold text-foreground">Active</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Books Issued</p>
                  <p className="font-semibold text-foreground">{issuedBooks.length}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Pending Fines</p>
                  <p className="font-semibold text-destructive">₹0</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

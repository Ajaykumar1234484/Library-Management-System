import { useState } from "react"
import { Button } from "../ui/Button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/Card"

export function MaintenancePanel() {
  const [members, setMembers] = useState([
    { id: "MEM001", name: "John Doe", email: "john@example.com", joinDate: "2024-01-15" },
    { id: "MEM002", name: "Jane Smith", email: "jane@example.com", joinDate: "2024-02-20" },
  ])

  const [books, setBooks] = useState([
    { code: "SC(B/M)000001", title: "Introduction to Science", category: "Science", available: 5 },
    { code: "EC(B/M)000001", title: "Economics Basics", category: "Economics", available: 3 },
    { code: "FC(B/M)000001", title: "Fiction Novel", category: "Fiction", available: 8 },
  ])

  const [newMember, setNewMember] = useState({ name: "", email: "" })
  const [newBook, setNewBook] = useState({ title: "", code: "", category: "", available: 0 })
  const [activeSubTab, setActiveSubTab] = useState("members")

  const addMember = () => {
    if (newMember.name && newMember.email) {
      setMembers([
        ...members,
        {
          id: `MEM${String(members.length + 1).padStart(3, "0")}`,
          name: newMember.name,
          email: newMember.email,
          joinDate: new Date().toISOString().split("T")[0],
        },
      ])
      setNewMember({ name: "", email: "" })
    }
  }

  const addBook = () => {
    if (newBook.title && newBook.code && newBook.category) {
      setBooks([...books, newBook])
      setNewBook({ title: "", code: "", category: "", available: 0 })
    }
  }

  const removeMember = (id) => {
    setMembers(members.filter((m) => m.id !== id))
  }

  const removeBook = (code) => {
    setBooks(books.filter((b) => b.code !== code))
  }

  return (
    <div className="space-y-6">
      <div className="flex gap-2 bg-gray-100 p-1 rounded-lg w-fit">
        {["members", "books", "users"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveSubTab(tab)}
            className={`px-4 py-2 rounded font-medium transition-colors capitalize ${
              activeSubTab === tab
                ? "bg-white text-gray-900 shadow"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeSubTab === "members" && (
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Add New Member</CardTitle>
              <CardDescription>Register a new library member</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4">
                <input
                  type="text"
                  placeholder="Member Name"
                  value={newMember.name}
                  onChange={(e) => setNewMember({ ...newMember, name: e.target.value })}
                  className="px-3 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={newMember.email}
                  onChange={(e) => setNewMember({ ...newMember, email: e.target.value })}
                  className="px-3 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <Button onClick={addMember}>➕ Add Member</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Member List</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Member ID</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Name</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Email</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Join Date</th>
                      <th className="text-center py-3 px-4 font-semibold text-gray-900">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {members.map((member) => (
                      <tr key={member.id} className="border-b border-gray-200 hover:bg-gray-50">
                        <td className="py-3 px-4 text-gray-900">{member.id}</td>
                        <td className="py-3 px-4 text-gray-900">{member.name}</td>
                        <td className="py-3 px-4 text-gray-900">{member.email}</td>
                        <td className="py-3 px-4 text-gray-900">{member.joinDate}</td>
                        <td className="py-3 px-4 text-center">
                          <button
                            onClick={() => removeMember(member.id)}
                            className="text-red-600 hover:text-red-700 transition-colors text-lg"
                          >
                            🗑️
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {activeSubTab === "books" && (
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Add New Book</CardTitle>
              <CardDescription>Register a new book in the library</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4">
                <input
                  type="text"
                  placeholder="Book Code (e.g., SC(B/M)000001)"
                  value={newBook.code}
                  onChange={(e) => setNewBook({ ...newBook, code: e.target.value })}
                  className="px-3 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <input
                  type="text"
                  placeholder="Book Title"
                  value={newBook.title}
                  onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
                  className="px-3 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <select
                  value={newBook.category}
                  onChange={(e) => setNewBook({ ...newBook, category: e.target.value })}
                  className="px-3 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  <option value="">Select Category</option>
                  <option value="Science">Science</option>
                  <option value="Economics">Economics</option>
                  <option value="Fiction">Fiction</option>
                  <option value="Children">Children</option>
                  <option value="Personal Development">Personal Development</option>
                </select>
                <input
                  type="number"
                  placeholder="Number of Copies"
                  value={newBook.available}
                  onChange={(e) => setNewBook({ ...newBook, available: Number.parseInt(e.target.value) || 0 })}
                  className="px-3 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <Button onClick={addBook}>➕ Add Book</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Book Catalog</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Book Code</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Title</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Category</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Available</th>
                      <th className="text-center py-3 px-4 font-semibold text-gray-900">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {books.map((book) => (
                      <tr key={book.code} className="border-b border-gray-200 hover:bg-gray-50">
                        <td className="py-3 px-4 text-gray-900 font-mono">{book.code}</td>
                        <td className="py-3 px-4 text-gray-900">{book.title}</td>
                        <td className="py-3 px-4 text-gray-900">{book.category}</td>
                        <td className="py-3 px-4">
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium ${
                              book.available > 0 ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                            }`}
                          >
                            {book.available} copies
                          </span>
                        </td>
                        <td className="py-3 px-4 text-center">
                          <button
                            onClick={() => removeBook(book.code)}
                            className="text-red-600 hover:text-red-700 transition-colors text-lg"
                          >
                            🗑️
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {activeSubTab === "users" && (
        <Card>
          <CardHeader>
            <CardTitle>System Users</CardTitle>
            <CardDescription>Manage library system users and permissions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="p-4 bg-gray-100 rounded-lg">
              <p className="text-sm text-gray-600">
                Demo Mode: Users are stored in session state. In production, implement persistent user management with
                database integration.
              </p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/Card"

export function ReportsPanel() {
  const stats = [
    { label: "Total Members", value: "2,847", change: "+12% from last month" },
    { label: "Total Books", value: "5,234", change: "Across all categories" },
    { label: "Books Issued", value: "1,562", change: "Currently on loan" },
    { label: "Pending Fines", value: "₹45,320", change: "From overdue books", isDestructive: true },
  ]

  const categories = [
    { from: "SC(B/M)000001", to: "SC(B/M)000004", category: "Science" },
    { from: "EC(B/M)000001", to: "EC(B/M)000004", category: "Economics" },
    { from: "FC(B/M)000001", to: "FC(B/M)000004", category: "Fiction" },
    { from: "CH(B/M)000001", to: "CH(B/M)000004", category: "Children" },
    { from: "PD(B/M)000001", to: "PD(B/M)000004", category: "Personal Development" },
  ]

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.label}>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">{stat.label}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className={`text-3xl font-bold ${stat.isDestructive ? "text-red-600" : "text-gray-900"}`}>
                {stat.value}
              </div>
              <p className="text-xs text-gray-600 mt-1">{stat.change}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Product Details Report</CardTitle>
          <CardDescription>Book inventory by category</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Code From</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Code To</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Category</th>
                </tr>
              </thead>
              <tbody>
                {categories.map((cat) => (
                  <tr key={cat.category} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="py-3 px-4 font-mono text-gray-900">{cat.from}</td>
                    <td className="py-3 px-4 font-mono text-gray-900">{cat.to}</td>
                    <td className="py-3 px-4 text-gray-900">{cat.category}</td>
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
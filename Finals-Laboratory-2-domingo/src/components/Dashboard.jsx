import React, { Component } from 'react'

export class Dashboard extends Component {
  render() {
    return (
        <main className="flex-1 bg-blue-100 p-8">
            <h2 className="text-2xl font-semibold mb-4 text-blue-700">Dashboard</h2>
            <div className="container mx-auto">
              <h1 className="text-3xl font-bold mb-4 text-blue-600">Sample Table</h1>
              <table className="min-w-full">
                <thead>
                  <tr>
                     <th className="px-6 py-3 border-b-2 border-blue-300 text-left text-xs font-semibold text-black uppercase tracking-wider">ID</th>
                    <th className="px-6 py-3 border-b-2 border-blue-300 text-left text-xs font-semibold text-black uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 border-b-2 border-blue-300 text-left text-xs font-semibold text-black uppercase tracking-wider">Email</th>
                  </tr>
                </thead>
                <tbody>
                <tr>
                <td className="px-6 py-4 whitespace-nowrap border-b border-blue-300 text-black">1</td>
                 <td className="px-6 py-4 whitespace-nowrap border-b border-blue-300 text-black">James Domingo</td>
                <td className="px-6 py-4 whitespace-nowrap border-b border-blue-300 text-black">jamesdomingo@gmail.com.com</td>
                </tr>
                <tr>
                <td className="px-6 py-4 whitespace-nowrap border-b border-blue-300 text-black">2</td>
                <td className="px-6 py-4 whitespace-nowrap border-b border-blue-300 text-black">Cherry Batiquin</td>
                <td className="px-6 py-4 whitespace-nowrap border-b border-blue-300 text-black">cherrybatiquin@gmail.com</td>
                </tr>
              <tr>
              <td className="px-6 py-4 whitespace-nowrap border-b border-blue-300 text-black">3</td>
              <td className="px-6 py-4 whitespace-nowrap border-b border-blue-300 text-black">Ezra Sunday</td>
              <td className="px-6 py-4 whitespace-nowrap border-b border-blue-300 text-black">ezrasunday@gmail.com</td>
              </tr>
                  {/* Add more rows as needed */}
                </tbody>
              </table>
            </div>
        </main>
    )
  }
}

export default Dashboard

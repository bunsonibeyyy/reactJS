import React, { Component } from 'react'

export class Admin extends Component {
  render() {
    return (
        <main className="flex-1 bg-blue-200 p-8">
            <h2 className="text-2xl font-semibold mb-4 text-blue-700">Admin</h2>
            <p className="text-blue-500">This is the main content area of the Admin.</p>
        </main>
    )
  }
}

export default Admin

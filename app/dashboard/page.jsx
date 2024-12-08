import React from 'react'
import { signOut, SignOutButton } from '@clerk/nextjs'

const DashboardPage = () => {
  return (
    <>
    <h1 className="text-2xl font-bold mb-5">Dashboard</h1>
    <p>
        Welcome to the dashboard
    </p>
    <SignOutButton />
    </>
  )
}

export default DashboardPage
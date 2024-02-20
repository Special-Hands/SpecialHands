'use client'
import ProfileSideBar from '@/app/components/layout/ProfileSide'
import UserDonations from '@/app/components/layout/UserDonations'
import React from 'react'

function page() {
  return (
    <div>
        <ProfileSideBar  />
        <UserDonations />
    </div>
  )
}

export default page
import React from 'react'
import "./main.css"

export default function Navbar() {
  const userName = "John Doe"
  const profileInfo = "Profile Info"

  return (
    <div className="flex justify-between items-center p-2 bg-gray-100">
      <div>{userName}</div>
      <input
        type="text"
        placeholder="Search..."
        className="flex-1 mx-2 p-1 border border-gray-300 rounded"
      />
      <div>{profileInfo}</div>
    </div>
  )
}

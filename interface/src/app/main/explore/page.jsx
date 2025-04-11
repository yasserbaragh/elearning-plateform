import Explore from '@/app/components/Explore'
import React from 'react'
import api from "@/config"

export default async function page() {
  const videos = await fetch(`${api}/api/videos`)
  return (
    <div>
      <Explore videos={videos}/>
    </div>
  )
}

import Explore from '@/app/components/Explore'
import React from 'react'
import api, { fetchNoCache } from "@/config"

export default async function page() {
  const videos = await fetchNoCache(`/videos`)
  return (
    <div>
      <Explore videos={videos}/>
    </div>
  )
}

import ProfileTeach from '@/app/components/teacher/ProfileTeach'
import { fetchNoCache } from '@/config'
import React from 'react'

export default async function page() {
  const videos = await fetchNoCache("/videos")
  return (
    <div>
        <ProfileTeach gotVideos={videos} />
    </div>
  )
}

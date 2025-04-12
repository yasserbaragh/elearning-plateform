import ProfileTeach from '@/app/components/teacher/ProfileTeach'
import { fetchNoCache } from '@/config'
import React from 'react'

export default async function page() {
  const videos = await fetchNoCache("/videos")
  const quizzes = await fetchNoCache('/quizzes')
  return (
    <div>
        <ProfileTeach gotVideos={videos} gotQuizzes={quizzes}/>
    </div>
  )
}

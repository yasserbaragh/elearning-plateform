import React from 'react'
import Main from '../components/main/Main'
import { api, fetchNoCache } from '@/config'

export default async function page() {
  console.log("s", api)
  const quizzes = await fetchNoCache(`/quizz`)
  return (
    <div>
      <Main quizzes={quizzes}/>
    </div>
  )
}

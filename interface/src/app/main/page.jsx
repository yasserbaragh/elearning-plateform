import React from 'react'
import Main from '../components/main/Main'
import api from "@/config"

export default async function page() {
  const quizzes = await fetch(`${api}/api/quizz`)
  return (
    <div>
      <Main quizzes={quizzes}/>
    </div>
  )
}

import React from 'react'
import Escape from "@/app/components/Escape"
import { api } from '@/config'

export default async function page({ params }) {
  const game = await fetch(`${api}/api/quizz/${params.id}`)
  return (
    <div>
      <Escape game={quizz}/>
    </div>
  )
}

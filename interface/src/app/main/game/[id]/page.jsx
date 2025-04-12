import React from 'react'
import Escape from "@/app/components/Escape"
import { api, fetchNoCache } from '@/config'

export default async function page({ params }) {
  const id = params.id
  const game = await fetchNoCache(`/quizzes/${id}`)
  return (
    <div>
      <Escape game={game || ""}/>
    </div>
  )
}

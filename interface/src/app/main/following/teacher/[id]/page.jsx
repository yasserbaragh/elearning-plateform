import Teacher from '@/app/components/following/Teacher'
import { api } from '@/config'
import React from 'react'

export default async function page({ params }) {
    const videos = await fetch(`${api}/api/teacher/${params.id}/videos`)
    return (
        <div>
            <Teacher videos={videos}/>
        </div>
    )
}

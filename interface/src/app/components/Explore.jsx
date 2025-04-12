import React from 'react';
import { Card } from 'primereact/card';
import './main/main.css';

const videos = [
  { id: 1, title: 'Video 1', description: 'Description for Video 1' },
  { id: 2, title: 'Video 2', description: 'Description for Video 2' },
  { id: 3, title: 'Video 3', description: 'Description for Video 3' },
  { id: 4, title: 'Video 4', description: 'Description for Video 4' },
]

export default function Explore({ videos }) {
  return (
    <div className="escape-room-grid">
      {videos && videos.map((video) => (
        <Card key={video.id} title={video.title} className="escape-room-card cursor-pointer">
          <p>{video.description}</p>
          <video controls width="640" height="360">
            <source src={video.url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Card>
      ))}
    </div>
  )
}
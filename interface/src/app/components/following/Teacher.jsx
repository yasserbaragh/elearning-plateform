"use client"
import React, { useState } from 'react';
import { Button } from 'primereact/button';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './Teacher.css'; // External CSS file for additional styling

export default function Teacher({ videoss }) {
  const [isFollowing, setIsFollowing] = useState(false);
  const videos = [
    { id: 1, title: 'Video 1', isLive: false },
    { id: 2, title: 'Video 2', isLive: true },
    { id: 3, title: 'Video 3', isLive: false },
  ];

  const toggleFollow = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <div className="teacher-page bg-gray-100 p-4">
      <div className="channel-header flex items-center justify-between bg-white p-4 shadow-md">
        <h1 className="text-2xl font-bold">Teacher Channel</h1>
        <Button
          label={isFollowing ? 'Unfollow' : 'Follow'}
          icon={isFollowing ? 'pi pi-user-minus' : 'pi pi-user-plus'}
          className="p-button-rounded p-button-outlined"
          onClick={toggleFollow}
        />
      </div>
      <div className="videos-section mt-4">
        <h2 className="text-xl font-semibold mb-2">Videos</h2>
        <ul className="video-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {videos.map((video) => (
            <li key={video.id} className="video-item bg-white p-4 shadow-md rounded-md">
              <div className="video-thumbnail bg-gray-300 h-40 mb-2"></div>
              <div className="video-info">
                <h3 className="text-lg font-medium">{video.title}</h3>
                {video.isLive && <span className="text-red-500 font-bold"> (Live)</span>}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

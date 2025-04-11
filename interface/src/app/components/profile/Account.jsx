import React from 'react';
import { Card } from 'primereact/card';
import { ProgressBar } from 'primereact/progressbar';
import './Account.css'; // External CSS for additional custom styles.

export default function Account() {
  const user = {
    username: 'PlayerOne',
    level: 5,
    experience: 1200,
    nextLevelExp: 2000,
  };

  const progress = (user.experience / user.nextLevelExp) * 100;

  return (
    <div className="account-container bg-gray-100 p-6 flex justify-center items-center min-h-screen">
      <Card className="profile-card w-full max-w-md shadow-lg">
        <h1 className="account-title text-2xl font-bold text-center mb-4">Profile</h1>
        <h2 className="username text-xl font-semibold text-center">{user.username}</h2>
        <p className="level text-center text-gray-600">Level: {user.level}</p>
        <div className="experience-bar mt-4">
          <ProgressBar value={progress} className="experience-progress" />
        </div>
        <p className="experience-text text-center text-gray-500 mt-2">
          {user.experience} / {user.nextLevelExp} XP
        </p>
      </Card>
    </div>
  );
}

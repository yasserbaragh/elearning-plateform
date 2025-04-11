import React from 'react';
import 'primereact/resources/themes/saga-blue/theme.css'; // PrimeReact theme
import 'primereact/resources/primereact.min.css'; // PrimeReact core CSS
import './Achievements.css'; // External CSS

export default function Achievements() {
  const user = {
    level: 5,
    xp: 1200,
    coins: 300,
  };

  return (
    <div className="achievements-container p-4 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-blue-600 mb-4">Achievements</h1>
      <div className="achievement-item mb-2">
        <p className="text-lg font-medium">Level: <span className="text-blue-500">{user.level}</span></p>
      </div>
      <div className="achievement-item mb-2">
        <p className="text-lg font-medium">XP: <span className="text-green-500">{user.xp}</span></p>
      </div>
      <div className="achievement-item">
        <p className="text-lg font-medium">Coins: <span className="text-yellow-500">{user.coins}</span></p>
      </div>
    </div>
  );
}

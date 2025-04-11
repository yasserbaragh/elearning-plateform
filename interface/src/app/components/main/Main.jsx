import React from 'react';
import { Card } from 'primereact/card';
import './main.css';

const escapeRooms = [
  { id: 1, name: 'Escape Room 1', field: 'Science' },
  { id: 2, name: 'Escape Room 2', field: 'History' },
  { id: 3, name: 'Escape Room 3', field: 'Math' },
  { id: 4, name: 'Escape Room 4', field: 'Art' },
];

export default function Main() {
  return (
    <div className="escape-room-grid">
      {escapeRooms.map((room) => (
        <Card key={room.id} title={room.name} className="escape-room-card">
          <p>Field: {room.field}</p>
        </Card>
      ))}
    </div>
  )
}

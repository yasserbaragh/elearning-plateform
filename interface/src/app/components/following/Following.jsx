"use client"
import { useRouter } from 'next/navigation';
import React from 'react';


export default function Following() {
    const navigate = useRouter();

    // Example data for teachers
    const teachers = [
        { id: 1, name: 'Teacher A', subject: 'Mathematics' },
        { id: 2, name: 'Teacher B', subject: 'Physics' },
        { id: 3, name: 'Teacher C', subject: 'Chemistry' },
    ];

    const handleProfileClick = (id) => {
        navigate.push(`/main/following/teacher/${id}`);
    };

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Following</h2>
            <div className="grid gap-4">
                {teachers.map((teacher) => (
                    <div
                        key={teacher.id}
                        className="p-4 border rounded shadow cursor-pointer hover:bg-gray-100"
                        onClick={() => handleProfileClick(teacher.id)}
                    >
                        <h3 className="text-lg font-semibold">{teacher.name}</h3>
                        <p className="text-sm text-gray-600">{teacher.subject}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

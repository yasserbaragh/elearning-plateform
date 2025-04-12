import React from 'react'
import Dashboard from '../components/main/Dashboard';
import Navbar from '../components/main/Navbar';
import Main from '../components/main/Main';
import { cookies } from 'next/headers';

export default function layout({ children }) {
    const token = cookies().get("token")
    if (!token) {
        return <div>You are not logged in</div>
    }
    return (
        <div>
            <div className='flex justify-stretch'>
                <Dashboard />
                <div className='content'>
                    <Navbar />
                    <div className='mainnn'>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}

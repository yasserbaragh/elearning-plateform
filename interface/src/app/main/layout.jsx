import React from 'react'
import Dashboard from '../components/main/Dashboard';
import Navbar from '../components/main/Navbar';
import Main from '../components/main/Main';

export default function layout({ children }) {
    return (
        <div>
            <div className='flex justify-stretch'>
                <Dashboard />
                <div className='content'>
                    <Navbar />
                    {children}
                </div>
            </div>
        </div>
    );
}

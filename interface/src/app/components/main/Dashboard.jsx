"use client"
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faGamepad, faCompass, faUsers, faTrophy, faUser, faChalkboardTeacher, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import "./main.css"

export default function Dashboard() {
    const [isDashboardActive, setIsDashboardActive] = useState(false)
    const [activeLink, setActiveLink] = useState(0) // Default to first link active

    const handleLinkClick = (index) => {
        setActiveLink(index)
    }

    const links = [
        { label: 'Mini Games', icon: faGamepad, link: '/main' },
        { label: 'Explore', icon: faCompass, link: '/main/explore' },
        { label: 'Following', icon: faUsers, link: '/main/following' }
    ]

    const profileLinks = [
        { label: 'Account', icon: faUser, link: '/main/account' },
        { label: 'Achievements', icon: faTrophy, link: '/main/achievement' },
        { label: 'Log Out', icon: faSignOutAlt, link: '/logout' }
    ]

    const teacherLinks = [
        { label: 'Teacher', icon: faChalkboardTeacher, link: '/main/teacher/profile' }
    ]

    return (
        <div className={`dashboard ${isDashboardActive ? 'active' : ''}`}>
            <div className="menu-toggle p-4 border-b border-gray-800">
                <span onClick={() => setIsDashboardActive(prev => !prev)} className="cursor-pointer text-gray-400 hover:text-white">
                    <FontAwesomeIcon icon={faBars} size="lg" />
                </span>
            </div>
            <nav className="text-gray-300">
                <div className="py-4">
                    <p className={`section-title px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 ${isDashboardActive && 'text-center'}`}>
                        {!isDashboardActive ? 'MAIN' : '•'}
                    </p>
                    <ul>
                        {links.map((link, index) => (
                            <li key={index} className="nav-item">
                                <Link href={link.link}>
                                    <span
                                        className={`flex items-center px-4 py-2 ${activeLink === index ? 'bg-gray-800 text-yellow-400 border-l-2 border-yellow-400' : 'text-gray-400 hover:bg-gray-800 hover:text-white'}`}
                                        onClick={() => handleLinkClick(index)}
                                    >
                                        <FontAwesomeIcon 
                                            icon={link.icon} 
                                            className={`${!isDashboardActive && 'mr-3'} w-5 h-5`} 
                                        />
                                        {!isDashboardActive && (
                                            <span>{link.label}</span>
                                        )}
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                
                <div className="py-4 border-t border-gray-800">
                    <p className={`section-title px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 ${isDashboardActive && 'text-center'}`}>
                        {!isDashboardActive ? 'PROFILE' : '•'}
                    </p>
                    <ul>
                        {profileLinks.map((link, index) => (
                            <li key={index + links.length} className="nav-item">
                                <Link href={link.link}>
                                    <span
                                        className={`flex items-center px-4 py-2 ${activeLink === index + links.length ? 'bg-gray-800 text-yellow-400 border-l-2 border-yellow-400' : 'text-gray-400 hover:bg-gray-800 hover:text-white'}`}
                                        onClick={() => handleLinkClick(index + links.length)}
                                    >
                                        <FontAwesomeIcon 
                                            icon={link.icon} 
                                            className={`${!isDashboardActive && 'mr-3'} w-5 h-5`}
                                        />
                                        {!isDashboardActive && (
                                            <span>{link.label}</span>
                                        )}
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                
                {teacherLinks.length > 0 && (
                    <div className="py-4 border-t border-gray-800">
                        <p className={`section-title px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 ${isDashboardActive && 'text-center'}`}>
                            {!isDashboardActive ? 'TEACHER' : '•'}
                        </p>
                        <ul>
                            {teacherLinks.map((link, index) => (
                                <li key={index + links.length + profileLinks.length} className="nav-item">
                                    <Link href={link.link}>
                                        <span
                                            className={`flex items-center px-4 py-2 ${activeLink === index + links.length + profileLinks.length ? 'bg-gray-800 text-yellow-400 border-l-2 border-yellow-400' : 'text-gray-400 hover:bg-gray-800 hover:text-white'}`}
                                            onClick={() => handleLinkClick(index + links.length + profileLinks.length)}
                                        >
                                            <FontAwesomeIcon 
                                                icon={link.icon} 
                                                className={`${!isDashboardActive && 'mr-3'} w-5 h-5`}
                                            />
                                            {!isDashboardActive && (
                                                <span>{link.label}</span>
                                            )}
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </nav>
        </div>
    )
}

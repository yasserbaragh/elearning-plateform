"use client"
import React, { useState } from 'react'
import "./main.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faHome, faCompass, faUserFriends, faTrophy, faUser, faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

export default function Dashboard() {
    const [isDashboardActive, setIsDashboardActive] = useState(false) // Renamed for dashboard toggle
    const [activeLink, setActiveLink] = useState(null) // Renamed for active link selection

    const handleLinkClick = (index) => {
        setActiveLink(index)
    }

    const links = [
        { label: 'Mini Games', icon: faHome, link: '/main' },
        { label: 'Explore', icon: faCompass, link: '/main/explore' },
        { label: 'Following', icon: faUserFriends, link: '/main/following' }
    ]

    const profileLinks = [
        { label: 'Achievements', icon: faTrophy, link: '/main/achievement' },
        { label: 'Account', icon: faUser, link: '/main/account' }
    ]

    const teacherLinks = [
        { label: 'Teacher', icon: faChalkboardTeacher, link: '/main/teacher/profile' }
    ]

    //dd
    return (
        <div className={`dashboard ${isDashboardActive ? 'active' : ''}`}>
            <span onClick={() => setIsDashboardActive(prev => !prev)} className="cursor-pointer hamburger">
                <FontAwesomeIcon icon={faBars} />
            </span>
            <nav>
                <div>
                    <p className="section-title mb-3">Main</p>
                    <ul>
                        {links.map((link, index) => (
                            <li
                                key={index}
                                className={`${isDashboardActive ? 'text-center' : ''}`} // Add centering class
                            >
                                <Link href={link.link}>
                                    <span
                                        className={`${activeLink === index ? 'active text-pink-500 font-bold' : ''}`}
                                        onClick={() => handleLinkClick(index)}
                                    >
                                        <FontAwesomeIcon icon={link.icon} className="mr-2" />
                                        {!isDashboardActive && (
                                            <span>{link.label}</span>
                                        )}
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <p className="section-title mb-3">Profile</p>
                    <ul>
                        {profileLinks.map((link, index) => (
                            <li
                                key={index + links.length}
                                className={`${isDashboardActive ? 'text-center' : ''}`} // Add centering class
                            >
                                <Link href={link.link}>
                                    <span
                                        className={`${activeLink === index + links.length ? 'active text-pink-500 font-bold' : ''}`}
                                        onClick={() => handleLinkClick(index + links.length)}
                                    >
                                        <FontAwesomeIcon icon={link.icon} className="mr-2" />
                                        {!isDashboardActive && (
                                            <span>{link.label}</span>
                                        )}
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div> 
                    <p className="section-title mb-3">Teacher</p>
                    <ul>
                        {teacherLinks.map((link, index) => (
                            <li
                                key={index + links.length + profileLinks.length}
                                className={`${isDashboardActive ? 'text-center' : ''}`} // Add centering class
                            >
                                <Link href={link.link}>
                                    <span
                                        className={`${activeLink === index + links.length + profileLinks.length ? 'active text-pink-500 font-bold' : ''}`}
                                        onClick={() => handleLinkClick(index + links.length + profileLinks.length)}
                                    >
                                        <FontAwesomeIcon icon={link.icon} className="mr-2" />
                                        {!isDashboardActive && (
                                            <span>{link.label}</span>
                                        )}
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </div>
    )
}

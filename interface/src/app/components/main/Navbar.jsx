import React from 'react'
import { InputText } from 'primereact/inputtext'; // Added import for PrimeReact InputText
import "./main.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import profilee from "./profile.png"
import Image from 'next/image';

export default function Navbar() {
    const userName = "John Doe"
    const profileInfo = "Profile Info"

    return (
        <div className="flex justify-between items-center p-2 bg-gray-100 navBar" >
            <div className='searchDiv'>
                <span className="p-input-icon-left flex justify-between items-center">
                    <span
                        className="absolute top-0 right-0 mt-3 mr-4 cursor-pointer"

                    >
                        <FontAwesomeIcon icon={faSearch} />
                    </span>
                    <InputText
                        placeholder="Search..."
                        className="navClass"
                    />
                </span>
            </div>

            <div className="flex justify-end item-center navProfile">
                <div> <p className="lvlxp">XP : 3 </p>
                    <p className="lvlxp">LVL: 2 </p>
                </div>
                <Image src={profilee} alt="" className="profile" />
                <div className="navUser">{userName}
                    <p>200 💰</p>
                </div>
                
            </div>

        </div>
    )
}

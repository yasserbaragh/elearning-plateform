import React from 'react'
import { InputText } from 'primereact/inputtext'; // Added import for PrimeReact InputText
import "./main.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
    const userName = "John Doe"
    const profileInfo = "Profile Info"

    return (
        <div className="flex justify-between items-center p-2 bg-gray-100">
            <div>{userName}</div>
            <div className='searchDiv'>
                <span className="p-input-icon-left flex justify-between items-center">
                    <span
                        className="absolute top-0 right-0 mt-3 mr-4 cursor-pointer"
                    
                    >
                        <FontAwesomeIcon icon={faSearch} />
                    </span>
                    <InputText
                        placeholder="Search..."
                        className="flex-1 mx-2 p-1 border border-gray-300 rounded search"
                    />
                </span>
            </div>
            <div>{profileInfo}</div>
        </div>
    )
}

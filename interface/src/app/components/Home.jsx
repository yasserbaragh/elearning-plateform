"use client"
import React from 'react';
import image from "./image 1.png"
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function TeachGameLandingPage() {
    const router = useRouter()
    return (
        <div className="min-h-screen bg-gradient-to-b from-black to-purple-900 text-white p-4">
          
            <header className="flex justify-between items-center mb-20">
                <h1 className="text-xl font-bold">Teach Game</h1>
                <button onClick={() => router.push(`/login`)}
                 className="cursor-pointer bg-transparent hover:underline">start now</button>
            </header>

            <main className="flex flex-col md:flex-row justify-center items-center gap-16 max-w-4xl mx-auto">
               
                <div className="text-center">
                    <div className="flex justify-center mb-4">
                        <div className="relative">
                            <div className="w-6 h-6 bg-red-500 rounded-full absolute -top-2 -left-2"></div>
                            <div className="flex flex-col items-center">
                                <div className="w-32 h-4 bg-blue-300 rounded-md mb-1"></div>
                                <div className="w-32 h-4 bg-blue-400 rounded-md mb-1"></div>
                                <div className="w-28 h-4 bg-yellow-300 rounded-md"></div>
                            </div>
                        </div>
                    </div>
                    <h2 className="text-5xl font-bold mb-4">LEARN</h2>
                    <p className="text-sm">Scroll Have Fun , Learn Something New Everyday</p>
                    <button onClick={() => router.push(`/login`)}
                    className="cursor-pointer mt-6 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-full">
                        Start now
                    </button>
                </div>

                <div className="relative">
                    <Image src={image} />
                </div>
            </main>

            <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex justify-around">
                    <div className="w-8 h-8 bg-black opacity-70"></div>
                    <div className="w-8 h-8 flex items-center justify-center">
                        <div className="w-6 h-6 rotate-45 border-b-2 border-r-2 border-white"></div>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-black">
                        <div className="w-3 h-3 bg-black transform rotate-45"></div>
                    </div>
                    <div className="flex space-x-1">
                        <div className="w-4 h-8 bg-black rounded-md"></div>
                        <div className="w-4 h-8 bg-black rounded-md"></div>
                    </div>
                    <div className="w-8 h-8 flex flex-col items-end">
                        <div className="w-6 h-2 bg-black mb-1"></div>
                        <div className="w-4 h-2 bg-black"></div>
                    </div>
                    <div className="w-8 h-8 flex items-center justify-center">
                        <div className="w-6 h-6 rotate-45 border-b-2 border-r-2 border-yellow-400"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
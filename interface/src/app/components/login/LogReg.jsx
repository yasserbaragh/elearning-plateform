"use client"
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import 'primereact/resources/themes/saga-blue/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import Login from './Login'
import Register from './Register'

export default function LogReg() {
  const [showFirst, setShowFirst] = useState(true)

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="">
        <button
          className="cursor-pointer"
          onClick={() => setShowFirst(true)}
        >
          login
        </button>
        <button
          className="cursor-pointer"
          onClick={() => setShowFirst(false)}
        >
          register
        </button>
      </div>
      <div className="relative">
        {showFirst ? (
          <motion.div
            key="first"
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.5 }}
            className="w-full bg-blue-200 flex items-center justify-center rounded shadow"
          >
            <Login />
          </motion.div>
        ) : (
          <motion.div
            key="second"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.5 }}
            className="w-full bg-green-200 flex items-center justify-center rounded shadow"
          >
            <Register />
          </motion.div>
        )}
      </div>
    </div>
  );
}

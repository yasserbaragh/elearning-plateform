import React, { useState } from 'react';
import { motion } from 'framer-motion';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

export default function LogReg() {
  const [showFirst, setShowFirst] = useState(true);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="flex space-x-4 mb-6">
        <button
          className="p-2 bg-blue-500 text-white rounded shadow"
          onClick={() => setShowFirst(true)}
        >
          Show First
        </button>
        <button
          className="p-2 bg-green-500 text-white rounded shadow"
          onClick={() => setShowFirst(false)}
        >
          Show Second
        </button>
      </div>
      <div className="relative w-64 h-32 overflow-hidden">
        {showFirst ? (
          <motion.div
            key="first"
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.5 }}
            className="absolute w-full h-full bg-blue-200 flex items-center justify-center rounded shadow"
          >
            <p>First Div</p>
          </motion.div>
        ) : (
          <motion.div
            key="second"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.5 }}
            className="absolute w-full h-full bg-green-200 flex items-center justify-center rounded shadow"
          >
            <p>Second Div</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}

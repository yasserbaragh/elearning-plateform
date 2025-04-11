import React, { useState } from 'react'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    console.log('Logging in with:', { email, password })
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">Login</h1>
      <div className="w-80 space-y-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <ul className="space-y-2">
          <li>
            <button
              onClick={handleLogin}
              className="w-full p-2 bg-blue-500 text-white rounded shadow"
            >
              Login
            </button>
          </li>
          <li>
            <button
              className="w-full p-2 bg-gray-300 text-black rounded shadow"
            >
              Forgot Password
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

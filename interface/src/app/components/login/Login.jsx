"use client"
import { api, authApi } from '@/config'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleLogin = async () => {
    try {
      const response = await fetch(`${authApi}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: email, motDePasse: password }),
        credentials: 'include', // Important to receive HTTP-only cookies
        body: JSON.stringify({ email, motDePasse: password }),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();

      document.cookie = `token=${data.token}; path=/;`;
      document.cookie = `userId=${data.idUser}; path=/;`;
      router.push('/main');
      // You can redirect or update UI state here
    } catch (error) {
      console.error('Error during login:', error);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">Login</h1>
      <div className="w-80 space-y-4">
        <input
          type="text"
          placeholder="username"
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

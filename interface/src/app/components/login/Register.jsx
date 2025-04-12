import { api, authApi } from '@/config'
import React, { useState } from 'react'

export default function Register() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [username, setUsername] = useState('')

  const handleRegister = async () => {
    const userPayload = {
      nom: lastName,
      prenom: firstName,
      motDePasse: password,
      username: username,
      email: email,
      numTel: phoneNumber,
    };

    try {
      const response = await fetch(`${authApi}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userPayload),
      });

      if (!response.ok) {
        const error = await response.text()
        console.log(error)
        throw new Error('Registration failed');
      }

      const data = await response.json();
      console.log('User registered:', data);
      // Optionally redirect or show success
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">Register</h1>
      <div className="w-80 space-y-4">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="w-full p-2 border rounded"
        />
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
        <input
          type="text"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <ul className="space-y-2">
          <li>
            <button
              onClick={handleRegister}
              className="w-full p-2 bg-green-500 text-white rounded shadow"
            >
              Register
            </button>
          </li>
          <li>
            <button
              className="w-full p-2 bg-gray-300 text-black rounded shadow"
            >
              Cancel
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

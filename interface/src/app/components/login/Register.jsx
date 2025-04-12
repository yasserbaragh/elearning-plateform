import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import { api } from '@/config';

export default function Register() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const router = useRouter();

  const handleRegister = async () => {
    try {
      const response = await fetch(`${api}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          password,
          phoneNumber,
        }),
      });

      if (!response.ok) {
        throw new Error('Registration failed');
      }

      const data = await response.json();
      const { token, user } = data;

      // Store token in cookies
      document.cookie = `token=${token}; path=/; HttpOnly`;

      // Remove password from user object
      const { password, ...userWithoutPassword } = user;

      // Store user in cookies
      document.cookie = `user=${encodeURIComponent(JSON.stringify(userWithoutPassword))}; path=/; HttpOnly`;

      console.log('Registration successful');
      router.push('/login'); // Redirect to login page

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

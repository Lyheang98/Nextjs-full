'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Logging in:', { email, password });
  };

  return (
    <div className="min-h-min flex items-center text-black justify-center bg-gradient-to-tr mb-20 mt-10 p-2">
      <div className=" rounded-2xl shadow-lg w-full max-w-md p-8">
        <h2 className="text-3xl font-bold text-center text-black mb-2">
          Log In to Your Account
        </h2>
        <p className="text-center text-gray-600 mb-7">
          Welcome back! Please enter your details.
        </p>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
          
            <input
              type="email"
              id="email"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
            />
          </div>
          <div>
            <input
              type="password"
              id="password"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </div>
          <div className="text-right text-sm">
            <Link href="#" className="text-black hover:underline">
              Forgot password?
            </Link>
          </div>
          <button
            type="submit"
            className="w-full bg-sky-700 text-white font-medium py-2 rounded-lg hover:bg-sky-700 transition duration-200"
          >
            Sign In
          </button>
        </form>

        <div className="flex items-center gap-4 mt-6">
          <div className="h-px flex-1 bg-gray-300"></div>
          <span className="text-white text-sm">or</span>
          <div className="h-px flex-1 bg-gray-300"></div>
        </div>

        <div className="flex flex-col gap-3 mt-6">
          <button className="w-full flex items-center justify-center gap-2 border rounded-lg py-2 text-sm hover:bg-gray-200 transition">
           
            Continue with Google
          </button>
          <button className="w-full flex items-center justify-center gap-2 border rounded-lg py-2 text-sm hover:bg-gray-200 transition">
          
            Continue with Facebook
          </button>
        </div>

        <p className="text-center text-sm text-white mt-6">
          Don’t have an account?{' '}
          <Link href="/register" className="text-white hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

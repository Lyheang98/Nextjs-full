'use client';

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function NavbarComponent() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/product?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  const clearSearch = () => {
    setSearchQuery("");
  };

  return (
    <header className="font-Montserrat lg:px-16 px-4 bg-white flex flex-wrap items-center py-4 shadow-sm">
      <div className="flex-1 font-bold flex justify-between items-center">
        <Link href="/" className="text-xl">NextJS lesson</Link>
      </div>

      {/* Search Bar - Desktop */}
      <div className="hidden md:flex items-center mx-4 flex-1 max-w-md">
        <form onSubmit={handleSearch} className="w-full relative">
          <div className="relative transition-all duration-200">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 pl-10 pr-12 text-sm text-gray-700 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:bg-white focus:border-black focus:border-opacity-30 transition-all duration-200"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className="h-4 w-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            {searchQuery && (
              <button
                type="button"
                onClick={clearSearch}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            )}
          </div>
        </form>
      </div>

      <label htmlFor="menu-toggle" className="pointer-cursor md:hidden block">
        <svg className="fill-current text-gray-900"
          xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
          <title>menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
        </svg>
      </label>
      <input className="hidden" type="checkbox" id="menu-toggle" />

      <div className="hidden md:flex md:items-center md:w-auto w-full" id="menu">
        <nav>
          <ul className="md:flex items-center justify-between text-[14px] text-gray-700 pt-4 md:pt-0">
            <li><Link href="/" className="md:p-4 py-2 px-0 block hover:text-sky-700">About Us</Link></li>
            <li><Link href="/blog" className="md:p-4 py-2 px-0 block hover:text-sky-700">Blog</Link></li>
            <li><Link href="/lesson" className="md:p-4 py-2 px-0 block hover:text-sky-700">Course</Link></li>
            <li><Link href="/dashboard" className="md:p-4 py-2 px-0 block md:mb-0 mb-2 hover:text-sky-700">Dashboard</Link></li>
            <li><Link href="/product" className="md:p-4 py-2 px-0 block md:mb-0 mb-2 hover:text-sky-700">Product</Link></li>
          </ul>
        </nav>
        <Link href="/login" className="md:ml-4 bg-black text-white px-4 py-1 rounded hover:bg-sky-900 transition duration-200">
          Login
        </Link>
      </div>

      {/* Mobile Search - Shows when menu is toggled */}
      <div className="w-full md:hidden mt-4" id="mobile-search">
        <form onSubmit={handleSearch} className="relative">
          <div className="relative transition-all duration-200">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 pl-10 pr-12 text-sm text-gray-700 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:bg-white focus:border-black focus:border-opacity-30 transition-all duration-200"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className="h-4 w-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            {searchQuery && (
              <button
                type="button"
                onClick={clearSearch}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            )}
          </div>
        </form>
      </div>
    </header>
  );
}
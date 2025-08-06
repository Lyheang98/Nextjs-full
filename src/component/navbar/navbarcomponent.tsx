import React from "react";
import Link from "next/link";

export function NavbarComponent() {
  return (
    <header className=" font-Montserrat lg:px-16 px-4 bg-white flex  flex-wrap items-center py-4 shadow-sm">
    <div className="flex-1 font-bold flex justify-between items-center">
        <Link href="/" className="text-xl">NextJS lesson</Link>
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
                <li><Link href="" className="md:p-4 py-2 px-0 block hover:text-sky-700">Lesson</Link></li>
                <li><Link href="/contact" className="md:p-4 py-2 px-0 block md:mb-0 mb-2 hover:text-sky-700">Dashboard</Link></li>
                <li><Link href="/product" className="md:p-4 py-2 px-0 block md:mb-0 mb-2 hover:text-sky-700">Product</Link></li>
            </ul>
        </nav>
        <Link href="/login" className="md:ml-4 bg-sky-700 text-white px-4 py-1 rounded hover:bg-sky-900 transition duration-200">
            Login
        </Link>
    </div>
</header>
  );
}
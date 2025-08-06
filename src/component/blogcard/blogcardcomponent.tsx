
// This is a client component
'use client';
import { post } from "@/type/post";
import React, { useEffect, useState } from "react";

export  function BlogCard() {
  const [blog, setBlog] = useState<post[]>([]);

  // Fetching the blog posts from an API ( by using the useEffect hook)
  useEffect(() => {
    // Fetching data by using arrow function of async function
    const fetchData = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      // after fetching the data, we convert it to JSON format
      const data = await response.json();
      setBlog(data); 
    };
    fetchData();
  }, []);


  return (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-5 py-5 mx-auto">
    {blog.map((blogs) => (
      <div
        key={blogs.id} // ✅ You need a unique "key" here
        className=" border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden mb-6"
      >
        <img
          className="h-48 w-full object-cover object-center"
          src="https://dummyimage.com/720x400"
          alt="blog"
        />
        <div className="p-6">
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
            CATEGORY
          </h2>
          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            {blogs.title}
          </h1>
          <p className="leading-relaxed mb-3 line-clamp-2">{blogs.body}</p>
          <div className="flex items-center flex-wrap">
            <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
              Learn More
              <svg
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>
            <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
              <svg
                className="w-4 h-4 mr-1"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
              1.2K
            </span>
            <span className="text-gray-400 inline-flex items-center leading-none text-sm">
              <svg
                className="w-4 h-4 mr-1"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 "></path>
              </svg>
              6
            </span>
          </div>
        </div>
      </div>
    ))}
  </div>
);
}

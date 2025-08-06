import { BlogCard } from "@/component/blogcard/blogcardcomponent";
import { NavbarComponent } from "@/component/navbar/navbarcomponent";
import React from "react";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-10">
        Welcome to Next.js Lesson
      </h1>
      <p className="text-center text-gray-600 mt-3">
        This is a simple blog application built with Next.js. Explore the blog
        posts below.

      </p>
      <div>
         <BlogCard />
      </div>
    </div>
  );
}

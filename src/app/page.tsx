import { BlogCard } from "@/component/blogcard/blogcardcomponent";
import { NavbarComponent } from "@/component/navbar/navbarcomponent";
import LessonFile from "@/component/courseinfo/courseinfo";
import React from "react";

export default function Home() {
  // await new Promise((resolve) => setTimeout(resolve, 2000));
  return (
    <div>
      <div>
        <LessonFile />
      </div>
    </div>
  );
}

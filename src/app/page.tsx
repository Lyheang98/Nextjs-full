import LessonFile from "@/component/courseinfo/courseinfo";
import CourseCards from "@/component/courseinfo/course-cards";
import React from "react";

export default function Home() {
  // await new Promise((resolve) => setTimeout(resolve, 2000));
  return (
    <div>
      <div>
        <LessonFile />
      </div>
      <CourseCards />
    </div>
  );
}

import Image from "next/image";
import React from "react";
import Link from "next/link";
export default function LessonFile() {
    return (
     
            <section className=" py-5 px-6 animate-fade-in-up">
              <div className="max-w-8xl px-6 md:px-10 py-6 md:py-10 mx-auto grid md:grid-cols-2 gap-6 md:gap-10 items-center">
                {/* Left Content */}
                <div>
                  <h1 className="text-5xl font-bold text-gray-900 leading-snug">
                    Java Scripts Course 
                  </h1>
                  <p className="mt-4 text-gray-600">
                    Your career in full stack web development starts here. Fast-track
                    learning and interview prep. Grow skills at your own pace. Expand
                    your earnings potential.
                  </p>
        
                  {/* Stats */}
                  <div className="flex flex-wrap gap-8 mt-6">
                    <div>
                      <p className="flex items-center gap-1 text-lg font-semibold">
                        ⭐ 4.7
                      </p>
                      <span className="text-sm text-gray-500">
                        average course rating
                      </span>
                    </div>
                    <div>
                      <p className="text-lg font-semibold">126</p>
                      <span className="text-sm text-gray-500">
                        practice exercises
                      </span>
                    </div>
                    <div>
                      <p className="text-lg font-semibold">87.6</p>
                      <span className="text-sm text-gray-500">
                        hours of content
                      </span>
                    </div>
                  </div>
        
                  {/* Button + Price */}
                  <div className="flex items-center gap-4 mt-8">
                    <button className="bg-black hover:bg-sky-700 text-white font-semibold px-6 py-3 rounded-md">
                     <Link href="/login">Get started</Link> 
                    </button>
                  </div>
                </div>

        
                {/* Right Image */}
                <div className="flex justify-center">
                  <div className="bg-gradient-to-tr from-gray-300 to-gray-700 rounded-2xl overflow-hidden w-full animate-float-slow">
                    {/* Optimized responsive image */}
                    <div className="relative w-full aspect-[4/3] sm:aspect-[5/3] lg:aspect-[16/9]">
                      <Image
                        src="/images/img_javascript_intro.png"
                        alt="Developer"
                        fill
                        priority
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 900px"
                        className="rounded-lg object-cover object-center"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
    );
}
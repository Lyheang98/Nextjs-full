import Image from "next/image";
import React from "react";
import Link from "next/link";
export default function LessonFile() {
    return (
     
            <section className=" py-5 px-6">
              <div className="max-w-8xl p-10 mx-auto grid md:grid-cols-2 gap-10 items-center">
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
                  <div className="bg-gradient-to-tr from-gray-300 to-gray-700 rounded-2xl overflow-hidden p-6">
                    {/* Optimazation images by NExt JS */}
                    <Image
                      src="/images/img_javascript_intro.png" // replace with your image
                      alt="Developer"
                      width={900}
                      height={800}
                      priority
                      unoptimized
                      className="rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </section>
    );
}
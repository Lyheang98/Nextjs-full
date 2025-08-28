import Image from "next/image";
import Link from "next/link";
import React from "react";

type CourseCardProps = {
  title: string;
  university: string;
  rating: number;
  learners: string;
  duration: string;
  image: string;
  href: string;
};

function CourseCard({ title, university, rating, learners, duration, image, href }: CourseCardProps) {
  return (
    <div className="group rounded-xl border border-gray-200 hover:border-gray-300 transition bg-white overflow-hidden shadow-sm hover:shadow-md transform-gpu hover:-translate-y-1">
      <div className="relative h-40 w-full overflow-hidden">
        <Image src={image} alt={title} fill priority sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-300 group-hover:scale-105" />
      </div>
      <div className="p-4">
        <p className="text-xs text-gray-500">{university}</p>
        <h3 className="mt-1 text-base font-semibold text-gray-900 leading-snug line-clamp-2">{title}</h3>
        <div className="mt-2 flex items-center gap-2 text-sm text-gray-600">
          <span className="font-medium">⭐ {rating.toFixed(1)}</span>
          <span className="text-gray-400">•</span>
          <span>{learners} learners</span>
        </div>
        <div className="mt-2 text-sm text-gray-500">{duration}</div>
        <div className="mt-4">
          <Link href={href} className="inline-block rounded-md bg-black text-white px-3 py-2 text-sm font-medium hover:bg-sky-700 transition">
            Enroll now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function CourseCards() {
  return (
    <section className="pt-2 pb-8 px-6">
      <div className="max-w-8xl px-10 py-6 mx-auto">
        <div className="mb-4 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Recommended courses</h2>
            <p className="text-sm text-gray-600 mt-1">Build job‑ready skills with curated picks.</p>
          </div>
          <Link href="/lesson" className="text-sm font-medium text-sky-700 hover:underline">See all</Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <CourseCard
            title="JavaScript for Web Development"
            university="Meta"
            rating={4.8}
            learners="120k+"
            duration="Approx. 3 months at 5 hrs/week"
            image="/images/javascripts.png"
            href="/lesson"
          />
          <CourseCard
            title="Front-End Development with React"
            university="IBM Skills Network"
            rating={4.7}
            learners="95k+"
            duration="Approx. 2 months at 6 hrs/week"
            image="/images/images (9).png"
            href="/lesson"
          />
          <CourseCard
            title="Full-Stack Web Development"
            university="University of London"
            rating={4.6}
            learners="150k+"
            duration="Approx. 4 months at 5 hrs/week"
            image="/images/img_javascript_intro.png"
            href="/lesson"
          />
        </div>
      </div>
    </section>
  );
}



'use client';
import React from "react"
import { Inter, Roboto, Outfit } from 'next/font/google'
import { useParams } from 'next/navigation'
import { useSearchParams } from 'next/navigation';
import Image from 'next/image'
// export const metadata = {
//     title: "Ravisankar Venkataraman | Blog",
//     description: "Ravi's blog posts",
// }

export default function Projects({
  params
}: {
  params: { Id: string }
}) {
  const searchParams = useSearchParams();
  const project = searchParams?.get('Id');

  return (
    <React.Fragment>
      <section className="Section-Setting" id="ProjectsSection">
        <div className="flex min-h-screen justify-center lg:flex-row">
          <div className='card rounded-box bg-[#3939C3] text-[#FFFFFF] text-2xl font-semibold max-w-lg'>
            <div>
            <span className='HeroSectionArchtype'>
              Project 1
            </span>
            <div className='HeroSectionArchtype-sub' id=''>
              Full Stack Developer
            </div>
          </div>
          <div className='card rounded-box mt-3 bg-[#7B5050D1] text-[#FFFFFF] text-2xl font-semibold max-w-lg'>
            <span className='HeroSectionArchtype'>
              Project 2
            </span>
            <div className='HeroSectionArchtype-sub' id=''>
              Full Stack Developer
            </div>
          </div>
          <div className='card rounded-box mt-3 bg-[#7B5050D1] text-[#FFFFFF] text-2xl font-semibold max-w-lg'>
            <span className='HeroSectionArchtype'>
              Project 3
            </span>
            <div className='HeroSectionArchtype-sub' id=''>
              Full Stack Developer
            </div>
          </div>
          <div className='card rounded-box mt-3 bg-[#7B5050D1] text-[#FFFFFF] text-2xl font-semibold max-w-lg'>
            <span className='HeroSectionArchtype'>
              Project 4
            </span>
            <div className='HeroSectionArchtype-sub' id=''>
              Full Stack Developer
            </div>
          </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

function Project1() {
  return <h1>Welcome back!</h1>;
}

function Project2() {
  return <h1>Please sign up.</h1>;
}
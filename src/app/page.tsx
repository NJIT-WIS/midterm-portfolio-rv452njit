'use client';
import Image from 'next/image'
import { Inter, Roboto, Outfit } from 'next/font/google'
import { use } from 'react';
import { Input } from 'postcss';
import { FormEvent } from 'react';
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { PopModal } from "../../components/PopModal";
import Link from "next/link";


type Props = {
  searchParams: Record<string, string> | null | undefined;
};

export default function Home({ searchParams }: Props) {
  const showModal = searchParams?.modal;

  return (
    <section className='homepage-setting' id='HeroSection'>
      <main className="flex align-items-baseline min-home-screen">
        <div className="flex flex-col justify-center lg:flex-row flexwidth flex-item-left">
          <div className="card-setting">
            <div className='semibold mb-32 grid lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-left'>
              <div className='card rounded-box bg-[#3939C3] text-[#FFFFFF] text-2xl font-semibold max-w-lg'>
                <p>Architect Design Develop Web-based application using .NET, Angular, Figma, SQL Server, Oracle, NextJS</p>
              </div>
            </div>
            <div className="mb-32 grid lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-left">
              <a
                href="./CurrentProjects"
                className="projectbg marginbw group rounded-lg border pl-5 py-1 border-transparent transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                rel="noopener noreferrer" id="ProfileManagement">
                <div className=''>
                  <h2 className={`mb-3 text-2xl font-semibold`}>
                    Profile Management{' '}
                  </h2>
                  <p className={`m-5 max-w-[30ch] text-sm opacity-50`}>
                    Full Stack Developer, C#, Figma, Blazor, Nextjs
                  </p>
                </div>

              </a>

              <a href="./Projects1"
                className="projectbg marginbw group rounded-lg border pl-5 py-1 border-transparent transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                rel="noopener noreferrer" id="TradeManagement">
                <h2 className={`mb-3 text-2xl font-semibold`}>
                  Trade Management{' '}
                </h2>
                <p className={`m-5 max-w-[30ch] text-sm opacity-50`}>
                  Angular Developer, Type Script, Bootstrap, Redux
                </p>
              </a>

              <a
                href="./Projects2"
                className="projectbg group marginbw rounded-lg border  pl-5 py-1 border-transparent transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                rel="noopener noreferrer" id="TrendAnalysis"
              >
                <h2 className={`mb-3 text-2xl font-semibold`}>
                  Trend Analysis{' '}
                </h2>
                <p className={`m-5 max-w-[30ch] text-sm opacity-50`}>
                  Dotnet Developer
                  VB.NET, ASP.NET, Oracle, Web-API
                </p>
              </a>

              <a
                href="./Projects3"
                className="projectbg group marginbw rounded-lg border pl-5 py-1 border-transparent transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                rel="noopener noreferrer" id="Timekeeper"
              >
                <h2 className={`mb-3 text-2xl font-semibold`}>
                  Timekeeper{' '}
                </h2>
                <p className={`m-5 max-w-[30ch] text-sm opacity-50`}>
                  .NET Consultant
                  C#, ASP.NET, SQL Server, API's
                </p>
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col flexwidth card-setting flex-item-right">
          <div className='semibold mb-32 grid lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-left'>
            <div className='card rounded-box bg-[#3939C3] text-[#FFFFFF] text-2xl font-semibold max-w-lg'>
              <span className='HeroSectionArchtype'>
                Reach for the Stars or Get to Coding -  The Explorer
              </span>
              <div className='HeroSectionArchtype-sub' id='titlesection'>
                Full Stack Developer
              </div>
            </div>
          </div>
          <div className='semibold mb-32 grid lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-left'>
            <div className='card rounded-box mt-6s bg-[#3939C3] text-[#FFFFFF] text-2xl font-semibold max-w-lg' style={{marginTop: "1rem"}}>
              <Image src={'/spaceimg.jpg'} alt='' width={'700'} height={'700'} />
            </div>
          </div>
        </div>
      </main>
      <div className='chatSection' id="chatSection">
        <div>
          <Link rel="icon" type="image/png" href={"/?modal=true"} className="" id='ctasection'>
            <Image className='' src='/Challenge.png' title='Leave your Footprint' alt='Leave your footprint' width={60} height={60} priority />
          </Link>
          {showModal && <PopModal />}
        </div>

        <button
          type="button" id="chatsection"
          className="px-4 py-2 font-bold buttonbg text-white bg-blue-500 rounded-full hover:bg-blue-700">
          CHAT
        </button>
      </div>
    </section>
  );
}
function handleClick() {
  // <BasicModal />
}

function onSubmit() {

}

function SendMessage(msg: string) {

}
import Footer from '@/app/footer'
import Header from '@/app/header'
import Image from 'next/image'
import type { Metadata } from 'next'
import { Inter, Roboto, Outfit } from 'next/font/google'

import Head from 'next/head'
export default function Contact({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className='contact-setting' id="ContactSection">
      <main className="">
      <form className="rounded-lg shadow-xl flex flex-col px-8 py-8 bg-white dark:bg-gray-500 min-contact-screen">
      <h1 className="text-2xl font-bold dark:text-gray-50">Send a message</h1>

      <label htmlFor="fullname" className="text-gray-500 font-light mt-8 dark:text-gray-50">Full name<span className="text-red-500 dark:text-gray-50">*</span></label>
      <input type="text" name="fullname" className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500" />

      <label htmlFor="email" className="text-gray-500 font-light mt-4 dark:text-gray-50">E-mail<span className="text-red-500">*</span></label>
      <input type="email" name="email" className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500" />

      <label htmlFor="subject" className="text-gray-500 font-light mt-4 dark:text-gray-50">Subject<span className="text-red-500">*</span></label>
      <input type="text" name="subject" className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500" />

      <label htmlFor="message" className="text-gray-500 font-light mt-4 dark:text-gray-50">Message<span className="text-red-500">*</span></label>
      <textarea cols={4} name="message" className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"></textarea>
      <div className="flex flex-row items-center justify-start">
        <button className="px-10 mt-8 py-2 bg-[#130F49] text-gray-50 font-light rounded-md text-lg flex flex-row items-center">
          Send
        </button>
      </div>
    </form>
      </main>
    </section>
  );
}
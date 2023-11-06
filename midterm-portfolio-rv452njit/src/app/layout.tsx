import type { Metadata } from 'next';
import './globals.css';
import Header from './header';
import Footer from './footer';
import { Inter, Roboto, Outfit } from 'next/font/google';

//import { Html, Head, Main, NextScript } from 'next/document';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Welcome To RV452 Website',
  description: 'Welcome To RV452 Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

<html lang="en">
            <head>
                <title>Ravisankar Venkataraman - Home</title>
                <meta charSet='utf-8' />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="Ravisankar Resume" />
                <meta name="keywords" content="Ravisankar Venkataraman, Ravi, Resume, Ravi Resume, Full-stack, full stack, job, career" />
                <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" as="style"/>
                <link rel="preload" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" as="style"/> 
                <link rel="preload" href="https://fonts.googleapis.com/css2?family=Nunito:wght@700&family=Work+Sans:wght@400;500&display=swap" as="style" />
                <style>
                </style>
            </head>
      <body className={inter.className}>
        <div className='container'>
          <Header />
            <main>{children}</main> 
          <Footer/>
        </div>
      </body>
    </html>
  );
}

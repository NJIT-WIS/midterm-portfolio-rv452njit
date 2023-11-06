
// Import necessary modules
import Image from 'next/image';
import Link from 'next/link';
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Inter, Roboto, Outfit } from 'next/font/google'

// Define the Header component
export default function Header() {
  return (
    // <div className='row header-setting'>

    <section className='flex-container row text-white sticky top-1 z-50 style={{ height: "5%" }}' id='headersection'>
      <header className="header-width">

        <div className='row' style={{ height: "5vw" }} id="namesection">

          <div className='column'>
                <Link href="/" className="" id="logoSection">
                  <Image className="logo" src="/RV1.png" alt="Ravisankar Venkataraman Signature" style={{padding:"0px",margin: "0px"}} width={60} height={60} priority />
                </Link> 
                <div className='column'>
                    <h2 className="text-xl name-setting" id="nameid">Ravisankar VENKATARAMAN</h2>
                </div>
            </div>
         
          <div className=''>
            <nav className="nav-setting" id="navigationsection">
              <ul className="flex gap-x-6 flex-end ">
                <li>
                  <Link href="/About" className="link-setting">
                    Background
                  </Link>
                </li>

                <li>
                  <Link href="/Blogs" className="link-setting">
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link href="/Contact" className="link-setting">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          </div>
      </header>
    </section>
    // </div>
  );
}
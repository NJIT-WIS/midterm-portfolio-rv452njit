import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaTwitter, FaLinkedin, FaFileDownload, FaLinkedinIn } from 'react-icons/fa';

// Define the Footer component
export default function Footer() {
  return (
    <div className='footer-section'>
      <section className='' id='socialsection'>
        <footer className='text-white sticky '>
          <SocialIcons></SocialIcons>
        </footer>
      </section>
    </div>
  );
}

function SocialIcons() {
  return (
    <div className="footer-setting">
      {/* GitHub icon */}
      <a
        href="https://github.com/rv452"
        target="_blank"
        rel="noopener noreferrer" id="GITLink"
      >
        <Image className='' src='/git.png' title='Git Home' alt='Git Home' width={40} height={40} priority />

        {/* <FaGithub className="text-white hover:text-gray-300" /> */}
      </a>

      {/* LinkedIn icon */}
      <a
        href="https://linkedin.com/rv452"
        target="_blank"
        rel="noopener noreferrer"
        id="InLink"
      >
        <Image className='' src='/in.png' title='Linkedin' alt='Linkedin' width={40} height={40} priority />

        {/* <FaLinkedinIn className="text-white hover:text-gray-300" /> */}
      </a>


      {/* Twitter icon */}

      <a
        href="https://twitter.com/rv452"
        target="_blank"
        rel="noopener noreferrer"
        id="TwitterLink"
      >
        <Image className='' src='/twitter.png' title='Twitter Handle' alt='Twitter Handle' width={40} height={40} priority />

        {/* <FaTwitter className="text-white hover:text-gray-300" /> */}
      </a>


      {/* Twitter icon */}

      <a
        href="https://filedownload.com/RV452"
        target="_blank"
        rel="noopener noreferrer"
        id="DownloadLink"
      >
        <Image className='' src='/download.png' title='Download Resume' alt='Download Resume' width={40} height={40} priority />

      </a>
    </div>
  );
}
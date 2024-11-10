import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Footer = () => {
    return (
      <div className="pt-16 pb-16 bg-[#0f0715]">
        <div>
          <Image
            src="/images/logo.png"
            alt="logo"
            width={180}
            height={180}
            className="mx-auto"
          />
        </div>
        <div className="flex items-center flex-wrap justify-center space-x-10 space-y-4 text-white font-bold">
          <Link href="/">
            <div>Home</div>
          </Link>
          <Link href="/services">
            <div>Services</div>
          </Link>
          <Link href="/projects">
            <div>Project</div>
          </Link>
          <Link href="/reviews">
            <div>Reviews</div>
          </Link>
          <Link href="/contact">
            <div>Contact</div>
          </Link>
        </div>
        <p className="text-white text-opacity-60 mt-6 text-center">
          © 2024 All Rights Reserved by Syed Munir Ullah
        </p>
      </div>
    );
}

export default Footer

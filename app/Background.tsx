import React from 'react'
import Image from 'next/image';

export const Background = () => {
  return (
    <>
    <div className="banner max-w-full bg-banner-bg">
      </div>
    <div className="banner max-w-full bg-banner1">
      </div>
    <div className="banner max-w-full bg-banner2">
      </div>
      <div className="relative flex flex-c  ol md:flex-row items-center justify-center min-h-screen p-6 bg-gradient-to-r from-[var(--background)] to-[var(--secondary)] text-[var(--foreground)]">
      <div className="flex-1 flex justify-center items-center relative">
        <Image 
        src="/images/bg-img4.jpg"
          alt="Person smiling with sunglasses" 
          width={600}
          height={300}
          className="w-full h-auto object-cover opacity-50 md:opacity-100 transition-opacity duration-500 ease-in-out hover:opacity-75 bg-about-bg" 
        />
        <div className="absolute text-9xl font-bold mix-blend-overlay text-[var(--primary)]">
          ABOUT
        </div>
      </div>
      <div className="flex-1 p-6 bg-[var(--card)] rounded-lg shadow-lg transform transition-transform duration-500 ease-in-out hover:scale-105">
        <h2 className="text-4xl font-semibold text-[var(--secondary)]">
          You dont take a photograph, you make it.
        </h2>
        <p className="mt-4 text-lg text-[var(--muted-foreground)]">
          Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
        <a href="#" className="mt-6 inline-block text-[var(--primary)] hover:text-[var(--primary-foreground)] transition-colors duration-300 ease-in-out">
          Contact Now →
        </a>
      </div>
    </div>
    </>
  )
}

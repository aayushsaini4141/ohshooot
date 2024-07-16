import React from 'react'
import Image from 'next/image';

export const Background = () => {
  return (
    <>
    <div className="banner max-w-full bg-banner">
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
    <div className="flex flex-col items-center bg-background text-foreground p-8">
      <div className="flex flex-col md:flex-row w-full max-w-6xl shadow-lg rounded-lg overflow-hidden">
        <div className="md:w-1/2 p-8 bg-gradient text-secondary-foreground">
          <p className="text-lg leading-relaxed">
            Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&aposs standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&aposs standard dummy text ever since the 1500s.
          </p>
          <a href="#" className="text-primary-foreground mt-4 inline-block underline">SEE PORTFOLIO</a>
        </div>
        
        <div className="relative md:w-1/2 p-4 flex items-center justify-center">
          <Image src="https://placehold.co/600x400" alt="background image" layout="fill" className="absolute inset-0 w-full h-full object-cover opacity-50" />
          <h1 className="relative text-6xl font-bold text-primary">SERVICES</h1>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8 w-full max-w-6xl">
        <a href="#" className="relative group overflow-hidden rounded-lg shadow-lg">
          <Image src="https://placehold.co/300x200" alt="People" layout="fill" className="w-full h-full object-cover transition-opacity duration-300 opacity-50 group-hover:opacity-75" />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-25 group-hover:bg-opacity-50 transition-all duration-300">
            <span className="text-2xl font-bold text-primary-foreground">PEOPLE</span>
          </div>
        </a>
        {/* Repeat the above anchor elements for Nature, Wildlife, and Objects */}
      </div>
    </div>
    </>
  )
}

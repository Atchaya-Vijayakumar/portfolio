"use client"; // Marking this as a client component

import Contact from "@/sections/contact";
import About from "@/sections/about";
import Hero from "@/sections/hero";
import Skills from "@/sections/skills";
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="font-poppins">
        <Hero />
        <About />
        <Skills />
        <Contact />
      </div>
    </>
  );
}

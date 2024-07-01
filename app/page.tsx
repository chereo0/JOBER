import Hero from '@/components/shared/Hero'
import { prisma } from "@/lib/prisma";
import Jobs from '@/components/shared/Jobs';
import React from 'react'
import Sponsors from '@/components/shared/Sponsers';
import About from '@/components/shared/About';
import Contact from '@/components/shared/Contact';
const jobs = await prisma.jobPosting.findMany({});


const Home = () => {
  return (
    <>
    <Hero jobs={jobs}/>
    <Jobs/>
    <Sponsors/>
    <About/>
    <Contact/>
    </>
  )
}

export default Home

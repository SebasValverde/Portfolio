"use client";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Hero from "../Hero/Hero";
import Skills from "../Skills/Skills";
import Resume from "../Resume/Resume";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import { useEffect } from 'react';

const Home = () => {

  useEffect(()=>{
    const initAOS= async()=>{
      await import('aos');
      AOS.init({
        duration:1000,
        easing:'ease',
        once:true,
        anchorPlacement:"top-bottom"
      })
    }

    initAOS();

  },[])

  return (
    <div className="overflow-hidden">
      <Hero />
      <Skills />
      <Resume />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;

import React from 'react';
import { useEffect } from 'react';
import Header from '../components/Header';
import HeroHome from '../components/HeroHome';
import FeaturesHome from '../components/Features';
import FeaturesBlocks from '../components/FeaturesBlocks';
import Footer from '../components/Footer';
import { useRouter } from 'next/router';
import 'aos/dist/aos.css';
import AOS from 'aos';

function Home() {
  const location = useRouter();

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 700,
      easing: 'ease-out-cubic',
    });
  });

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        <HeroHome />
        <FeaturesHome />
        <FeaturesBlocks />

      </main>


      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Home;
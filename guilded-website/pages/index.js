import Head from 'next/head';
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/home';
import About from './components/about';
import Gallery from './components/gallery';
import Application from './components/application';
import Footer from './components/footer';



function HomePage() {
  return (
    <div>
      
      <Navbar />
      <Home />
      <About />
      <Gallery />
      <Application />
      <Footer />
  
    </div>
  );
}

export default HomePage


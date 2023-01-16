import Head from 'next/head';
import React from 'react';
import Navbar from '../c_es/Navbar';
import Home from '../c_es/home';
import About from '../c_es/about';
import Gallery from '../c_es/gallery';
import Application from '../c_es/application';
import Footer from '../c_es/footer';
import config from "../config.json";

//==============================

function HomePage() {

  return (


    <div>

      <Head>
        <title>Oakleaf Bearers</title>
        <link rel="icon" type="image/x-icon" href={config.headLogo}></link>
      </Head>

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

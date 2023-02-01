import Head from 'next/head';
import React from 'react';
import Navbar from '../c_pt-br/Navbar';
import Home from '../c_pt-br/home';
import About from '../c_pt-br/about';
import Gallery from '../c_pt-br/gallery';
import Application from '../c_pt-br/application';
import Footer from '../c_pt-br/footer';
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

import Head from 'next/head';
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/home';
import About from './components/about';
import Gallery from './components/gallery';
import Application from './components/application';
import Footer from './components/footer';
import config from "./config.json";


function HomePage() {

//=============================
// Scroll to Section Function
//=============================




//=============================
  return (

    <div>

      <Head>
      <title>Oakleaf Bearers</title>
      <link rel="icon" type="image/x-icon" href={config.headLogo}></link>
      </Head>
    
      <Navbar />
      <Home id ="homeS" />
      <About id ="aboutS" />
      <Gallery id ="galleryS" />
      <Application id ="applicationS" />
      <Footer />


    </div>
  );


}



export default HomePage

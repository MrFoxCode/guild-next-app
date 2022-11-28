import Head from 'next/head';
import React from 'react';
import Navbar from './components/Navbar';
import Gallery from './components/gallery';
import Footer from './components/footer';
import config from './config.json';



function GalleryPage() {
  return (
    <div>

      <Head>
      <title>Oakleaf Bearers</title>
      <link rel="icon" type="image/x-icon" href={config.headLogo}></link>     
      </Head>
      
      <Navbar />
      <Gallery />
      <Footer />
  
    </div>
  );
}

export default GalleryPage


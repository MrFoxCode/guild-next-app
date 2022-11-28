import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Application from '../components/application';
import Footer from '../components/footer';
import config from '../config.json';



function ScreenshotPage() {
  return (
    <div>

      <Head>
      <title>Oakleaf Bearers</title>
      <link rel="icon" type="image/x-icon" href={config.headLogo}></link>     
      </Head>
      
      <Navbar />
      <Application />
      <Footer />
  
    </div>
  );
}

export default ScreenshotPage;


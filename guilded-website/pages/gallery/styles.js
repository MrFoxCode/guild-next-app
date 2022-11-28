import Head from 'next/head';
import React from 'react';
import Navbar from '../components/Navbar';
import Application from '../components/application';
import Footer from '../components/footer';
import config from '../config.json';



function StylesPage() {
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

export default StylesPage;


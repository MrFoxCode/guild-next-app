import Head from 'next/head';
import React from 'react';
import Navbar from '../components/Navbar';
import Application from '../components/application';
import Footer from '../components/footer';



function StylesPage() {
  return (
    <div>
      
      <Navbar />
      <Application />
      <Footer />
  
    </div>
  );
}

export default StylesPage;

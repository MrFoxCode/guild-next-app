import Head from 'next/head';
import React from 'react';
import Navbar from './components/Navbar';
import Gallery from './components/gallery';
import Footer from './components/footer';



function GalleryPage() {
  return (
    <div>
      
      <Navbar />
      <Gallery />
      <Footer />
  
    </div>
  );
}

export default GalleryPage


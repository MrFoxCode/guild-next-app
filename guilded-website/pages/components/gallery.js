import React from "react";



function Gallery() {


    return (
        <div className="gallery-container" id="gallerySection">

            <h1>Gallery</h1>


            <div className="gallery-content-container">

                {/* Lead to Screenshots Page*/}
                <a href='/gallery/screenshots'>
                    <div className="screenshots-container">
                        <h2>Screenshots</h2>
                    </div>
                </a>

                <div className="gallery-right-side">


                    {/*-------------------------------------------------- */}
                    <div className="gallery-box2">

                        <a href="/gallery/styles">
                            <div className="styles-container">
                                <h2>Styles</h2>
                            </div>
                        </a>

                        <a href="/">
                            <div className="uniform-container">
                                <h2>Uniform</h2>
                            </div>
                        </a>

                    </div>
                    {/*-------------------------------------------------- */}


                    <div className="gallery-box3">
                        <a href="/">
                            <div className="guides-container">
                                <h2>Guides</h2>
                            </div>
                        </a>

                        <a href="/">
                            <div className="gear-container">
                                <h2>Gear</h2>
                            </div>
                        </a>

                        <a href="/">
                            <div className="lifeskills-container">
                                <h2>Lifeskills</h2>
                            </div>
                        </a>

                    </div>

                    {/*-------------------------------------------------- */}

                </div>


            </div>

        </div>
    );
}

export default Gallery;
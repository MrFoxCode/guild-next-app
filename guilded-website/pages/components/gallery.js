import React from "react";



function Gallery() {


    return (
        <div className="gallery-container">

            <h1>Gallery</h1>


            <div className="gallery-content-container">

                {/* Lead to Screenshots Page*/}
                <a href='/gallery/screenshots'>
                    <div className="screenshots-container">
                    <h1>Screenshots</h1>
                    </div>
                </a>

                <div className="gallery-right-side">


                    {/*-------------------------------------------------- */}
                    <div className="gallery-box2">

                        <a href="/gallery/styles">
                            <div className="styles-container">
                                <h1>Styles</h1>
                            </div>
                        </a>

                        <div className="uniform-container">
                            <h1>Uniform</h1>
                        </div>
                    </div>
                    {/*-------------------------------------------------- */}


                    <div className="gallery-box3">

                        <div className="guides-container">
                        </div>
                        <div className="gear-container">
                        </div>
                        <div className="lifeskills-container">
                        </div>

                    </div>

                    {/*-------------------------------------------------- */}

                </div>


            </div>

        </div>
    );
}

export default Gallery;
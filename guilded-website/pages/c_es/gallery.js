import React from "react";



function Gallery() {


    return (
        <div className="gallery-container" id="galleryS">

            <h1>Galería</h1>


            <div className="gallery-content-container">

                {/* Lead to Screenshots Page
                 <a href='/gallery/screenshots'>
                */}
                <a>
                    <div className="screenshots-container">
                        <h2>Screenshots</h2>
                    </div>
                </a>

                <div className="gallery-right-side">


                    {/*-------------------------------------------------- */}
                    <div className="gallery-box2">

                        <a>
                            <div className="styles-container">
                                <h2>Estilos</h2>
                            </div>
                        </a>

                        <a>
                            <div className="uniform-container">
                                <h2>Uniforme</h2>
                            </div>
                        </a>

                    </div>
                    {/*-------------------------------------------------- */}


                    <div className="gallery-box3">
                        <a>
                            <div className="guides-container">
                                <h2>Guías</h2>
                            </div>
                        </a>

                        <a>
                            <div className="gear-container">
                                <h2>Equipo</h2>
                            </div>
                        </a>

                        <a>
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
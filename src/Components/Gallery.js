import React from "react";
import "./Gallary.css";

function Gallery() {
  return (
    <div className="bg-dark d-flex flex-column">
      <span className="display-1 d-flex justify-content-center bg-dark text-light p-4 border-bottom">Gallery</span>
      <div className="container  bg-dark">
        
        <div className="gallery pt-5 ">
        
          <div className="gallery__column">
            <a href="https://unsplash.com/@jeka_fe" className="gallery__link">
              <figure className="gallery__thumb">
                <img
                  src="https://source.unsplash.com/_cvwXhGqG-o/300x300"
                  alt="Portrait by Jessica Felicio"
                  className="gallery__image"
                />
                <figcaption className="gallery__caption">
                  Portrait by Jessica Felicio
                </figcaption>
              </figure>
            </a>
            <a href="https://unsplash.com/@oladimeg" className="gallery__link">
              <figure className="gallery__thumb">
                <img
                  src="https://source.unsplash.com/AHBvAIVqk64/300x500"
                  alt="Portrait by Oladimeji Odunsi"
                  className="gallery__image"
                />
                <figcaption className="gallery__caption">
                  Portrait by Oladimeji Odunsi
                </figcaption>
              </figure>
            </a>
            <a
              href="https://unsplash.com/@a2eorigins"
              className="gallery__link"
            >
              <figure className="gallery__thumb">
                <img
                  src="https://source.unsplash.com/VLPLo-GtrIE/300x300"
                  alt="Portrait by Alex Perez"
                  className="gallery__image"
                />
                <figcaption className="gallery__caption">
                  Portrait by Alex Perez
                </figcaption>
              </figure>
            </a>
          </div>
          <div className="gallery__column">
            <a
              href="https://unsplash.com/@noahbuscher"
              className="gallery__link"
            >
              <figure className="gallery__thumb">
                <img
                  src="https://source.unsplash.com/AR7aumwKr2s/300x300"
                  alt="Portrait by Noah Buscher"
                  className="gallery__image"
                />
                <figcaption className="gallery__caption">
                  Portrait by Noah Buscher
                </figcaption>
              </figure>
            </a>
            <a href="https://unsplash.com/@von_co" className="gallery__link">
              <figure className="gallery__thumb">
                <img
                  src="https://source.unsplash.com/dnL6ZIpht2s/300x300"
                  alt="Portrait by Ivana Cajina"
                  className="gallery__image"
                />
                <figcaption className="gallery__caption">
                  Portrait by Ivana Cajina
                </figcaption>
              </figure>
            </a>
            <a
              href="https://unsplash.com/@samburriss"
              className="gallery__link"
            >
              <figure className="gallery__thumb">
                <img
                  src="https://source.unsplash.com/tV_1sC603zA/300x500"
                  alt="Portrait by Sam Burriss"
                  className="gallery__image"
                />
                <figcaption className="gallery__caption">
                  Portrait by Sam Burriss
                </figcaption>
              </figure>
            </a>
          </div>
          <div className="gallery__column">
            <a
              href="https://unsplash.com/@marilezhava"
              className="gallery__link"
            >
              <figure className="gallery__thumb">
                <img
                  src="https://source.unsplash.com/Xm9-vA_bhm0/300x500"
                  alt="Portrait by Mari Lezhava"
                  className="gallery__image"
                />
                <figcaption className="gallery__caption">
                  Portrait by Mari Lezhava
                </figcaption>
              </figure>
            </a>
            <a
              href="https://unsplash.com/@ethanhaddox"
              className="gallery__link"
            >
              <figure className="gallery__thumb">
                <img
                  src="https://source.unsplash.com/NTjSR3zYpsY/300x300"
                  alt="Portrait by Ethan Haddox"
                  className="gallery__image"
                />
                <figcaption className="gallery__caption">
                  Portrait by Ethan Haddox
                </figcaption>
              </figure>
            </a>
            <a
              href="https://unsplash.com/@mr_geshani"
              className="gallery__link"
            >
              <figure className="gallery__thumb">
                <img
                  src="https://source.unsplash.com/2JH8d3ChNec/300x300"
                  alt="Portrait by Amir Geshani"
                  className="gallery__image"
                />
                <figcaption className="gallery__caption">
                  Portrait by Amir Geshani
                </figcaption>
              </figure>
            </a>
          </div>
          <div className="gallery__column">
            <a href="https://unsplash.com/@frxgui" className="gallery__link">
              <figure className="gallery__thumb">
                <img
                  src="https://source.unsplash.com/FQhLLehm4dk/300x300"
                  alt="Portrait by Guilian Fremaux"
                  className="gallery__image"
                />
                <figcaption className="gallery__caption">
                  Portrait by Guilian Fremaux
                </figcaption>
              </figure>
            </a>
            <a
              href="https://unsplash.com/@majestical_jasmin"
              className="gallery__link"
            >
              <figure className="gallery__thumb">
                <img
                  src="https://source.unsplash.com/OQd9zONSx7s/300x300"
                  alt="Portrait by Jasmin Chew"
                  className="gallery__image"
                />
                <figcaption className="gallery__caption">
                  Portrait by Jasmin Chew
                </figcaption>
              </figure>
            </a>
            <a
              href="https://unsplash.com/@dimadallacqua"
              className="gallery__link"
            >
              <figure className="gallery__thumb">
                <img
                  src="https://source.unsplash.com/XZkEhowjx8k/300x500"
                  alt="Portrait by Dima DallAcqua"
                  className="gallery__image"
                />
                <figcaption className="gallery__caption">
                  Portrait by Dima DallAcqua
                </figcaption>
              </figure>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;

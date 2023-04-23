import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";
import Image from "next/image";
import TrackVisibility from "react-on-screen";

const About = () => {
  return (
    <div>
      <TrackVisibility partialVisibility={true} throttleInterval={400} className={"min-h-screen w-full shadow-2xl rounded-xl"}>
        {({ isVisible }) =>
          (
            <>
            <div id={"sobre"} className="about-section-container animate__animated animate__fadeInUpBig">
              <div className="about-background-image-container">
                <Image src={AboutBackground} alt="" />
              </div>
              <div className="about-section-image-container">
                <Image src={AboutBackgroundImage} alt="" />
              </div>
              <div className="about-section-text-container">
                <p className="primary-subheading">Sobre</p>
                <h1 className="primary-heading">
                  O alimento é uma parte importante de uma dieta equilibrada
                </h1>
                <p className="primary-text">
                  Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
                  elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
                </p>
                <p className="primary-text">
                  Non tincidunt magna non et elit. Dolor turpis molestie dui magnis
                  facilisis at fringilla quam.
                </p>
                <div className="about-buttons-container">
                  <button className="secondary-button">Saiba mais</button>
                  <button className="watch-video-button">
                    <BsFillPlayCircleFill /> Assistir video
                  </button>
                </div>
              </div>
            </div>
            </>
          )}
      </TrackVisibility>
    </div>
  );
};

export default About;

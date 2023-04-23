import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";
import Image from "next/image";
import TrackVisibility from "react-on-screen";

const Introduction = () => {
  return (
    <div className="" style={{minHeight: "100vh"}}>

      <TrackVisibility partialVisibility={true} throttleInterval={400} className={"min-h-screen w-full shadow-2xl rounded-xl"}>
        {({ isVisible }) =>
          (
            <>
                <Navbar />
                <div className={`${isVisible ? "animate__animated animate__fadeInUpBig" : ""}`}>
                  <div className="home-banner-container">
                    <div className="home-bannerImage-container">
                      <Image src={BannerBackground} width={860} height={1071} alt={""}/>
                    </div>
                    <div className="home-text-section">
                      <h1 className="primary-heading">
                        Sua comida favorita entregue quente e fresca
                      </h1>
                      <p className="primary-text">
                        Chefs de switcher saudáveis fazem todo o trabalho de preparação, picar e marinar, para que você possa cozinhar uma comida fresca.
                      </p>
                      <button className="secondary-button">
                        Pedir agora <FiArrowRight />{" "}
                      </button>
                    </div>
                    <div className="home-image-section">
                      <Image src={BannerImage} width={820} height={846} alt={""}/>
                    </div>
                  </div>

              </div>
            </>
          )}
      </TrackVisibility>

    </div>
  );
};

export default Introduction;

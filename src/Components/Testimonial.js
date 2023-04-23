import React from "react";
import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper" id={"avaliações"}>
      <div className="work-section-top">
        <p className="primary-subheading">Avaliações</p>
        <h1 className="primary-heading">O que eles estão dizendo</h1>
        <p className="primary-text">
          Lorem ipsum dolor sit amet, consectetur. Não é um grande desenvolvedor, não é um desenvolvedor. Dolor turpis molestie dui large facilita um fringilla quam.
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
          Lorem ipsum dolor sit amet, consectetur. Não é um grande desenvolvedor, não é um desenvolvedor. Dolor turpis molestie dui large facilita um fringilla quam.
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>John Doe</h2>
      </div>
    </div>
  );
};

export default Testimonial;

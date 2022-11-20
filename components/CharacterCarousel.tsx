import React from "react";
import CharacterCard from "./CharacterCard";

const CharacterCarousel = () => {
  return (
    <>
      <div className="pt-24 carousel carousel-center rounded-box">
        <div className="carousel-item">
          <CharacterCard src="/static/bridge.jpg" />
        </div>
        <div className="carousel-item">
          <CharacterCard src="/static/piano.jpg" />
        </div>
        <div className="carousel-item">
          <CharacterCard src="/static/Rectangle 23870 (1).png " />
        </div>
        <div className="carousel-item">
          <CharacterCard src="/static/victoria.jpg" />
        </div>
        <div className="carousel-item">
          <CharacterCard src="/static/newton.png" />
        </div>
        <div className="carousel-item">
          <CharacterCard src="/static/wgdf.png" />
        </div>
        <div className="carousel-item">
          <CharacterCard src="/static/victoria.jpg" />
        </div>
      </div>
    </>
  );
};

export default CharacterCarousel;

import React from 'react';

function Card({ title, text, image }) {
  return (
    <div className="invisibleCardContainer">
      <div className="placeHolder"></div>
      <div className="underCardContainer">
        <div className="cardContainer">
          <div className="gauche">
            <div className="bulle">
              <img className="image" src={image} alt={title} />
            </div>
          </div>
          <div className="droite">
            <div className="TextCardTitle">
              <h2>{title}</h2>
              <div className="TextCardContent">{text}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;

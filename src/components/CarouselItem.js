import React from 'react';

function CarouselItem({ category }) {
    const { title, description, buttonText, backgroundColor } = category;
  
    const itemStyle = {
      backgroundColor: backgroundColor, // Apply the specified background color
    };
  
    return (
      <div className="carousel-item" style={itemStyle}>
        <h3>{title}</h3>
        <p>{description}</p>
        <button>{buttonText}</button>
      </div>
    );
  }
  

export default CarouselItem;

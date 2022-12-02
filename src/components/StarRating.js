import React, { useState } from "react";
// import "./StarRating.css";
import { FaStar } from "react-icons/fa";

const StarRating = (props) => {
  const rating = props.rating;
  const size = props.size;
  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;

        return (
          <label key={i}>
            <FaStar
              className="star"
              color={ratingValue <= rating ? "#ffc107" : "#e4e5e9"}
              size={size === null ? 15 : size}
            />
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;

import React from "react";
import { useHistory } from "react-router-dom";
import Carousel from "react-elastic-carousel";
import BookCard from "../BookCard"
import "./styles.css";

const breakPoints = [
  { width: 500, itemsToShow: 2 },
  { width: 600, itemsToShow: 3 },
  { width: 800, itemsToShow: 4 },
  { width: 1000, itemsToShow: 6 },
];

export default (props) => {
  let history = useHistory();

  console.log(history, "history");
 
  return ( 
    <div className="carousel-container mx-auto py-2 my-5">
      
    <div className="position-relative">
        <div className="carousel-title position-absolute primary-text secondary-bg font-weight-bold d-flex align-items-center pl-3 pr-5">
          Best Sellers of {new Date().getFullYear()}
            </div>
      </div>

      <Carousel enableTilt = {false} className="pt-4" breakPoints={breakPoints}>
        {props.books.map(book => (<BookCard book={book} />))}
      </Carousel>
    </div>
  );
};

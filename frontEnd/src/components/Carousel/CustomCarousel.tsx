import React from "react";
import Carousel from "react-elastic-carousel";
import BookCard from "../BookCard"
import "./styles.css";
import {BookResponse} from "../../API/books";

const breakPoints = [
    {width: 500, itemsToShow: 2},
    {width: 600, itemsToShow: 3},
    {width: 800, itemsToShow: 4},
    {width: 1000, itemsToShow: 6},
];

interface CustomCarouselProps {
    books: BookResponse[];
}

export const CustomCarousel: React.FC<CustomCarouselProps> = ({books}) => {
    return (
        <div>
           
            {
                books.length > 0 && (
                    <>
                        <div className="carousel-container mx-auto pt-1 my-6">
                            <div className="position-relative">
                                <div
                                    className="carousel-title position-absolute primary-text secondary-bg font-weight-bold d-flex align-items-center px-4">
                                    Best Sellers of {new Date().getFullYear()}
                                </div>
                            </div>
                            <Carousel enableTilt={false} className="pt-4" breakPoints={breakPoints}>
                                {books.map(book => (<BookCard book={book}/>))}
                            </Carousel>
                        </div>
                    </>
                )
            }
        </div>
    );
};

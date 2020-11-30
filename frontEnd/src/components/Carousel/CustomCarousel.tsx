import React from "react";
import Carousel from "react-elastic-carousel";
import {BookResponse} from "../../API/books";
import BookCard from "../BookCard"
import "./styles.css";

const defaultBreakPoints = [
    {width: 1, itemsToShow: 1},
    {width: 500, itemsToShow: 2},
    {width: 600, itemsToShow: 3},
    {width: 800, itemsToShow: 4},
    {width: 1000, itemsToShow: 6},
];


interface breakPointI{
    width:number, 
    itemsToShow:number
}

interface CustomCarouselProps {
    books: BookResponse[],
    title: string,
    className : string,
    customBreakPoints : breakPointI[]
}

export const CustomCarousel: React.FC<CustomCarouselProps> = ({books, title, className, customBreakPoints = []}) => {
    return (
        <div className={className}>
            {
                books.length > 0 && (
                    <>
                        <div className="carousel-container mx-auto pt-1 my-6">
                            <div className="position-relative">
                                <div
                                    className="carousel-title position-absolute primary-text secondary-bg font-weight-bold d-flex align-items-center px-4">
                                    {title}
                                </div>
                            </div>
                            <Carousel enableTilt={false} className="pt-4 pb-3" breakPoints={(customBreakPoints.length > 0)? customBreakPoints : defaultBreakPoints} >
                                {books.map(book => (<BookCard className={"mx-4"} book={book}/>))}
                            </Carousel>
                        </div>
                    </>
                )
            }
        </div>
    );
};

import React, { useState, useEffect, useContext } from "react";
import Header from "../Header";
import {CustomCarousel} from "../Carousel/CustomCarousel";
import Img from "../../assets/booksCanvas.jpg";
import Footer from "../Footer";
import Loader from 'react-loader-spinner'
import { Row } from "react-bootstrap";
import { BooksContext } from "../BooksContext"

export const Home: React.FC = () => {
    const [books, setBooks] = useContext(BooksContext);

    return (
        <div>
            <Header/>
            <div className="w-100 position-relative">
                <img src={Img} alt="image" className="img-fluid"/>
                <div className="row position-absolute w-100 h-100 image-text">
                    <div className="align-self-center mx-auto user-select-none">Welcome to our bookstore!</div>
                </div>
            </div>
            {books && books.length > 0 ? (
                <div ><CustomCarousel className="mt-4 mb-5" title={"Best sellers of " + new Date().getFullYear()} books={books}/> </div>
                
            ) : (<Row className="justify-content-center my-5">
                <Loader
                    type="ThreeDots"
                    color="#22766E"
                    height={200}
                    width={200}
                />
            </Row>)}
            <Footer/>
        </div>
    );
};

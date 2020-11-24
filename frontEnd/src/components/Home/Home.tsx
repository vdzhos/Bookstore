import React, { useState, useEffect } from "react";
import axios from 'axios';
import Header from "../Header";
import { CustomCarousel } from "../Carousel/CustomCarousel";
import Img from "../../assets/booksCanvas.jpg";
import Footer from "../Footer";
import { BookResponse, getAllBooks } from "../../API/books";
import Loader from 'react-loader-spinner'
import { Row } from "react-bootstrap";

export const Home: React.FC = () => {
    const [booksList, setBooksList] = useState<BookResponse[] | undefined>(undefined);

    useEffect(() => {
        (async () => {
            try {
                const response = await getAllBooks();
                if (response) {
                    setBooksList(response);
                    console.log(response, "response");
                }
            } catch {
                console.log("some err");
            }
        })();
    }, [])

    return (
        <div>
            <Header />
            <div className="w-100 position-relative">
                <img src={Img} alt="Books" className="img-fluid" />
                <div className="row position-absolute w-100 h-100 image-text">
                    <div className="align-self-center mx-auto user-select-none">Welcome to our bookstore!</div>
                </div>
            </div>


            {booksList && booksList.length > 0 ? (
                <>
                    <CustomCarousel title = {"Best sellers of " + new Date().getFullYear()} books={booksList} />
                </>
            ) : (<Row className="justify-content-center my-5" >
                <Loader
                    type="ThreeDots"
                    color="#22766E"
                    height={200}
                    width={200}
                />
            </Row>)}
            <Footer />
        </div>
    );
};

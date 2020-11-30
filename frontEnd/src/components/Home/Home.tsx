import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../Header";
import {CustomCarousel} from "../Carousel/CustomCarousel";
import Img from "../../assets/booksCanvas.jpg";
import Footer from "../Footer";
import Loader from 'react-loader-spinner'
import { Row } from "react-bootstrap";

export const Home: React.FC = () => {

    const [bestsellers, setBestsellers] = useState([]);
    const breakPoints = [
    {width:0, itemsToShow:1},
    {width: 420, itemsToShow: 2},
    {width: 590, itemsToShow: 3},
    {width: 820, itemsToShow: 4},
    {width: 1000, itemsToShow: 5},
    {width: 1300, itemsToShow: 6},
];

    useEffect(() => {
        (async () => {
            try {
                axios
                    .get("http://localhost:3001/books/20")
                    .then(response => setBestsellers(response.data));
            } catch {
                console.log("some err");
            }
        })();
    }, [])

    return (
        <div>
            <Header/>
            <div className="w-100 position-relative">
                <img src={Img} alt="image" className="img-fluid"/>
                <div className="row position-absolute w-100 h-100 image-text">
                    <div className="align-self-center mx-auto user-select-none">Welcome to our bookstore!</div>
                </div>
            </div>
            {bestsellers && bestsellers.length > 0 ? (
                <div ><CustomCarousel className="mt-4 mb-5" title={"Best sellers of " + new Date().getFullYear()} books={bestsellers} customBreakPoints={breakPoints}/> </div>
                
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

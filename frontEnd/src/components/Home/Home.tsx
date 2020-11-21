import React, {useState} from "react";
import axios from 'axios';
import Header from "../Header";
import Carousel from "../Carousel";
import Img from "../../assets/booksCanvas.jpg";

export const Home: React.FC = () => {
    const [booksList, setBooksList] = useState([]);
    try {
        axios
            .get('http://localhost:3001/books')
            .then(response => (setBooksList(response.data)));
    } catch {
        console.log("some err");
    }

    return (
        <div>
            <Header/>
            <div className="w-100 position-relative">
                <img src={Img} alt="Books" className="img-fluid"/>
                <div className="row position-absolute w-100 h-100 image-text">
                    <div className="align-self-center mx-auto user-select-none">Welcome to our bookstore!</div>
                </div>
            </div>
            <Carousel books={booksList}/>
        </div>
    );
};

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import NavigationPanel from "../NavigationPanel"
import BooksGrid from "../BooksGrid"
import Header from "../Header";
import Footer from "../Footer";
import { BookResponse, getAllBooks } from "../../API/books";

export const Books = (props) => {
    let history = useHistory();
    const [booksList, setBooksList] = useState();

    const sortByPriceFromLow = () => {
        setBooksList(booksList.sort((book1, book2) => book1.price - book2.price));
    }

    const sortByPriceFromHigh = () => {
        setBooksList(booksList.sort((book1, book2) => book2.price - book1.price));
    }

    const sortByName = () => {
        console.log(booksList);
        setBooksList(booksList.sort((book1, book2) => {if(book2.title < book1.title)return 1;else return -1}));
    }

    useEffect(() => {
        (async () => {
            try {
                axios
                    .get("http://localhost:3001/books")
                    .then(response => setBooksList(response.data));
            } catch {
                console.log("some err");
            }
        })();
    }, [])

    return (
        <div>
            <Header />
            <div className="my-5" >
                <NavigationPanel name={"Books"} sortByName = {sortByName} sortByPriceFromHigh = {sortByPriceFromHigh} sortByPriceFromLow = {sortByPriceFromLow}/>
                {<BooksGrid booksList={booksList} />/**/}
                {/*map => Books Grid*/}
                {/*View More button*/}
            </div>
            <Footer />
        </div>
    );
};

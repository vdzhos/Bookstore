import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import NavigationPanel from "../NavigationPanel"
import BooksGrid from "../BooksGrid"
import Header from "../Header";
import Footer from "../Footer";
import { BooksContext } from "../BooksContext"
import Loader from 'react-loader-spinner'
import { BookResponse, getAllBooks } from "../../API/books";

export const Books = (props) => {
        const [booksList, setBooksList] = useContext(BooksContext);

        let history = useHistory();

        const sortByPriceFromLow = () => {
            setBooksList(booksList.sort((book1, book2) => book1.price - book2.price));
        }

        const sortByPriceFromHigh = () => {
            setBooksList(booksList.sort((book1, book2) => book2.price - book1.price));
        }

        const sortByName = () => {
            console.log(booksList);
            setBooksList(booksList.sort((book1, book2) => {
                if (book2.title < book1.title) return 1;
                else return -1
            }));
        }


        return ( <
            div >
            <
            Header / >
            <
            div className = "my-5" >
            <
            NavigationPanel name = { "Books" }
            sortByName = { sortByName }
            sortByPriceFromHigh = { sortByPriceFromHigh }
            sortByPriceFromLow = { sortByPriceFromLow }
            /> {
                !booksList && ( <
                    Row className = "justify-content-center my-5" >
                    <
                    Loader type = "ThreeDots"
                    color = "#22766E"
                    height = { 100 }
                    width = { 100 }
                    timeout = { 3000 }
                    /></Row >
                )
            } {
                booksList && booksList.length && < BooksGrid booksList = { booksList }
                />/ ** /} <
                /div> <
                Footer / >
                    <
                    /div>
            );
        };
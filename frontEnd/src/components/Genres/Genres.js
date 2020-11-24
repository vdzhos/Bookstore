import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import NavigationPanel from "../NavigationPanel"
import BooksGrid from "../BooksGrid"
import Header from "../Header";
import Footer from "../Footer";

export const Genres = (props) => {
    let history = useHistory();
    const [booksList, setBooksList] = useState();

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
                <NavigationPanel/>
                {<BooksGrid booksList={booksList} />/**/}
            </div>
            <Footer />
        </div>
    );
};

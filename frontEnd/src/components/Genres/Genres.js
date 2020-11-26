import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import NavigationPanel from "../NavigationPanel"
import BooksGrid from "../BooksGrid"
import Header from "../Header";
import Footer from "../Footer";

export const Genres = (props) => {
    let history = useHistory();
    const [genres, setGenres] = useState();

    useEffect(async () => { 
        try {
        await axios
            .get('http://localhost:3001/genres')
            .then(response => (setGenres(response.data)));
    } catch {
        console.log("some err");
    }
    },[]);

    return (
        <div>
            <Header />
            <div className="my-5" >
                <NavigationPanel/>
                {genres && console.log(genres[10].books[0])}
                {genres && <BooksGrid booksList = {genres[10]} />} 
                
            </div>
            <Footer />
        </div>
    );
};

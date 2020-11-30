import React, {useState, createContext, useEffect} from "react"
import axios from "axios"

export const BooksContext = createContext();

export const BooksProvider = (props) => {
    const [books, setBooks] = useState(useEffect(async () => { 
        try {
        await axios
            .get('http://localhost:3001/books')
            .then(response => (setBooks(response.data)));
    } catch {
        console.log("some err");
    }
    },[]));


    return (
        <BooksContext.Provider value = {[books, setBooks]}>
        {props.children}
        </BooksContext.Provider>
    );

    
}
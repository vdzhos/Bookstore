import React, {useState} from "react";
import { Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import NavigationPanel from "../NavigationPanel"
import BooksGrid from "../BooksGrid"
import Header from "../Header";
import Footer from "../Footer";

export const Books = (props) => {
    let history = useHistory(); 

    return (
        <div>
            <Header />
                <div className = "my-5" >
                <NavigationPanel name = {"Books"} />
                <BooksGrid />
                {/*map => Books Grid*/}
                {/*View More button*/}
                </div>
            <Footer />
        </div>
    );
};

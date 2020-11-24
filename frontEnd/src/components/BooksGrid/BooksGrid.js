import React from "react";
import { Row } from "react-bootstrap";
import "./styles.css"
import BookCard from "../BookCard";
import Loader from 'react-loader-spinner'

export const BooksGrid = (props) => {

    return (
        <div className="my-5">

            <Row id = "row" className="justify-content-center my-5" >
                {!props.booksList && 
                    <Loader
                    type="ThreeDots"
                    color="#22766E"
                    height={100}
                    width={100}
                    timeout={3000}
                 />}
                {props.booksList && (
                    props.booksList.map((book) => <BookCard book={book} />)
                         ) }
            </Row>

        </div>
    );
};

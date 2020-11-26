import React, { useState, useContext } from "react";
import { Row, Button } from "react-bootstrap";
import "./styles.css"
import BookCard from "../BookCard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

export const BooksGrid = (props) => {
    const numOfBooks = 24;

    const [numOfViewMoreClicks, setNumOfViewMoreClicks] = useState(1);

    const handleViewMore = () => {
        setNumOfViewMoreClicks(numOfViewMoreClicks + 1);
    }

    return (
        <div className="my-5">

            <Row id="row" className="justify-content-center my-5" >
                {props.booksList && (
                    props.booksList.map((book, index) => <div>{index < numOfBooks * numOfViewMoreClicks && <BookCard book={book} />}</div>)
                )}
                {!props && "some er"}
            </Row>

            <Row className="justify-content-center">
                {numOfBooks * numOfViewMoreClicks < props.booksList.length && <Button className="px-5 py-0" id = "view-more-btn" onClick={handleViewMore}>
                    <FontAwesomeIcon icon={faChevronDown} />
                </Button>}
            </Row>

        </div>
    );
};

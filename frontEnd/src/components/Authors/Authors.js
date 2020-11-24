import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import { CustomCarousel } from "../Carousel/CustomCarousel";
import Loader from 'react-loader-spinner'
import { Row } from "react-bootstrap";

export const Authors = (props) => {
    let history = useHistory();
    const [authorsList, setAuthorsList] = useState();
    let test = "test";

    useEffect(() => {
        (async () => {
            try {
                axios
                    .get("http://localhost:3001/authors/top10")
                    .then(response => setAuthorsList(response.data));
            } catch {
                console.log("some err");
            }
        })();
    }, [])

    return (
        <div>
            <Header />
            <div className="my-5" >
                {!authorsList && (
                    <Row className="justify-content-center my-5" >
                <Loader
                    type="ThreeDots"
                    color="#22766E"
                    height={200}
                    width={200}
                />
            </Row>
                )}
                {authorsList &&
                    authorsList.map(author => (
                        <div>
                                {(author.books).map(book => (
                                        <div>
                                            <CustomCarousel title={author.name} books={book} />
                                        </div>
                                    ))}
                            </div>
                    ))}
            </div>
            <Footer />
        </div>
    );
};

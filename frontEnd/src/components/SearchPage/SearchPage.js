import React from "react";
import { useHistory } from "react-router-dom";
import { Row, Button } from "react-bootstrap"
import Header from "../Header";
import Footer from "../Footer";
import BooksGrid from "../BooksGrid"
import "./styles.css";

export const SearchPage = (props) => {
    let history = useHistory();
    const location = props.location;
    console.log(location.state);

    return (
        <>
        {location.state && <div>
        <Header />
            <div className="my-5" >
                {location.state.length <= 0 && (
                    <div>
                        <Row className="justify-content-center h2" >Nothing found</Row>
                        <Row className="justify-content-center h2" >
                            <Button
                                id="continueShoppingA"
                                className=" btn primary-text summary-btn col-6 col-sm-5 mt-4"
                                onClick={() => history.push("/books")}>
                                Continue shopping
                </Button>
                        </Row>
                    </div>
                )}
                {location && location.state.length > 0 && <><BooksGrid booksList={location.state} /> <Footer /></> /**/}
            </div>
            
        </div>}
        </>
    );
};

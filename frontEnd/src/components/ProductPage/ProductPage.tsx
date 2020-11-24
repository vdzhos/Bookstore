import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import {Card} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import {useHistory, useLocation} from "react-router-dom";
import {BookResponse} from "../../API/books";

export const ProductPage = () => {
    const location = useLocation<BookResponse>();
    console.log(location, "location");
    let history = useHistory();
    return (
        <div>
            <Header/>
            <Card className="book-card mx-3 mb-0">
                <div className="pt-3 no-gutters">
                    <Card.Img className="card-img-top" variant="top" src={location.state.image}/>
                </div>
                <Card.Body>
                    <Card.Title className="font-weight-bold m-1 text-center">{location.state.title}</Card.Title>
                    <Card.Text className="m-1 text-center">TODO: AddAuthor</Card.Text>
                    <Card.Text id="priceAndBuyRow" className="font-weight-bold m-1 text-center card-price px-3">
                        <span id="price">{location.state.price + "$"}</span>
                        <a onClick={() => sessionStorage.setItem("addItem", JSON.stringify(location.state))}><FontAwesomeIcon id="cartIcon" icon={faShoppingCart}/></a>
                    </Card.Text>
                </Card.Body>
            </Card>
            <Footer/>
        </div>
    );
}
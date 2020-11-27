import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faCartPlus } from '@fortawesome/free-solid-svg-icons';
import "./styles.css";
import { CartContext } from "../CartContext/CartContext";

export default (props) => {
    let history = useHistory();
    const [booksInCart, setBooksInCart] = useContext(CartContext);
    const handleClickOnCart = (event) => {
        if (!booksInCart.find(o => o.id === props.book.id))
            setBooksInCart([...booksInCart, props.book]);
        else {
            setBooksInCart(booksInCart.filter((book) => book.id !== props.book.id));
        }
    }
    const handleClickOnCard = (event) => {
        console.log(event.target.classList);
        if (!event.target.classList.length || event.target.classList.contains("fa-cart-plus")) {
            event.stopPropagation();
            return;
        }
        else { history.push("/books/" + props.book.id, props.book) }
    }
    return (
        <div key={props.book.id}>
            <Card onClick={handleClickOnCard} className="book-card mx-3 mb-0" className={props.className}>
                <div id="imgContainer">
                    <Card.Img id="imgCard" className="card-img-top pt-3" variant="top" src={props.book.image} />
                </div>
                <Card.Body>
                    <Card.Title
                        className="font-weight-bold m-1 text-center">{props.book.title.substring(0, 22)}</Card.Title>
                    {
                        props.book.authors.map(authorStr => (
                            <Card.Text className="m-1 text-center h6">{authorStr.substring(0, 15)}</Card.Text>
                        ))
                    }
                    <Card.Text id="priceAndBuyRow" className="font-weight-bold m-1 text-center card-price px-3">
                        <span id="price" className="price">{props.book.price + "$"}</span>
                        <a onClick={handleClickOnCart} className="cartLink"><FontAwesomeIcon id="cartIcon" icon={(!booksInCart.find(o => o.id === props.book.id)) ? faCartPlus : faShoppingCart} /></a>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

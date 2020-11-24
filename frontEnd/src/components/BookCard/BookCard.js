import React from "react";
import { useHistory } from "react-router-dom";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import "./styles.css";

export default (props) => {
    let history = useHistory();
    let title = props.book.title.substring(0, 30) + "..";
    return (
        <div key={props.book._id}>
            <Card onClick={() => history.push("/books/" + props.book._id, props.book)} className="book-card mx-3 mb-0">
                <div className="pt-3">
                    <Card.Img className="card-img-top" variant="top" src={props.book.image} />
                </div>
                <Card.Body>
                    <Card.Title className="font-weight-bold m-1 text-center">{props.book.title}</Card.Title>
                    <Card.Text className="m-1 text-center">TODO: AddAuthor</Card.Text>
                    <Card.Text id = "priceAndBuyRow" className="font-weight-bold m-1 text-center card-price px-3">
                        <span id = "price">{props.book.price + "$"}</span>
                        <a><FontAwesomeIcon id="cartIcon" icon={faShoppingCart}/></a>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

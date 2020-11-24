import React from "react";
import { useHistory } from "react-router-dom";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import "./styles.css";

export default (props) => {

    

    let history = useHistory();
    return (
        <div key={props.book.id}>
            <Card onClick={() => history.push("/books/" + props.book.id, props.book)} className="book-card mx-3">
                <div className="pt-3">
                    <Card.Img className="card-img-top" variant="top" src={props.book.image} />
                </div>
                <Card.Body>
                    <Card.Title className="font-weight-bold m-1 text-center">{props.book.title.substring(0, 15)}</Card.Title>
                    <Card.Text className="m-1 text-center h6">{props.book.authors[0].substring(0, 15)}</Card.Text>
                    <Card.Text className="font-weight-bold m-1 text-center card-price">{props.book.price + "$"}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

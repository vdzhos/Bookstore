import React from "react";
import { useHistory } from "react-router-dom";
import { Card } from "react-bootstrap";
import "./styles.css";

export default (props) => {
    let history = useHistory();

    return (
        <div key={props.book._id}>

            <Card onClick={() => history.push("/books/" + props.book._id)} className="book-card mx-3 mb-0">

                <div className="pt-3">
                    <Card.Img className="card-img-top" variant="top" src={props.book.image} />
                </div>

                <Card.Body>
                    <Card.Title className="font-weight-bold m-1 text-center">{props.book.title.substring(0, 20)}</Card.Title>
                    <Card.Text className="m-1 text-center">TODO: AddAuthor</Card.Text>
                    <Card.Text className="font-weight-bold m-1 text-center card-price">{props.book.price + "$"}</Card.Text>
                </Card.Body>

            </Card>

        </div>
    );
};

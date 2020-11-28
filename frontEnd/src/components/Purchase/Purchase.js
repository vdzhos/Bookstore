import React from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import Header from "../Header";
import Footer from "../Footer";
import { Row, Button, Form, Container } from "react-bootstrap"
import "./styles.css";

export const Purchase = (props) => {
    let history = useHistory();
    const { register, errors, handleSubmit } = useForm();
    const location = props.location;
    console.log(location.state);

    return (
        <div>
            <Header />
            <Container className = "my-5">
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label id="firstName" ref={register({ required: true, maxLength: 2 })}>Name and Surname</Form.Label>
                        {errors.firstName && "First name is required"}
                        <Form.Control placeholder="Name and Surname" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Phone number</Form.Label>
                        <Form.Control placeholder="Phone number" />
                    </Form.Group>
                    <Button type="submit">
                        Purchase
                </Button>
                </Form>
            </Container>
            <Footer />
        </div>
    );
};

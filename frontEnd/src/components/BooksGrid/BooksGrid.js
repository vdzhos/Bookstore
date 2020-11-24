import React, { useState } from "react";
import { Row, Container, Dropdown } from "react-bootstrap";
import "./styles.css"
import { useHistory } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import BookCard from "../BookCard";

const NUM_OF_ROWS = 10;
const NUM_OF_COLS = 4;

export const BooksGrid = (props) => {

    return (
        <Container>
       <Row >sac</Row>
       <Row >sac</Row>
       <Row >sac</Row>
       <Row >sac</Row>
       <Row >sac</Row>
       <Row >sac</Row>
       <Row >sac</Row>
       <Row >sac</Row>
       <Row >sac</Row>
       <Row >sac</Row>
       </Container>
    );
};

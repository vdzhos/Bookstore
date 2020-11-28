import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form"
import { BooksContext } from "../BooksContext"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch, faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import {
    Navbar,
    Nav,
    Form,
    FormControl,
    Button,
} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import "./styles.css";

type FormData = {
    input: string;
};

export const Header: React.FC = () => {
  let history = useHistory();
  const [books, setBooks] = useContext(BooksContext);
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = handleSubmit(async ({ input }) => {
    if (books) {
      let book;
      let foundbooks: { title: string | string[]; }[] = [];
      books.forEach((b: { title: string | string[]; }) => {if(b.title.includes(input)) foundbooks.push(b);})
      history.push(`/search/${input}`, foundbooks);
    }

  });

  return (
    <div>
      <Navbar id="nav-bar" sticky="top" expand="lg">
        <Navbar.Brand id="brand" className="nav-brand-font" onClick={() => history.push("/")}>B</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link id="nav-link1" className="mx-3" onClick={() => history.push("/books")}>Books</Nav.Link>
            <Nav.Link id="nav-link1" className="mx-3" onClick={() => history.push("/authors")}>Authors</Nav.Link>
            <Nav.Link id="nav-link2" className="mx-3" onClick={() => history.push("/genres")}>Genres</Nav.Link>
          </Nav>
          <Form inline onSubmit={onSubmit}>
            <FormControl name="input" ref={register} id="searchText" type="text" placeholder="Search" className="mr-sm-2" >
            </FormControl>
            <Button disabled = {!books} type="submit" className="bg-light"><FontAwesomeIcon id="searchBtn" icon={faSearch} size="lg" /></Button>
                    <FontAwesomeIcon onClick={() => history.push("/cart")}
                                     id="cartIcon" className="ml-3" icon={faShoppingCart}/>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

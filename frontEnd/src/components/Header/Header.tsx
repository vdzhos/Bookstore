import React from "react";
import {useForm} from "react-hook-form"
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch} from '@fortawesome/free-solid-svg-icons';
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./styles.css";

type FormData = {
  input: string;
};

const books = [
  {title: "o",
  id: 1}
]

export const Header: React.FC = () => {
  let history = useHistory();
  const {register, handleSubmit} = useForm<FormData>();

  const onSubmit = handleSubmit(({ input }) => {
    console.log(input);
    let id = books.find((o: { title: string; }) => o.title === input)?.id;
    if(id)
    history.push("/books/" + id);
    else{
      history.push("/books")
    }
  });

  return (
    <div>
      <Navbar id = "nav-bar" sticky = "top" expand="lg">
        <Navbar.Brand id = "brand" className = "nav-brand-font" onClick={() => history.push("/")}>B</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link id = "nav-link1" className = "mx-3" onClick={() => history.push("/books")}>Books</Nav.Link>
            <Nav.Link id = "nav-link1" className = "mx-3" onClick={() => history.push("/authors")}>Authors</Nav.Link>
            <Nav.Link id = "nav-link2" className = "mx-3" onClick={() => history.push("/genres")}>Genres</Nav.Link>
          </Nav>
          <Form inline onSubmit = {onSubmit}>
            <FormControl name = "input" ref = {register} id = "searchText" type="text"  placeholder="Search" className="mr-sm-2" >
            </FormControl>
            <Button type = "submit" className="bg-light"><FontAwesomeIcon id = "searchBtn" icon={faSearch} size="lg" /></Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

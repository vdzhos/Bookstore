import React from "react";
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

export const Header: React.FC = () => {
  let history = useHistory();

  console.log(history, "history");

  return (
    <div> 
      <Navbar id = "nav-bar" variant = "dark" className = "primary-bg primary-text" sticky = "top" expand="lg">
        <Navbar.Brand onClick={() => history.push("/")} className = "primary-text nav-brend-font ">B</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav className = "mx-3" onClick={() => history.push("/books")}>Books</Nav>
            <Nav className = "mx-3" onClick={() => history.push("/genres")}>Genres</Nav>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" >
            </FormControl>
            <Button className="bg-light"><FontAwesomeIcon className="pink-color" icon={faSearch} size="lg" /></Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

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

  return (
    <div>
      <Navbar id = "nav-bar" /*variant = "light" className = "primary-bg primary-text"*/ sticky = "top" expand="lg">
        <Navbar.Brand id = "brand" className = "nav-brand-font">B</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link id = "nav-link1" className = "mx-3" onClick={() => history.push("/books")}>Books</Nav.Link>
            <Nav.Link id = "nav-link2" className = "mx-3" onClick={() => history.push("/genres")}>Genres</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl id = "searchText" type="text" placeholder="Search" className="mr-sm-2" >
            </FormControl>
            <Button className="bg-light"><FontAwesomeIcon id = "searchBtn" icon={faSearch} size="lg" /></Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

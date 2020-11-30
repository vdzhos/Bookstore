import React from "react";
import {Dropdown, Container} from "react-bootstrap";
import "./styles.css"

export const NavigationPanel = (props) => {
    return (
        <Container>
            <div id="np-container" className="d-flex">
                <span className="h1">{props.name}</span>
                <Dropdown className="d-inline">
                    <Dropdown.Toggle className="px-5" id="dropdown-basic">
                        Sort by
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item onClick={props.sortByName} className="dropdown-item"
                                       href="#/action-3">A-Z</Dropdown.Item>
                        <Dropdown.Item onClick={props.sortByPriceFromLow} className="px-5 dropdown-item"
                                       href="#/action-1">Price - low to high</Dropdown.Item>
                        <Dropdown.Item onClick={props.sortByPriceFromHigh} className="px-5 dropdown-item"
                                       href="#/action-2">Price - high to low</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </Container>
    );
};

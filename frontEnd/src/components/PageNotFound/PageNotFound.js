import React from 'react';
import {Button} from "react-bootstrap";
import {Header} from "../Header/Header";
import {useHistory} from "react-router";
import './styles.css';

export const PageNotFound = () => {
    const history = useHistory();
    return (
        <div className="">
            <Header />
            <div className="row justify-content-center mx-auto">
                <p className="h1 my-4">Page Not Found</p>
            </div>
            <div className="row justify-content-center">
            <Button onClick={() => history.push("/books")} className="btn-lg" id="buttonGoShopping">
                Go shopping
            </Button>
        </div>
        </div>
    );
}
import React from 'react';
import {Header} from "../Header/Header";
import {useHistory} from "react-router";

export const PageNotFound = () => {
    const history = useHistory();
    return (
        <div className="">
            <Header />
            <div className="row justify-content-center mx-auto">
                <p className="h1 my-4">Page Not Found</p>
            </div>
            <div className="row justify-content-center">
        </div>
        </div>
    );
}
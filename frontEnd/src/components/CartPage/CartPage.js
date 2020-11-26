import React, {useContext, useState} from 'react';
import Header from "../Header";
import Footer from "../Footer";
import {CartContext} from "../CartContext/CartContext";
import "./styles.css";

export const CartPage = (props) => {
    const [booksInCart, setBooksInCart] = useContext(CartContext);
    return (
        <div>
            <Header/>
            <div className="main-body flex-grow-1 h-100">
                <div className="row shopping-cart-container my-5">
                    <div className="shopping-cart-list shadow col-12 px-3 pt-3 pb-0">
                        <div className="shadow shopping-cart-card card mb-3">
                            <div className="row no-gutters flex-nowrap">
                                <div className="py-4">
                                    <img
                                        src="https://images-na.ssl-images-amazon.com/images/I/714jMzCHVpL._AC_UL200_SR200,200_.jpg"
                                        className="card-img" alt="Book in cart"/>
                                </div>
                                <div className="row no-gutters flex-grow-1">
                                    <div className="col-xl-9 col-8">
                                        <div className="row card-body p-3 h-100">
                                            <div className="col-xl-8 col-12">
                                                <p className="card-title mb-2">Book name</p>
                                                <p className="card-text mb-2">Author1, author2, author3</p>
                                                <div className="d-xl-none d-block">
                                                    <div className="d-flex row col-12 p-0 pl-3">
                                                        <a className="btn btn-plus-minus p-0 pr-2" href="#"><i
                                                            className="fas fa-minus"></i></a>
                                                        <input className="plus-minus-text text-center p-0" type="text"
                                                               value="1" min="1" max="5"/>
                                                        <a className="btn btn-plus-minus p-0 pl-2" href="#"><i
                                                            className="fas fa-plus"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="d-xl-flex d-none col-4 justify-content-center align-items-center p-1">
                                                <div className="d-flex row justify-content-center col-12 p-0">
                                                    <a className="btn btn-plus-minus p-0 pr-2" href="#"><i
                                                        className="fas fa-minus"></i></a>
                                                    <input className="plus-minus-text text-center p-0" type="text"
                                                           value="1" min="1" max="5"/>
                                                    <a className="btn btn-plus-minus p-0 pl-2" href="#"><i
                                                        className="fas fa-plus"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-4">
                                        <div className="position-relative card-footer border-0 h-100 pt-3 pl-0">
                                            <p className="price text-right">$15.00</p>
                                            <div className="position-absolute text-right delete">
                                                <a href="#"><i className="fas fa-trash-alt"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="shopping-cart-summary shadow col-12 p-4">
                            <div className="d-xl-none d-flex row justify-content-between mb-2">
                                <div className="total d-flex justify-content-start ml-4 mb-1">
                                    <p className="m-0">Total:</p>
                                </div>
                                <div className="total d-flex justify-content-end mr-4 mb-1">
                                    <p className="m-0">$100.00</p>
                                </div>
                            </div>
                            <div className="row">
                                <a className="btn primary-text summary-btn col-6 col-sm-5 ml-3" href="#">Continue
                                    shopping</a>
                                <div
                                    className="total flex-grow-1 d-xl-flex d-none justify-content-end align-items-center mr-3">
                                    <p className="m-0">Total: $100.00</p>
                                </div>
                                <a className="btn primary-text summary-btn col-5 col-sm-6 ml-auto mr-3"
                                   href="#">Purchase</a>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    );
}
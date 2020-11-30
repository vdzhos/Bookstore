import React, { useContext } from 'react';
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import Header from "../Header";
import Footer from "../Footer";
import { CartContext } from "../CartContext/CartContext";
import "./styles.css";

export const CartPage = () => {
    let history = useHistory();
    const [booksInCart, setBooksInCart] = useContext(CartContext);
    const handleIncreaseNum = (book) => {
        if (!booksInCart.find(o => o === book).num) {
            booksInCart.find(o => o === book).num = 2
        }
        else {
            console.log(++booksInCart.find(o => o === book).num)
        }
        setBooksInCart([...booksInCart]);
    }

    const handleDecreaseNum = (book) => {
        if (booksInCart.find(o => o === book).num && booksInCart.find(o => o === book).num > 1)
            console.log(--booksInCart.find(o => o === book).num)
            setBooksInCart([...booksInCart]);
    }

    const handleDelete = (book) => {
        setBooksInCart(booksInCart.filter(b => b !== book));
    }

    const handlePurchase = () => {
        setBooksInCart([]);
    }

    return (
        <div>
            <Header />
            <div className="main-body flex-grow-1 h-100">
                <div className="row shopping-cart-container my-5">

                    {booksInCart && !booksInCart.length && (
                        <div className="mx-auto">
                            <p className="h1 mb-4">Cart is empty</p>
                            <Button onClick={() => history.goBack()} className="btn-lg" id="buttonGoShopping">
                                Continue shopping
                            </Button>
                        </div>
                    )}

                    {booksInCart && booksInCart.length > 0 && booksInCart.map(book => {
                        return <div className="shadow shopping-cart-card card mb-3 container" key={book._id}>
                            <div className="row no-gutters flex-nowrap">
                                <div className="py-4">
                                    <img
                                        src={book.image}
                                        className="card-img" alt="Book in cart" />
                                </div>
                                <div className="row no-gutters flex-grow-1">
                                    <div className="col-xl-9 col-8">
                                        <div className="row card-body p-3 h-100">
                                            <div className="col-xl-8 col-12">
                                                <p className="card-title mb-2">{book.title}</p>
                                                {
                                                    book.authors.map(authorStr => (
                                                        <p className="card-text mb-2">{authorStr}</p>
                                                    ))
                                                }
                                            </div>
                                            <div
                                                className="d-xl-flex d-none col-4 justify-content-center align-items-center p-1">
                                                <div className="d-flex row justify-content-center col-12 p-0">
                                                    <a className="btn btn-plus-minus p-0 pr-2">
                                                        <FontAwesomeIcon icon={faPlus} size="xs" onClick={e => handleIncreaseNum(book)} />
                                                    </a>
                                                    <p className="plus-minus-text text-center p-0"
                                                    >{book.num ? book.num : 1}</p>
                                                    <a className="btn btn-plus-minus p-0 pl-2">
                                                        <FontAwesomeIcon icon={faMinus} size="xs" onClick={e => handleDecreaseNum(book)} />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-4">
                                        <div className="position-relative card-footer border-0 h-100 pt-3 pl-0">
                                            <p className="price text-right">${book.price}</p>
                                            <div className="position-absolute text-right delete">
                                                <a>
                                                    <FontAwesomeIcon icon={faTrashAlt} size="xs" onClick={e => handleDelete(book)} />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })}
                    {booksInCart && booksInCart.length > 0 && (
                        <div className="shopping-cart-summary shadow col-12 p-4">
                            <div className="d-xl-none d-flex row justify-content-between mb-2">
                                <div className="total d-flex justify-content-start ml-4 mb-1">
                                    <p className="m-0">Total:</p>
                                </div>
                                <div className="total d-flex justify-content-end mr-4 mb-1">
                                    <p className="m-0">
                                        ${(Math.round(booksInCart.reduce((total, book) => total + (book.num ? book.num : 1) * book.price, 0) * 100) / 100).toFixed(2)}
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <a id="continueShoppingA" className="btn primary-text summary-btn col-6 col-sm-5 ml-3"
                                    onClick={() => history.push("/books")}>Continue
                                    shopping</a>
                                <div
                                    className="total flex-grow-1 d-xl-flex d-none justify-content-end align-items-center mr-3">
                                    <p className="m-0">
                                        Total: ${(Math.round(booksInCart.reduce((total, book) => total + (book.num ? book.num : 1)  * book.price, 0) * 100) / 100).toFixed(2)}
                                    </p>
                                </div>
                                <a id="purchase" className="btn primary-text summary-btn col-5 col-sm-6 ml-auto mr-3" onClick={handlePurchase}
                                   >Purchase</a>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <Footer />
            
        </div>
    );
}
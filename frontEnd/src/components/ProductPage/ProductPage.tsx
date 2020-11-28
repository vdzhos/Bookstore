import React, { useContext, useState} from "react";
import {useLocation} from "react-router-dom";
import { BookResponse } from "../../API/books";
import { CartContext } from "../CartContext/CartContext";
import Header from "../Header";
import Footer from "../Footer";
import "./styles.css"

export const ProductPage = () => {
    const location = useLocation<BookResponse>();
    const [booksInCart, setBooksInCart] = useContext(CartContext);
    const [addedToCart, setAddedToCart] = useState(!!booksInCart.find((o: { title: string; }) => o.title === location.state.title));
    console.log(location, "location");

    const handleAddToCart = () => {
        if (!addedToCart)
            setBooksInCart([...booksInCart, location.state]);
        else {
            setBooksInCart(booksInCart.filter((book: { title: string; }) => book.title !== location.state.title));
        }
        setAddedToCart(!addedToCart);
    }

    return (
        <div>
            <Header />
            <div className="main-body flex-grow-1 h-100">
                <div className="d-flex justify-content-center align-items-center">
                    <div className="row item-page-container my-4">
                        {/*Title */}
                        <div className="book-title-box px-4 py-4 justify-content-center align-items-center col-12 shadow">
                            <h1 className="book-title d-block m-0 px-3">{location.state.title}</h1>
                        </div>
                        {/*Image */}
                        <div className="d-flex main-content flex-nowrap col-12 justify-content-center">
                            <div className="d-flex mt-2 px-5 justify-content-center">
                                <img src={location.state.image} className="book-image" alt="Book in cart" />
                            </div>
                            {/*Author */}
                            <div className="book-props flex-grow-1">
                                <p className="sub-heading mb-2">Authors:</p>
                                <p><i>{location.state.authors[0]}</i></p>
                                <hr />
                                {/*Genres */}
                                <p className="sub-heading mb-2">Genres:</p>
                                <div className="d-flex flex-wrap genres">
                                    {location.state.genres.map(g => <p className="d-inline-block g-pill px-3 py-1 shadow-sm">{"#" + g}</p>)}
                                </div>
                                <hr />
                                <div className="d-flex row align-items-end px-3">
                                    <div className="d-flex flex-column">
                                        <p className="mb-1"><i className="fas fa-check"></i> In Stock</p>
                                        {/*Price */}
                                        <p className="d-inline-block m-0 ml-1 price">{location.state.price + "$"}</p>
                                    </div>
                                    {/*Add to cart */}
                                    <a id={!addedToCart ? "add-btn" : "added"} className={"btn add-to-cart primary-text ml-4 added"} onClick={handleAddToCart}>{!addedToCart ? "Add to Cart" : "Added to Cart"}</a>
                                </div>
                            </div>
                        </div>
                        <div className="description col-12 mb-5">
                            {/*Description */}
                            <hr />
                            <p className="sub-heading mb-2">Book Description: </p>
                            <p className="title"><i>{location.state.title}</i></p>
                            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores atque blanditiis dolore est expedita fugit harum id illum ipsum, magnam minus mollitia nulla numquam quaerat quibusdam, reprehenderit soluta voluptas voluptatem!
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur fugiat harum id magni modi, officia officiis quasi quidem quod repellendus reprehenderit rerum sint tempora temporibus tenetur veniam voluptatum! Corporis, mollitia!
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab asperiores culpa dolor dolores ea earum excepturi facilis, fugit illo in incidunt iste iure minima qui quibusdam, repellat sit soluta vero.
                    </div>
                        </div>
                        <hr />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
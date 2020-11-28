import Home from "./components/Home";
import Books from "./components/Books";
import Genres from "./components/Genres";
import Authors from "./components/Authors";
import ProductPage from "./components/ProductPage";
import CartPage from "./components/CartPage";
import SearchPage from "./components/SearchPage";
import Purchase from "./components/Purchase";

export const routerConfig = [
    {path: "/books", component: Books, exact: true},
    {path: "/books/:id", component: ProductPage, exact: false},
    {path: "/genres", component: Genres, exact: false},
    {path: "/genres/:id", component: Genres, exact: false},
    {path: "/authors", component: Authors, exact: false},
    {path: "/authors/:id", component: Authors, exact: false},
    {path: "/search/:id", component: SearchPage, exact: true},
    {path: "/cart", component: CartPage, exact: true},
    {path: "/purchase", component: Purchase, exact: true},
    {path: "/", component: Home, exact: true},
];

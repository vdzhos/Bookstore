import Home from "./components/Home";
import Books from "./components/Books";
import Authors from "./components/Authors";
import ProductPage from "./components/ProductPage";
import CartPage from "./components/CartPage";
import SearchPage from "./components/SearchPage";
import {AboutPage} from "./components/AboutPage/AboutPage";

export const routerConfig = [
    {path: "/books", component: Books, exact: true},
    {path: "/books/:id", component: ProductPage, exact: false},
    {path: "/authors", component: Authors, exact: false},
    {path: "/search/:id", component: SearchPage, exact: true},
    {path: "/cart", component: CartPage, exact: true},
    {path: "/about", component: AboutPage, exact: true},
    {path: "/", component: Home, exact: true},
];

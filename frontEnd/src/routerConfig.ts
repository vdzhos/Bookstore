import Home from "./components/Home";
import Books from "./components/Books";
import Genres from "./components/Genres";
import Authors from "./components/Authors";
import ProductPage from "./components/ProductPage";

export const routerConfig = [
  { path: "/books", component: Books, exact: true },
  { path: "/books/:id", component: ProductPage, exact: false },
  { path: "/genres", component: Genres, exact: false },
  { path: "/genres/:id", component: Genres, exact: false },
  { path: "/authors", component: Authors, exact: false },
  { path: "/authors/:id", component: Authors, exact: false },
  { path: "/", component: Home, exact: true },
];

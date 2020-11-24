import Home from "./components/Home";
import Books from "./components/Books";
import Categories from "./components/Categories";
import ProductPage from "./components/ProductPage";

export const routerConfig = [
  { path: "/books", component: Books, exact: true },
  { path: "/books/:id", component: ProductPage, exact: false },
  { path: "/genres", component: Categories, exact: false },
  { path: "/genres/:id", component: Categories, exact: false },
  { path: "/", component: Home, exact: true },
];

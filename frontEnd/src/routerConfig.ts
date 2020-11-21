import Home from "./components/Home";
import Books from "./components/Books";
import Categories from "./components/Categories";

export const routerConfig = [
  { path: "/books", component: Books, exact: false },
  { path: "/books/:id", component: Books, exact: false },
  { path: "/genres", component: Categories, exact: false },
  { path: "/genres/:id", component: Categories, exact: false },
  { path: "/", component: Home, exact: true },
];

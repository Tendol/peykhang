/* eslint-disable react/react-in-jsx-scope */
import "./App.css";
import Home from "./components/Home";
import { ApolloProvider } from "@apollo/client/react";
import client from "./lib/apollo";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import BooksPage from "./components/BooksPage";
import Navbar from "./components/Navbar";
import PeykhangFooter from "./components/PeykhangFooter";
import BookDetail from "./components/BookDetail";

export const breakpoint = 650;

const AppRoute = () => {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/books", element: <BooksPage /> },
    { path: "/books/:id", element: <BookDetail /> },
  ]);
  return routes;
};

function AppWrapper() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Navbar />
        <div style={{ minHeight: "calc(100vh - 150px)", width: "100%" }}>
          <AppRoute />
        </div>
        <PeykhangFooter />
      </Router>
    </ApolloProvider>
  );
}

export default AppWrapper;

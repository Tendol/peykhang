import "./App.css";
import Home from "./components/Home";
import { ApolloProvider } from "@apollo/client/react";
import client from "./lib/apollo";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import Books from "./components/Books";
import Navbar from "./components/Navbar";
import PeykhangFooter from "./components/PeykhangFooter";
import BookDetail from "./components/BookDetail";

const AppRoute = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/books", element: <Books /> },
    { path: "/books/:id", element: <BookDetail /> },
  ]);
  return routes;
};

function AppWrapper() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Navbar />
        <AppRoute />
        <PeykhangFooter />
      </Router>
    </ApolloProvider>
  );
}

export default AppWrapper;

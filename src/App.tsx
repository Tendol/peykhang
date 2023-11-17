import React from 'react';
import Home from './components/Home';
import { ApolloProvider } from '@apollo/client/react';
import client from './lib/apollo';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
// import Navbar from './components/Navbar';
import PeykhangFooter from './components/PeykhangFooter';
import BookPage from './components/BookPage';
import BookCardList from './components/BookCardList';
import TypingTestHome from './components/TibGames/TypingTest/Home';
import Navbar from './components/Navbar';
import BookCatalogPage from './components/BookCatalogPage';

export const breakpoint = 800;

const AppRoute = (): React.ReactElement<
  any,
  string | React.JSXElementConstructor<any>
> | null => {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/books', element: <BookCatalogPage /> },
    { path: '/books/:id', element: <BookPage /> },
    { path: '/books/tags/:tag', element: <BookCardList /> },
    { path: '/games/typingGame', element: <TypingTestHome /> },
    { path: '*', element: <Home /> },
  ]);
  return routes;
};

const AppWrapper: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Navbar imageSize={0.4} />
        <div style={{ minHeight: 'calc(100vh - 150px)', width: '100%' }}>
          <AppRoute />
        </div>
        <PeykhangFooter />
      </Router>
    </ApolloProvider>
  );
};

export default AppWrapper;

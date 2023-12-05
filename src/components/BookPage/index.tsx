import BookDetail from '../BookDetail';
import AuthorDetail from '../AuthorDetail';
import React from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { Card, Skeleton, message } from 'antd';
import BookCardList from '../BookCardList';
import { GET_BOOK } from '../../graphql/hooks/GetBook';

const BookPage = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_BOOK, {
    variables: {
      id,
    },
  });

  if (error != null) {
    void message.error(
      'There is an issue loading the book. We will fix it as soon as possible',
    );
  }

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {loading ? (
        <Skeleton />
      ) : (
        <>
          <BookDetail book={data?.book} />
          <AuthorDetail authors={data?.book?.authors} />
          <Card
            bordered={false}
            bodyStyle={{
              paddingLeft: '10vh',
              paddingRight: '10vh',
            }}
          >
            <BookCardList bordered={false} title="Other books by the author" />
          </Card>
        </>
      )}
    </>
  );
};

export default BookPage;

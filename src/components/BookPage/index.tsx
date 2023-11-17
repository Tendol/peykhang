import BookDetail from '../BookDetail';
import AuthorDetail from '../AuthorDetail';
import React from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { GET_BOOK } from '../../graphql/hooks/getBook';
import { Skeleton, message } from 'antd';

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

  return (
    <>
      {loading ? (
        <Skeleton />
      ) : (
        <>
          <BookDetail book={data?.book} />
          <AuthorDetail />
        </>
      )}
    </>
  );
};

export default BookPage;

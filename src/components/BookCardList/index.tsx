import { Space, Skeleton, message, Typography, Card } from 'antd';
import { useQuery } from '@apollo/client';
import { GET_BOOKS } from '../../../../peykhang/src/graphql/hooks/getBooks';
import BookCard from '../BookCard';
import { useNavigate, useParams } from 'react-router-dom';
import React from 'react';
// import { Book } from 'peykhang/gql/graphql';
import { upperFirst, lowerCase } from 'lodash';
import { type Book } from '../../gql/graphql';

export interface BooksData {
  books: [Book];
}
const BookCardList: React.FC = () => {
  const { loading, error, data } = useQuery<BooksData>(GET_BOOKS);
  const navigate = useNavigate();
  const { tag } = useParams();

  console.log({ tag });

  if (error != null) {
    void message.error(
      'There is an issue loading the book list. We will fix it as soon as possible',
    );
  }
  const handleBookSelect = (id: string | null | undefined): void => {
    navigate(`/books/${id}`);
  };
  return (
    <>
      {loading ? (
        <Skeleton />
      ) : (
        <Card style={{ width: '100%' }}>
          {!tag ? (
            <Typography.Title> Latest addition to peykhang </Typography.Title>
          ) : (
            <Typography.Title>
              {' '}
              {`${upperFirst(lowerCase(tag))} books`}{' '}
            </Typography.Title>
          )}
          <Space wrap size="large">
            {data?.books?.map((item: Book) => (
              // eslint-disable-next-line react/jsx-key
              <BookCard book={item} handleBookSelect={handleBookSelect} />
            ))}
          </Space>
        </Card>
      )}
    </>
  );
};

export default BookCardList;

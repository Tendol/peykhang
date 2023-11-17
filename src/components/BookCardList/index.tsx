import { Space, Skeleton, message, Typography, Card } from 'antd';
import { useQuery } from '@apollo/client';
import { GET_BOOKS } from '../../graphql/hooks/getBooks';
import BookCard from '../BookCard';
import { useNavigate, useParams } from 'react-router-dom';
import React from 'react';
// import { Book } from 'peykhang/gql/graphql';
import { upperFirst, lowerCase } from 'lodash';
import { BookNode, type Book } from '../../gql/graphql';
import { Property } from 'csstype';

export interface BooksData {
  books: {
    edges: [{ node: Book }];
  };
}

interface BookCardListProp {
  styles?: {
    width?: string;
    textAlign?: Property.TextAlign;
    backgroundColor?: string;
    marginTop?: string;
  };
  bordered?: boolean;
  title?: string;
}
const BookCardList = ({ styles, title, bordered = true }: BookCardListProp) => {
  const { loading, error, data } = useQuery<BooksData>(GET_BOOKS);
  const navigate = useNavigate();
  const { tag } = useParams();

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
        <Card
          bordered={false}
          style={{
            width: styles?.width ?? '100%',
            textAlign: styles?.textAlign,
            backgroundColor: styles?.backgroundColor,
            marginTop: styles?.marginTop,
          }}
        >
          {!tag ? (
            <Typography.Title> {title}</Typography.Title>
          ) : (
            <Typography.Title>
              {`${upperFirst(lowerCase(tag))} books`}
            </Typography.Title>
          )}
          <Space wrap size="large">
            {data?.books?.edges?.map(({ node }: BookNode) => (
              // eslint-disable-next-line react/jsx-key
              <BookCard book={node} handleBookSelect={handleBookSelect} />
            ))}
          </Space>
        </Card>
      )}
    </>
  );
};

export default BookCardList;

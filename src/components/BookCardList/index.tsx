import { Space, Skeleton, message } from "antd";
import { useQuery } from "@apollo/client";
import { GET_BOOKS } from "../../graphql/hooks/getBooks";
import BookCard from "../BookCard";
import { useNavigate } from "react-router-dom";
import React from "react";
import { BookNode, Books } from "peykhang/gql/graphql";

export interface BooksData {
  books: Books;
}
const BookCardList: React.FC = () => {
  const { loading, error, data } = useQuery<BooksData>(GET_BOOKS);
  const navigate = useNavigate();

  if (error) {
    message.error(
      "There is an issue loading the book list. We will fix it as soon as possible"
    );
  }
  const handleBookSelect = (id: string) => {
    navigate(`books/${id}`);
  };
  return (
    <>
      {loading ? (
        <Skeleton />
      ) : (
        <Space wrap size="large">
          {data &&
            data.books.nodes.map((item: BookNode) => (
              // eslint-disable-next-line react/jsx-key
              <BookCard book={item} handleBookSelect={handleBookSelect} />
            ))}
        </Space>
      )}
    </>
  );
};

export default BookCardList;

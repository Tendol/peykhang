import { Space, Skeleton, message } from "antd";

import { useQuery } from "@apollo/client";
import { GET_BOOKS } from "../../graphql/hooks/getBooks";
import BookCard from "../BookCard";
import { useNavigate } from "react-router-dom";

const gridStyle: React.CSSProperties = {
  width: "5%",
  textAlign: "center",
};

const BookCardList: React.FC = () => {
  const { loading, error, data } = useQuery(GET_BOOKS);
  const navigate = useNavigate();

  if (error) {
    message.error(
      "There is an issue loading the book list. We will fix it as soon as possible"
    );
  }
  const handleBookSelect = (id: string) => {
    console.log("something");
    navigate(`books/${id}`);
  };
  return (
    <>
      {loading ? (
        <Skeleton />
      ) : (
        <Space wrap size="large">
          {data &&
            data.books.nodes.map((item: any) => (
              <BookCard book={item} handleBookSelect={handleBookSelect} />
            ))}
          {data &&
            data.books.nodes.map((item: any) => (
              <BookCard book={item} handleBookSelect={handleBookSelect} />
            ))}
        </Space>
      )}
    </>
  );
};

export default BookCardList;

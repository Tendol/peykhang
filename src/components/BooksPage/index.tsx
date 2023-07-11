/* eslint-disable react/react-in-jsx-scope */
import { useQuery } from "@apollo/client";
import { GET_BOOKS } from "../../graphql/hooks/getBooks";

const BooksPage = () => {
  const { loading, error, data } = useQuery(GET_BOOKS);

  console.log({ loading, error, data });
  return <div>Tashi Delek</div>;
};

export default BooksPage;

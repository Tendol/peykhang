/* eslint-disable react/jsx-key */
/* eslint-disable react/react-in-jsx-scope */
import { useQuery } from "@apollo/client";
import { GET_BOOKS } from "../../graphql/hooks/getBooks";
import { BooksData } from "../BookCardList";
import { Card, Image, Space } from "antd";
const { Meta } = Card;

const MINI_BOOK_COVER_SIZE = 100;
const BooksPage = () => {
  const { loading, error, data } = useQuery<BooksData>(GET_BOOKS);

  console.log({ loading, error, data });
  return (
    <Space wrap size="large" style={{ paddingLeft: "2%", paddingRight: "2%" }}>
      {[1, 2, 3, 4, 5].map((i) => (
        <>
          <Card hoverable>
            <Space wrap>
              {data?.books?.nodes.map((book) => (
                <Image
                  loading="eager"
                  width={MINI_BOOK_COVER_SIZE}
                  src={book?.featuredImage?.node?.sourceUrl}
                />
              ))}
            </Space>
            <Meta
              title="Fiction"
              description={`${data?.books?.nodes.length} books`}
              style={{ paddingTop: "10px" }}
            />
          </Card>
          <Card hoverable>
            <Space direction="horizontal" wrap>
              {data?.books?.nodes.map((book) => (
                <Image
                  loading="eager"
                  width={MINI_BOOK_COVER_SIZE}
                  src={book?.featuredImage?.node?.sourceUrl}
                />
              ))}
            </Space>
            <Meta
              title="Tibetan authors"
              description={`${data?.books?.nodes.length} books`}
              style={{ paddingTop: "10px" }}
            />
          </Card>
        </>
      ))}
    </Space>
  );
};

export default BooksPage;

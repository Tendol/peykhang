/* eslint-disable react/jsx-key */
/* eslint-disable react/react-in-jsx-scope */
import { useQuery } from '@apollo/client';
import { GET_BOOKS } from '../../../../peykhang/src/graphql/hooks/getBooks';
// import { BooksData } from '../BookCardList';
import { Card, Skeleton, Space, Typography, message } from 'antd';
// import { useNavigate } from 'react-router-dom';
import FilterTools from '../FilterTools';
import { breakpoint } from '../../../../peykhang/src/App';

import './BooksPage.css';
const { Meta } = Card;

// const MINI_BOOK_COVER_SIZE = 100;
const BooksPage: React.FC = () => {
  const { loading, error, data } = useQuery(GET_BOOKS);
  // const navigate = useNavigate();

  // const handleShowBooksList = (tag): void => {
  //   navigate(`/books/tags/${tag}`);
  // };

  // const handleBookSelect = (id): void => {
  //   navigate(`/books/${id}`);
  // };

  if (error != null) {
    void message.error(
      'There is an issue loading the book list. We will fix it as soon as possible',
    );
  }

  return (
    <>
      {loading ? (
        <Skeleton />
      ) : (
        <Card>
          <Space direction="vertical" style={{ display: 'inline' }} wrap>
            <Typography.Title
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-expect-error
              style={{ float: window.innerWidth > breakpoint ? 'left' : null }}
            >
              Book catelog
            </Typography.Title>
            <div
              style={{
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                float: window.innerWidth > breakpoint ? 'right' : null,
                paddingTop: `2%`,
              }}
            >
              <FilterTools />
            </div>
          </Space>

          <Space wrap size="large">
            {[1, 2, 3, 4, 5].map(() => (
              <>
                <Card hoverable>
                  <Space wrap>
                    {/* {data?.bookss.map((book) => (
                      <Image
                        loading="eager"
                        width={MINI_BOOK_COVER_SIZE}
                        src={book?.featuredImage?.node?.sourceUrl}
                        preview={false}
                        onClick={() => handleBookSelect(book?.id)}
                        className="book_cover"
                      />
                    ))} */}
                  </Space>
                  {/* <div onClick={() => handleShowBooksList("fiction")}> */}
                  <Meta
                    title="Fiction"
                    description={`${data?.books?.length} books`}
                    style={{ paddingTop: '10px' }}
                  />
                  {/* </div> */}
                </Card>
                <Card hoverable>
                  <Space direction="horizontal" wrap>
                    {/* {data?.bookss.map((book) => (
                      <Image
                        loading="eager"
                        width={MINI_BOOK_COVER_SIZE}
                        src={book?.featuredImage?.node?.sourceUrl}
                        preview={false}
                        onClick={() => handleBookSelect(book?.id)}
                      />
                    ))} */}
                  </Space>
                  {/* <div onClick={() => handleShowBooksList("tibetan_author")}> */}
                  <Meta
                    title="Tibetan author"
                    description={`${data?.books?.length} books`}
                    style={{ paddingTop: '10px' }}
                  />
                  {/* </div> */}
                </Card>
              </>
            ))}
          </Space>
        </Card>
      )}
    </>
  );
};

export default BooksPage;

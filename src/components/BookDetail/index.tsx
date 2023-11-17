/* eslint-disable react/react-in-jsx-scope */
import { Space, Typography, Image, Descriptions, Card } from 'antd';
import { capitalize } from 'lodash';
import { breakpoint } from '../../App';
import BookCover from '../../assets/we measure the earth with our bodies.jpeg';
import { GlobalOutlined } from '@ant-design/icons';
import './BookDetail.css';
import Barcode from 'react-barcode';
import { Book } from '../../gql/graphql';

const LABEL_STYLE = {
  fontWeight: 'bold',
  color: 'black',
  fontSize: '20px',
  content: '',
};
const CONTENT_STYLE = {
  color: 'black',
  fontSize: '20px',
};

interface BookDetailProps {
  book: Book;
}
const BookDetail = ({ book }: BookDetailProps) => {
  return (
    <>
      <Card
        bordered={false}
        bodyStyle={{
          paddingLeft: '10vh',
          paddingRight: '10vh',
        }}
        style={{
          marginTop: '10vh',
          boxShadow: 'None',
          width: '100%',
        }}
      >
        <Space
          direction="horizontal"
          wrap={window.innerWidth <= breakpoint}
          align="start"
          size={50}
        >
          <Image
            loading="eager"
            width={window.innerWidth <= breakpoint ? 200 : 300}
            src={book?.bookCoverUrl ?? BookCover}
          />
          <Space direction="vertical">
            <Typography.Title> {book.title} </Typography.Title>
            <Typography.Text style={{ fontSize: '16px' }}>
              {book.summary}
            </Typography.Text>
            <br />
            <Descriptions
              layout="vertical"
              column={4}
              contentStyle={{ color: 'black' }}
            >
              {book?.publisher && (
                <Descriptions.Item
                  label="Published by :"
                  labelStyle={LABEL_STYLE}
                  contentStyle={CONTENT_STYLE}
                >
                  {capitalize(book?.publisher?.name ?? '')}
                </Descriptions.Item>
              )}
              {book?.publicationDate && (
                <Descriptions.Item
                  label="Publication date :"
                  labelStyle={LABEL_STYLE}
                  contentStyle={CONTENT_STYLE}
                >
                  {capitalize(book?.publicationDate)}
                </Descriptions.Item>
              )}
              {book?.language && (
                <Descriptions.Item
                  label={<GlobalOutlined style={{ fontSize: '40px' }} />}
                  labelStyle={{
                    display: 'inline-flex',
                    flexDirection: 'row-reverse',
                    color: 'black',
                  }}
                  contentStyle={CONTENT_STYLE}
                >
                  {capitalize(book?.language)}
                </Descriptions.Item>
              )}
              {book?.isbn && (
                <Descriptions.Item
                  label={`ISBN - ${book?.isbn}`}
                  labelStyle={LABEL_STYLE}
                  contentStyle={CONTENT_STYLE}
                >
                  <Barcode
                    value={book?.isbn}
                    displayValue={false}
                    height={50}
                  />
                </Descriptions.Item>
              )}
            </Descriptions>
          </Space>
        </Space>
      </Card>
    </>
  );
};

export default BookDetail;

/* eslint-disable react/react-in-jsx-scope */
import {
  Space,
  Typography,
  // Image,
  message,
  Skeleton,
  // Descriptions,
  Card,
} from 'antd';
import { useQuery } from '@apollo/client';
import { GET_BOOK } from '../../graphql/hooks/getBook';
import { useParams } from 'react-router-dom';
// import { capitalize } from 'lodash';
import { breakpoint } from '../../App';

// const LABEL_STYLE = {
//   fontWeight: 'bold',
//   color: 'black',
//   fontSize: '20px',
// };
// const CONTENT_STYLE = {
//   color: 'black',
//   fontSize: '20px',
// };
const BookDetail: React.FC = () => {
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
        <Card bordered={false}>
          <Typography.Title>{data?.book?.title}</Typography.Title>
          <Space
            direction="horizontal"
            wrap={window.innerWidth <= breakpoint}
            align="start"
          >
            {/* <Image
              loading="eager"
              width={window.innerWidth <= breakpoint ? 200 : 300}
              src={data?.book?.featuredImage?.node?.sourceUrl}
            /> */}
            <Space direction="vertical" style={{ margin: '10px' }}>
              <Typography.Text style={{ fontSize: '20px' }}>
                {data.book.summary}
              </Typography.Text>
              {/* <Descriptions column={{ lg: 1, md: 1, sm: 1, xs: 1 }}>
                {data?.book?.bookMetaData?.author && (
                  <Descriptions.Item
                    label="Author"
                    labelStyle={LABEL_STYLE}
                    contentStyle={CONTENT_STYLE}
                  >
                    {capitalize(data?.book?.bookMetaData?.author)}
                  </Descriptions.Item>
                )}
                {data?.book?.bookMetaData?.publisher && (
                  <Descriptions.Item
                    label="Publisher"
                    labelStyle={LABEL_STYLE}
                    contentStyle={CONTENT_STYLE}
                  >
                    {capitalize(data?.book?.bookMetaData?.publisher)}
                  </Descriptions.Item>
                )}
                {data?.book?.bookMetaData?.publicationDate && (
                  <Descriptions.Item
                    label="Publication date"
                    labelStyle={LABEL_STYLE}
                    contentStyle={CONTENT_STYLE}
                  >
                    {capitalize(data?.book?.bookMetaData?.publicationDate)}
                  </Descriptions.Item>
                )}
                {data?.book?.bookMetaData?.isbn && (
                  <Descriptions.Item
                    label="ISBN"
                    labelStyle={LABEL_STYLE}
                    contentStyle={CONTENT_STYLE}
                  >
                    {capitalize(data?.book?.bookMetaData?.isbn)}
                  </Descriptions.Item>
                )}
              </Descriptions> */}
            </Space>
          </Space>
        </Card>
      )}
    </>
  );
};

export default BookDetail;

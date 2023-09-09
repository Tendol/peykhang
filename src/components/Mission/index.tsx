/* eslint-disable react/react-in-jsx-scope */
import { Card, Space, Typography, Image } from 'antd';
import books from '../../assets/books.avif';
import { breakpoint } from '../../App';

const Mission: React.FC = () => {
  return (
    <>
      <Card
        style={{
          paddingLeft: '6%',
          paddingRight: '10%',
          backgroundColor: '#F5FBFF',
        }}
      >
        <Space direction="horizontal" wrap={window.innerWidth <= breakpoint}>
          <Image
            width={window.innerWidth <= breakpoint ? 200 : 300}
            src={books}
          />
          <Space
            style={{
              textAlign: 'center',
            }}
          >
            <Typography.Text style={{ fontSize: '20px' }}>
              Peykhang is a one stop all for any individual interested in
              Tibetan literacy. Every time I wanted to read a book either
              written by a Tibetan author or pertaining to Tibet I needed to
              scourge the internet to find any good recommendations. Peykhang is
              a space for any Tibetans or Tibet enthusiasts to explore and learn
              about Tibet. You will find book recommendations ranging from
              fiction to non-fiction, and Buddhism to Science, written by
              Tibetan and non-Tibetan authors.
            </Typography.Text>
          </Space>
        </Space>
      </Card>
    </>
  );
};

export default Mission;

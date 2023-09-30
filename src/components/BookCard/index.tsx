/* eslint-disable react/react-in-jsx-scope */
import { Card } from 'antd';
import Meta from 'antd/es/card/Meta';
import { Book, Maybe } from '../../gql/graphql';

interface BookCardProps {
  book?: Maybe<Book> | undefined;
  handleBookSelect: (id: string | null | undefined) => void;
}
const BookCard: React.FC<BookCardProps> = ({
  book,
  handleBookSelect,
}: BookCardProps) => {
  return (
    <Card
      hoverable
      style={{ width: '150px' }}
      onClick={() => {
        handleBookSelect(book?.id);
      }}
      // cover={
      //   <img
      //     alt={book?.title}
      //     style={{ width: "150px" }}
      //     src={book?.featuredImage?.node?.sourceUrl}
      //   />
      // }
    >
      <Meta
        description={book?.title}
        style={{ fontSize: '13px', fontWeight: 'bold', color: 'black' }}
      />
    </Card>
  );
};

export default BookCard;

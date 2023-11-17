/* eslint-disable react/react-in-jsx-scope */
import { Book, Maybe } from '../../gql/graphql';
import BookCover from '../../assets/we measure the earth with our bodies.jpeg';
import { Image } from 'antd';

interface BookCardProps {
  book?: Maybe<Book> | undefined;
  handleBookSelect: (id: string | null | undefined) => void;
}
const BookCard: React.FC<BookCardProps> = ({
  book,
  handleBookSelect,
}: BookCardProps) => {
  return (
    <Image
      width={150}
      src={book?.bookCoverUrl ?? BookCover}
      onClick={() => {
        handleBookSelect(book?.id);
      }}
    />
  );
};

export default BookCard;

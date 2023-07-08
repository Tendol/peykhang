import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import { BookNode } from "peykhang/gql/graphql";

type BookCardProps = {
  book: BookNode;
  handleBookSelect: (id: string) => void;
};
const BookCard: React.FC<BookCardProps> = ({
  book,
  handleBookSelect,
}: BookCardProps) => {
  console.log({ book });
  return (
    <Card
      hoverable
      style={{ width: "150px" }}
      onClick={() => handleBookSelect(book?.id)}
      cover={
        <img alt={book?.title} src={book?.featuredImage?.node?.sourceUrl} />
      }
    >
      <Meta
        description={book?.title}
        style={{ fontSize: "13px", fontWeight: "bold", color: "black" }}
      />
    </Card>
  );
};

export default BookCard;

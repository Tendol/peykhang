import { Card, Typography } from "antd";
import BookCardList from "../BookCardList";

const LatestAdditionBooks = () => {
  return (
    <>
      <Card style={{ width: "100%" }}>
        <Typography.Title style={{ textAlign: "center" }}>
          Latest addition to Peykhang
        </Typography.Title>
        <br />
        <BookCardList />
      </Card>
    </>
  );
};

export default LatestAdditionBooks;

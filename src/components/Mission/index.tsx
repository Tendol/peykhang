import { Card, Space, Typography, Image } from "antd";
import books from "../../assets/images/books.avif";

const Mission = () => {
  return (
    <>
      <Card
        style={{
          paddingLeft: "6%",
          paddingRight: "20%",
          backgroundColor: "#F5FBFF",
        }}
      >
        <Space direction="horizontal">
          <Image width={300} src={books} />
          <Space
            style={{
              marginLeft: "20%",
              textAlign: "center",
            }}
          >
            <Typography.Text style={{ fontSize: "20px" }}>
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

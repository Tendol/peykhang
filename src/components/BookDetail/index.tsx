import { Space, Typography, Image, message, Skeleton } from "antd";
import seven_years_in_tibet from "../../assets/images/seven_years_in_tibet.jpg";
import { useQuery } from "@apollo/client";
import { GET_BOOK } from "../../graphql/hooks/getBook";
import { useParams } from "react-router-dom";
const BookDetail = () => {
  const { id } = useParams();
  console.log({ id });
  const { loading, error, data } = useQuery(GET_BOOK, {
    variables: {
      id,
    },
  });

  if (error) {
    message.error(
      "There is an issue loading the book. We will fix it as soon as possible"
    );
  }

  return (
    <>
      {loading ? (
        <Skeleton />
      ) : (
        <Space direction="horizontal">
          <Image loading="eager" width={300} src={seven_years_in_tibet} />
          <Space
            style={{
              marginLeft: "20%",
            }}
          >
            <Typography.Text style={{ fontSize: "20px" }}>
              {
                <div
                  dangerouslySetInnerHTML={{ __html: data?.book?.excerpt }}
                />
              }
            </Typography.Text>
          </Space>
        </Space>
      )}
    </>
  );
};

export default BookDetail;

import React from "react";
import { useQuery } from "@apollo/client";
import { GET_BOOKS } from "../../graphql/hooks/getBooks";
import Mission from "../Mission";
import LatestAdditionBooks from "../LatestAdditionBooks";

const Home = () => {
  console.log("hey");
  const { loading, error, data } = useQuery(GET_BOOKS);

  if (loading) {
    console.log("loading");
  }
  // React.useEffect(() => {
  //     axios.get((URL)).then((res) => setData(res.data))
  // }, [])
  return (
    <>
      {/* <h1> Peykhang</h1>
    {data && data.books.nodes.map((item: any) => <p key={item.id}> {item.content}</p>)} */}
      <Mission />
      <LatestAdditionBooks />
    </>
  );
};

export default Home;

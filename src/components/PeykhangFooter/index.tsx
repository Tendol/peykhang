/* eslint-disable react/react-in-jsx-scope */
import { HeartFilled } from "@ant-design/icons";
import { Typography } from "antd";
import { Footer } from "antd/es/layout/layout";

const PeykhangFooter = () => {
  return (
    <Footer
      style={{
        textAlign: "center",
        position: "relative",
        left: 0,
        bottom: 0,
        right: 0,
      }}
    >
      <Typography.Text>Made with </Typography.Text>
      <HeartFilled style={{ color: "red" }} />
      <br />
      <Typography.Text>by Peykhang team</Typography.Text>
    </Footer>
  );
};

export default PeykhangFooter;

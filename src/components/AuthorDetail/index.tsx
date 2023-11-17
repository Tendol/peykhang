import { Card, Space, Image, Typography } from 'antd';
import { breakpoint } from '../../App';
import React from 'react';
import BookCover from '../../assets/we measure the earth with our bodies.jpeg';

const AuthorDetail = () => {
  return (
    <Card
      bordered={false}
      bodyStyle={{
        paddingLeft: '10vh',
        paddingRight: '10vh',
      }}
      style={{
        marginTop: '10vh',
        boxShadow: 'None',
        width: '100%',
      }}
    >
      <Space
        direction="horizontal"
        wrap={window.innerWidth <= breakpoint}
        align="start"
        size={50}
      >
        <Space direction="vertical">
          <Typography.Title> Authors</Typography.Title>

          <Image
            loading="eager"
            width={window.innerWidth <= breakpoint ? 120 : 170}
            src={BookCover}
          />
        </Space>
        <Space direction="vertical">
          {/* <Typography.Title> {book.title} </Typography.Title>
          <Typography.Text style={{ fontSize: '16px' }}>
            {book.summary}
          </Typography.Text> */}
        </Space>
      </Space>
    </Card>
  );
};

export default AuthorDetail;

import { Card, Space, Image, Typography, Col, Row, Divider } from 'antd';
import { breakpoint } from '../../App';
import React from 'react';
import BookCover from '../../assets/we measure the earth with our bodies.jpeg';
import { AuthorConnection, AuthorNode, Maybe } from '../../gql/graphql';

interface AuthorDetailProps {
  authors: AuthorConnection;
}

const AuthorDetail = ({ authors }: AuthorDetailProps) => {
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
      <Typography.Title> Authors </Typography.Title>
      <Space direction="vertical" style={{ width: '100%' }}>
        {authors?.edges?.map((author: Maybe<AuthorNode>) => (
          // eslint-disable-next-line react/jsx-key
          <>
            <Row style={{ width: '100%' }} key={author?.node?.id}>
              <Col xs={24} sm={4} md={6} lg={8} xl={8}>
                <Image
                  loading="eager"
                  width={window.innerWidth <= breakpoint ? 100 : 170}
                  src={author?.node?.authorImageUrl ?? BookCover}
                />
              </Col>
              <Col xs={24} sm={20} md={18} lg={16} xl={16}>
                <Space direction="vertical">
                  <Typography.Title>
                    {`${author?.node?.firstName} ${author?.node?.lastName}`}
                  </Typography.Title>
                  <Typography.Text>{author?.node?.summary}</Typography.Text>
                </Space>
              </Col>
            </Row>
            <Divider />
          </>
        ))}
      </Space>
    </Card>
  );
};

export default AuthorDetail;

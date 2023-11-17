import React from 'react';
import './ImageCover.css';
import background from '../../assets/background.jpeg';
import { Card, Image, Typography } from 'antd';

const ImageCover = () => {
  return (
    <>
      <article className="article">
        <picture className="image" style={{ width: '100%' }}>
          <Image
            width="100%"
            height="40vh"
            className="image"
            src={background}
            alt="background"
          />
        </picture>
        <Card
          className="image-text"
          style={{ width: '100%', textAlign: 'center' }}
        >
          <Typography.Title
            level={4}
            style={{
              color: 'white',
              background: '#00000026',
              width: '50%',
              display: 'inline-block',
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Typography.Title>
        </Card>
      </article>
    </>
  );
};
export default ImageCover;

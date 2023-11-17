/* eslint-disable react/react-in-jsx-scope */
import { Menu, Typography } from 'antd';
import { Header } from 'antd/es/layout/layout';
import { Link, useNavigate } from 'react-router-dom';
import React from 'react';
import './Navbar.css';

interface NavbarProps {
  imageSize: number;
}

const Navbar = ({ imageSize }: NavbarProps) => {
  const navigate = useNavigate();

  const [changeColor, setChangeColor] = React.useState(false);

  const listenScrollEvent = () => {
    if (window.scrollY < window.innerHeight * imageSize) {
      setChangeColor(false);
    } else if (window.scrollY > window.innerHeight * imageSize - 1) {
      setChangeColor(true);
    }
  };

  React.useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);

    return () => {
      window.removeEventListener('scroll', listenScrollEvent);
    };
  }, []);

  return (
    <Header
      className="header"
      style={{
        alignItems: 'center',
        overflow: 'hidden',
        width: '100%',
        backgroundColor: changeColor ? '#997965' : undefined,
      }}
    >
      <div
        style={{
          color: 'white',
          float: 'left',
          fontSize: '40px',
          fontWeight: 'bold',
          cursor: 'pointer',
        }}
        onClick={() => {
          navigate('/');
        }}
      >
        Peykhang
      </div>

      <Menu
        theme="dark"
        mode="horizontal"
        style={{
          // marginLeft: 'auto',
          display: 'block',
          // flexFlow: 'wrap',
          // alignItems: 'center',
        }}
      >
        <Menu.Item key="books" style={{ float: 'right' }}>
          <Typography.Text style={{ color: 'white', fontSize: '29px' }}>
            Books
          </Typography.Text>
          <Link to="/books" />
        </Menu.Item>
      </Menu>
    </Header>
  );
};
export default Navbar;

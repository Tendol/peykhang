/* eslint-disable react/react-in-jsx-scope */
import { Menu, Space, Typography } from 'antd';
import { Header } from 'antd/es/layout/layout';
import { Link, useNavigate } from 'react-router-dom';

import './Navbar.css';

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Header
      className="header"
      style={{
        alignItems: 'center',
        overflow: 'hidden',
        width: '100%',
      }}
    >
      <div
        style={{
          color: 'white',
          float: 'left',
          fontSize: '20px',
          fontWeight: 'bold',
          cursor: 'pointer',
        }}
        onClick={() => {
          navigate('/');
        }}
      >
        Peykhang
      </div>

      <Space
        size={16}
        style={{ float: 'right', flexFlow: 'wrap', alignItems: 'center' }}
      >
        <Menu theme="dark" mode="horizontal">
          <Menu.Item key="books">
            <Typography.Text style={{ color: 'white' }}>Books</Typography.Text>
            <Link to="/books" />
          </Menu.Item>
        </Menu>
      </Space>
    </Header>
  );
};
export default Navbar;

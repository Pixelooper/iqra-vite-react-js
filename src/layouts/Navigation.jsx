import { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import { HomeOutlined, AntDesignOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';

const items = [
  {
    label: (
        <Link to='/'>
            Home
        </Link>
    ),
    key: '/',
    icon: <HomeOutlined />,
  },
  {
    label: (
        <Link to='/app'>
            Inventory
        </Link>
    ),
    key: '/app',
    icon: <AntDesignOutlined />,
  },
  {
    label: 'Packages',
    key: '/pricing',
    icon: <SettingOutlined />,
    children: [
        {
          label: 'Standard',
          key: 'setting:1',
        },
        {
          label: 'Moderate',
          key: 'setting:2',
        },
    ],
  },
  {
    label: 'Contact',
    key: '/contact',
    icon: <MailOutlined />,
    disabled: true,
  },
];

const Navigation = ({ path }) => {
    const [current, setCurrent] = useState(path);
    const onClick = (e) => {
      setCurrent(e.key);
    };

    return (
        <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
    );
};


Navigation.propTypes = {
    path: PropTypes.string.isRequired,
};

export default Navigation;
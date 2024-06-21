import React from 'react';

import { UserOutlined } from '@ant-design/icons';
import getColorFromUserName from '@layout/top-bar/module/getColorFromUserName';
import { Avatar, AvatarProps } from 'antd';

interface IProps extends AvatarProps {
  name: string;
}

const UserAvatar: React.FC<IProps> = ({ name, ...props }) => {
  const iconProps = name ? {} : { icon: <UserOutlined /> };
  const label = name?.slice(-2);
  const color = getColorFromUserName(name);

  return (
    <Avatar {...props} {...iconProps} style={{ backgroundColor: color, ...props.style }}>
      {label}
    </Avatar>
  );
};

export default UserAvatar;

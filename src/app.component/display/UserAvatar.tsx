import React from 'react';

import getColorFromUserName from '@layout/top-bar/module/getColorFromUserName';
import { Avatar, AvatarProps } from 'antd';

interface IProps extends AvatarProps {
  profileImageUrl?: string;
  name?: string;
}

const UserAvatar: React.FC<IProps> = ({ name, profileImageUrl, ...props }) => {
  if (profileImageUrl) {
    return <Avatar src={profileImageUrl} />;
  }

  const label = name?.slice(-2) ?? '?';
  const color = getColorFromUserName(name);

  return (
    <Avatar {...props} style={{ backgroundColor: color, ...props.style }}>
      {label}
    </Avatar>
  );
};

export default UserAvatar;

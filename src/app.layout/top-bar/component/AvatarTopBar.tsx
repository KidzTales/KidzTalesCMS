'use client';
import React from 'react';

import { UserOutlined } from '@ant-design/icons';
import useGetAdmin from '@hook/useGetAdmin';
import { useTopBarStatus } from '@layout/top-bar/component/TopBarContextProvider';
import AdminMenuTopBar from '@layout/top-bar/component/AdminMenuTopBar';
import getColorFromUserName from '@layout/top-bar/module/getColorFromUserName';
import { Avatar, Popover } from 'antd';

const AvatarTopBar: React.FC = () => {
  const admin = useGetAdmin();
  const { tourOpen, userMenuOpen, handleUserMenuOpenChange, popoverTrigger } = useTopBarStatus();
  const iconProps = admin?.nickName ? {} : { icon: <UserOutlined /> };
  const label = admin?.nickName?.slice(-2);
  const color = getColorFromUserName(admin?.nickName ?? '');

  return (
    <li>
      <Popover
        trigger={[popoverTrigger]}
        placement="bottomRight"
        content={<AdminMenuTopBar admin={admin} />}
        open={userMenuOpen}
        onOpenChange={!tourOpen ? handleUserMenuOpenChange : () => {}}
        zIndex={1000}
      >
        <Avatar {...iconProps} style={{ backgroundColor: color }}>
          {label}
        </Avatar>
      </Popover>
    </li>
  );
};

export default AvatarTopBar;

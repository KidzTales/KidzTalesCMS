'use client';
import React from 'react';
import useGetAdmin from '@hook/useGetAdmin';
import { useTopBarStatus } from '@layout/top-bar/component/TopBarContextProvider';
import AdminMenuTopBar from '@layout/top-bar/component/AdminMenuTopBar';
import getColorFromUserName from '@layout/top-bar/module/getColorFromUserName';
import { Avatar, Popover } from 'antd';

const AvatarTopBar: React.FC = () => {
  const admin = useGetAdmin();
  const { tourOpen, userMenuOpen, handleUserMenuOpenChange, popoverTrigger } = useTopBarStatus();
  const iconProps = admin?.profileImageUrl
    ? { src: admin?.profileImageUrl }
    : {
        children: admin?.nickName?.slice(-2),
        style: { backgroundColor: getColorFromUserName(admin?.nickName ?? '') },
      };

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
        <Avatar {...iconProps} size={44} />
      </Popover>
    </li>
  );
};

export default AvatarTopBar;

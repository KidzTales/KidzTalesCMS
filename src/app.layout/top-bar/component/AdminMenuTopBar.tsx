import React from 'react';

import { SyncOutlined, UnlockOutlined } from '@ant-design/icons';
import UserAvatar from '@component/display/UserAvatar';
import { IAdmin } from '@interface/IAdmin';
import { useTopBarStatus } from '@layout/top-bar/component/TopBarContextProvider';
import { TOP_BAR_ENUM } from '@layout/top-bar/constant/topBarEnum';
import useAdminMenuUtil from '@layout/top-bar/hook/useAdminMenuUtil';
import { Button, Divider } from 'antd';
import Link from 'next/link';

export interface IProps {
  admin: IAdmin;
}

const AdminMenuTopBar: React.FC<IProps> = ({ admin }) => {
  const { handleLogout } = useAdminMenuUtil();
  const { refs } = useTopBarStatus();

  return (
    <section className="flex flex-col">
      <h5 className="text-xs mb-2 px-2 text-mono-800">Status</h5>
      <article
        className="flex items-baseline px-2"
        ref={(element) => {
          refs.current[TOP_BAR_ENUM.ENVIRONMENT] = element;
        }}
      >
        DEV
      </article>
      <Divider style={{ margin: '10px 0' }} />
      <h5 className="text-xs mb-2 px-2 text-mono-800">계정</h5>
      <article className="flex items-center gap-2  px-2">
        <UserAvatar profileImageUrl={admin?.profileImageUrl} name={admin?.nickName} size={36} />
        <div className="flex flex-col">
          <span className="font-semibold">{admin?.nickName}</span>
          <div className="font-light text-mono-500 text-xs">{admin?.email}</div>
        </div>
      </article>
      <Divider style={{ margin: '10px 0' }} />
      <h5 className="text-xs mb-2 px-2 text-mono-800">메뉴</h5>
      <article className="px-2 flex flex-col">
        <Button
          type="text"
          style={{ fontSize: 14, padding: 0, fontWeight: 500 }}
          icon={<SyncOutlined />}
          ref={(element) => {
            refs.current[TOP_BAR_ENUM.PASSWORD_CHANGE] = element;
          }}
          className="flex justify-start"
        >
          <Link href={`/change-password`}>비밀번호 재설정</Link>
        </Button>
        <Button
          type="text"
          style={{ fontSize: 14, padding: 0, fontWeight: 500 }}
          icon={<UnlockOutlined />}
          className="flex justify-start"
          onClick={handleLogout}
        >
          로그아웃
        </Button>
      </article>
    </section>
  );
};

export default AdminMenuTopBar;

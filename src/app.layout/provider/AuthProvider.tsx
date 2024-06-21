'use client';
import React, { createContext, useLayoutEffect, useState } from 'react';

import { IAdmin } from '@interface/IAdmin';
import axios from 'axios';
import { API_URL } from '@module/environment';
import { message, Spin } from 'antd';
import { useRouter } from 'next/navigation';
import { LoadingOutlined } from '@ant-design/icons';

export const AuthContext = createContext<IAdmin | null>(null);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [admin, setAdmin] = useState<IAdmin | null>(null);

  const fetchAdmin = async () => {
    try {
      const { data: res } = await axios.get(API_URL + '/auth/info', { withCredentials: true });
      if (!res.isSuccess) throw res;
      setAdmin(res.data);
    } catch (e: any) {
      message.error('어드민 정보를 불러오지 못했습니다. 다시 로그인해주세요.');
      router.push('/login');
    }
  };

  useLayoutEffect(() => {
    if (!admin) fetchAdmin();
  }, []);

  if (!admin)
    return (
      <div className="absolute w-screen h-screen bg-black z-10 opacity-20">
        <Spin
          size="large"
          className="absolute z-15 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          indicator={<LoadingOutlined spin className="text-[120px]" twoToneColor="#9B59B6" />}
        />
      </div>
    );
  return <AuthContext.Provider value={admin}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

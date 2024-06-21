import 'antd/dist/reset.css';
import React from 'react';

import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider, ThemeConfig } from 'antd';
import koKR from 'antd/locale/ko_KR';

const theme: ThemeConfig = {
  token: {
    colorPrimary: '#9B59B6',
    colorSuccess: '#00C9B7',
    colorWarning: '#FFC95F',
    colorError: '#FF7388',
    borderRadius: 8,
  },
};

const AntdProvider = ({ children }: React.PropsWithChildren) => {
  return (
    <AntdRegistry>
      <ConfigProvider theme={theme} locale={koKR}>
        {children}
      </ConfigProvider>
    </AntdRegistry>
  );
};

export default AntdProvider;

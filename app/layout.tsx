import '@style/css/globals.css';
import Background from '@style/background';
import React from 'react';
import AntdProvider from '@provider/AntdProvider';
import TanstackQueryProvider from '@provider/TanstackQueryProvider';

const RootLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <html lang="ko">
      <body>
        <AntdProvider>
          <Background />
          <TanstackQueryProvider>{children}</TanstackQueryProvider>
        </AntdProvider>
      </body>
    </html>
  );
};

export const metadata = {
  authors: { name: 'Kidztales, Inc' },
  title: {
    default: '키즈테일 BO',
    template: `%s | 키즈테일 BO`,
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default RootLayout;

import React from 'react';
import AuthProvider from '@provider/AuthProvider';
import TopBar from '@layout/top-bar';

const AuthLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <AuthProvider>
      <TopBar />
      {children}
    </AuthProvider>
  );
};

export default AuthLayout;

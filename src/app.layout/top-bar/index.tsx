import React from 'react';

import AvatarTopBar from '@layout/top-bar/component/AvatarTopBar';
import BreadcrumbTopBar from '@layout/top-bar/component/BreadcrumbTopBar';
import TopBarContextProvider from '@layout/top-bar/component/TopBarContextProvider';
import Link from 'next/link';

const TopBar: React.FC = () => {
  return (
    <header className="absolute w-screen bg-white flex items-center h-14 px-5 gap-4 z-10 bg-opacity-55">
      <TopBarContextProvider>
        <ul className="flex items-center gap-2">
          <AvatarTopBar />
        </ul>
        <BreadcrumbTopBar />
        <div className="flex-grow" />
      </TopBarContextProvider>
      <Link href="/">
        {/*<Image src="/finda_admin.svg" alt="핀다 로고" width={156} height={36} priority />*/}
      </Link>
    </header>
  );
};

export default TopBar;

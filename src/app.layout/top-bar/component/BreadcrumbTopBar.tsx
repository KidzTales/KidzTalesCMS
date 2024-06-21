'use client';
import React from 'react';

import { HomeOutlined } from '@ant-design/icons';
import useMenu from '@layout/top-bar/hook/useMenu';
import { Breadcrumb } from 'antd';
import Link from 'next/link';

const BreadcrumbTopBar: React.FC = () => {
  const { mainMenu, subKey } = useMenu();

  if (!mainMenu) return;
  return (
    <Breadcrumb
      items={[
        {
          title: (
            <Link href="/">
              <HomeOutlined style={{ color: mainMenu.color }} />
            </Link>
          ),
        },
        {
          title: (
            <Link href={mainMenu.href}>
              <div style={{ color: mainMenu.color }} className="flex gap-1">
                {mainMenu.icon}
                {mainMenu.title}
              </div>
            </Link>
          ),
        },
        ...(subKey
          ? [
              {
                title: mainMenu.children?.find((item) => item.key === subKey)?.title,
                menu: {
                  items: mainMenu.children?.map((item) => ({
                    key: item.key,
                    title: (
                      <Link href={item.href} prefetch>
                        {item.title}
                      </Link>
                    ),
                  })),
                },
              },
            ]
          : []),
      ]}
    />
  );
};

export default BreadcrumbTopBar;

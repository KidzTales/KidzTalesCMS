import { IMenuItem, menuItemList } from '@layout/top-bar/constant/menuItemList';
import { usePathname } from 'next/navigation';

const useMenu = () => {
  const pathname = usePathname();
  const keyList = pathname?.slice(1).split('/');

  const mainKey = keyList?.[0];
  const subKey = keyList?.[1];

  const mainMenu = menuItemList.find((item) => item.key === mainKey);
  const mainTitle = mainMenu?.title;

  const searchableList = menuItemList.reduce(
    (acc: IMenuItem[], cur: IMenuItem) => [...acc, ...(cur?.children ?? [])],
    []
  );

  return { mainMenu, mainTitle, searchableList, mainKey, subKey };
};

export default useMenu;

import { useCallback } from 'react';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

interface IRouterEventProps {
  pathname?: string;
  query?: Record<string, any>;
  scroll?: boolean;
}

export const useCustomRouter = () => {
  const router = useRouter();
  const currentPathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (query: Record<string, any>) => {
      const params = new URLSearchParams();
      Object.keys(query)
        ?.filter((key) => query[key] !== undefined && query[key] !== null)
        ?.map((key) => {
          params.set(key, query[key]);
        });
      return params.toString();
    },
    [searchParams]
  );

  const push = ({ pathname, query, scroll }: IRouterEventProps) => {
    const path = pathname ?? currentPathname;
    const queryStr = query ? '?' + createQueryString(query) : '';
    return router.push(`${path}${queryStr}`, { scroll: scroll ?? true });
  };

  const replace = ({ pathname, query, scroll }: IRouterEventProps) => {
    const path = pathname ?? currentPathname;
    const queryStr = query ? '?' + createQueryString(query) : '';
    return router.replace(`${path}${queryStr}`, { scroll: scroll ?? true });
  };

  const query = Object.fromEntries(new URLSearchParams(searchParams.toString()));

  return { ...router, push, replace, pathname: currentPathname, query };
};

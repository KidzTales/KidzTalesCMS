'use client';
import React from 'react';

import { QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { message } from 'antd';
import { defaultQueryFn } from '@module/query/defaultQueryFn';
import { isProduction } from '@module/environment';

const generateQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        refetchIntervalInBackground: false,
        queryFn: defaultQueryFn,
      },
    },
    queryCache: new QueryCache({
      onError: (_, query: any) => {
        if (query.meta?.errorMessage) message.error(query.meta?.errorMessage);
      },
    }),
  });

let browserQueryClient: QueryClient | undefined = undefined;

const getQueryClient = () => {
  if (typeof window === 'undefined') return generateQueryClient();
  if (!browserQueryClient) browserQueryClient = generateQueryClient();
  return browserQueryClient;
};

const TanstackQueryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const queryClient = getQueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      {!isProduction && <ReactQueryDevtools initialIsOpen={false} />}
      {children}
    </QueryClientProvider>
  );
};
export default TanstackQueryProvider;

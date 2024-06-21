import { QueryKey } from '@tanstack/react-query';
import axios from 'axios';
import { API_URL } from '@module/environment';

export const defaultQueryFn = async ({ queryKey }: { queryKey: QueryKey }) => {
  const [url, payload, ...others] = queryKey;

  try {
    const res = await axios.get((API_URL + url) as string, {
      params: payload,
      withCredentials: true,
    });
    if (!res.data?.isSuccess) throw res.data;
    return res.data?.data;
  } catch (e: any) {
    throw e.error ?? e.message;
  }
};

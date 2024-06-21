import { useMutation, UseMutationOptions, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { API_URL } from '@module/environment';

interface IExtraProps {
  endpoint: string;
  mode?: 'POST' | 'PUT' | 'DELETE';
}

type IPayload = undefined | Record<string, any>;

const useMutationFn = <T>(
  options: Omit<UseMutationOptions<T, any, IPayload, any>, 'mutationFn'> & IExtraProps
) => {
  const queryClient = useQueryClient();

  const mutationFn = async (values: IPayload = {}) => {
    try {
      const fetchMethod = (options.mode?.toLowerCase() ?? 'post') as 'post' | 'put' | 'delete';
      const res = await axios[fetchMethod](API_URL + options.endpoint, values, {
        withCredentials: true,
      });
      if (!res.data?.isSuccess) throw res.data;
      return res.data?.data;
    } catch (e: any) {
      throw e.error ?? e.message;
    }
  };

  return {
    ...useMutation<T, any, IPayload, any>({
      mutationFn,
      mutationKey: [options.endpoint, options.mode ?? 'POST'],
      ...options,
    }),
    queryClient,
  };
};

export default useMutationFn;

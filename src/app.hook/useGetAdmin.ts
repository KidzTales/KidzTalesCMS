import { AuthContext } from '@provider/AuthProvider';
import { useContext } from 'react';
import { IAdmin } from '@interface/IAdmin';

const useGetAdmin: () => IAdmin = () => {
  return useContext(AuthContext) as IAdmin;
};

export default useGetAdmin;

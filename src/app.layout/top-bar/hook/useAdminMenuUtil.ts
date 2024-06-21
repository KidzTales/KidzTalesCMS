import { message } from 'antd';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const useAdminMenuUtil = () => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await axios.post('/auth/logout');
      message.success('로그아웃되었습니다.');
      router.push('/login');
    } catch (e: any) {
      if (e.response?.status === 302) {
        message.success('로그아웃되었습니다.');
        return router.push('/login');
      }
      message.error('로그아웃에 실패했습니다.');
    }
  };

  return { handleLogout };
};

export default useAdminMenuUtil;

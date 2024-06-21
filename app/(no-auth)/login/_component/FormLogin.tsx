'use client';
import React from 'react';
import { Button, Form, Input, message } from 'antd';
import { emailRule, passwordRule, requiredRuleNoMessage } from '@constant/rules';
import useMutationFn from '@hook/useMutationFn';
import { useRouter } from 'next/navigation';
import { authLoginErrorMessage } from '../_constant/authLoginErrorMessage';

const API_LOGIN = '/auth/login';

const FormLogin: React.FC = () => {
  const router = useRouter();

  const {
    mutateAsync: mutateLogin,
    data: userInfo,
    isPending,
  } = useMutationFn({
    endpoint: API_LOGIN,
  });

  const handleFinish = async (values: Record<string, any>) => {
    try {
      await mutateLogin(values);
      router.push('/');
    } catch (e: any) {
      message.error(authLoginErrorMessage[e.message] ?? '예기치 못한 오류가 발생했습니다!!.');
    }
  };

  return (
    <Form layout="vertical" className="w-full" onFinish={handleFinish}>
      <Form.Item
        name="email"
        label="이메일"
        rules={[requiredRuleNoMessage, emailRule]}
        hasFeedback
        required
      >
        <Input placeholder="이메일을 입력하세요" />
      </Form.Item>
      <Form.Item
        name="password"
        label="비밀번호"
        rules={[requiredRuleNoMessage, passwordRule]}
        hasFeedback
        required
      >
        <Input.Password placeholder="비밀번호를 입력하세요" />
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" type="primary" className="w-full" loading={isPending}>
          로그인
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormLogin;

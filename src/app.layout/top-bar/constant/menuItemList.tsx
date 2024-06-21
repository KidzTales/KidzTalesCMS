import React from 'react';

import {
  ControlOutlined,
  CustomerServiceOutlined,
  GiftOutlined,
  NotificationOutlined,
  SettingOutlined,
} from '@ant-design/icons';

export interface IMenuItem {
  key: string;
  id?: number;
  icon?: React.ReactElement | string;
  title: string;
  href: string;
  color?: string;
  description?: string;
  children?: IMenuItem[];
}

export const menuItemList: IMenuItem[] = [
  {
    id: 1,
    key: 'admin',
    icon: <SettingOutlined />,
    title: '시스템',
    color: '#1a1a1a',
    href: '/admin',
    description: '어드민',
    children: [
      {
        key: 'audit-log',
        icon: '',
        title: '감사 로그',
        href: '/admin/audit-log',
      },
      {
        key: 'workspace',
        icon: '',
        title: '워크스페이스 관리',
        href: '/admin/workspace',
      },
      {
        key: 'user',
        icon: '',
        title: '어드민 관리',
        href: '/admin/user',
      },
    ],
  },
  {
    id: 8,
    key: 'cx',
    icon: <CustomerServiceOutlined />,
    title: 'CX',
    color: '#AF2A42',
    href: '/cx',
    description: '고객 경험 관련 정보에 대해 조회하고, 관리할 수 있습니다.',
    children: [
      {
        key: 'member',
        icon: '',
        title: '회원 목록',
        href: '/cx/member',
      },
      {
        key: 'safe-number',
        icon: '',
        title: '안심번호',
        href: '/cx/safe-number',
      },
      {
        key: 'loan-user',
        icon: '',
        title: '사용자 조회',
        href: '/cx/loan-user',
      },
      {
        key: 'loan-auth',
        icon: '',
        title: '인증목록 조회',
        href: '/cx/loan-auth',
      },
      {
        key: 'loan-asset',
        icon: '',
        title: '자산 조회',
        href: '/cx/loan-asset',
      },
      {
        key: 'loan-account',
        icon: '',
        title: '계좌 조회',
        href: '/cx/loan-account',
      },
      {
        key: 'loan-api-history',
        icon: '',
        title: 'API 전송내역',
        href: '/cx/loan-api-history',
      },
    ],
  },
  {
    id: 9,
    key: 'prompt',
    icon: <GiftOutlined />,
    title: '프롬포트',
    color: '#B5260D',
    href: '/prompt',
    description: '프롬포트를 확인하고, 수정하실 수 있습니다.',
    children: [
      {
        key: 'story',
        icon: '',
        title: '스토리 프롬포트',
        href: '/prompt/story',
      },
      {
        key: 'image',
        icon: '',
        title: '이미지 프롬포트',
        href: '/prompt/image',
      },
    ],
  },
  {
    id: 10,
    key: 'operation',
    icon: <ControlOutlined />,
    title: '서비스',
    color: '#008A37',
    href: '/operation',
    description: '서비스 관련 정보에 대해 조회하고, 관리할 수 있습니다.',
    children: [
      {
        key: 'notice',
        icon: '',
        title: '공지사항',
        href: '/operation/notice',
      },
      {
        key: 'property',
        icon: '',
        title: '운영 설정값',
        href: '/operation/property',
      },
      {
        key: 'more-menu',
        icon: '',
        title: '더보기메뉴 설정',
        href: '/operation/more-menu',
      },
      {
        key: 'loan-downtime',
        icon: '',
        title: '점검시간',
        href: '/operation/loan-downtime',
      },
      {
        key: 'maintenance',
        icon: '',
        title: '비교대출 점검',
        href: '/operation/maintenance',
      },
      {
        key: 'inspection-nhis',
        icon: '',
        title: '건강보험공단 점검',
        href: '/operation/inspection-nhis',
      },
      {
        key: 'emergency-manage',
        icon: '',
        title: '장애페이지 설정',
        href: '/operation/emergency-manage',
      },
      {
        key: 'ab-test',
        icon: '',
        title: 'AB 테스트',
        href: '/operation/ab-test',
      },
      {
        key: 'faq',
        icon: '',
        title: 'FAQ',
        href: '/operation/faq',
      },
      {
        key: 'review',
        icon: '',
        title: '리뷰',
        href: '/operation/review',
      },
    ],
  },
  {
    id: 11,
    key: 'crm',
    icon: <NotificationOutlined />,
    title: 'CRM',
    color: '#4F63D2',
    href: '/crm',
    description: 'CRM 관련 정보에 대해 조회하고, 관리할 수 있습니다.',
    children: [
      {
        key: 'noti-plan',
        icon: '',
        title: '알림계획 관리',
        href: '/crm/noti-plan',
      },
    ],
  },
];

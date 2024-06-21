export const isProduction = process.env.NODE_ENV === 'production';

export const API_URL = process.env.API_URL ?? 'http://localhost:7100/admin';

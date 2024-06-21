export const requiredRuleNoMessage = {
  required: true,
  message: '',
};

const regEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

export const emailRule = {
  pattern: regEmail,
  message: '',
};

const regPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/;

export const passwordRule = {
  pattern: regPassword,
  message: '',
};

const fnv1a = (code: string) => {
  const FNV_PRIME = 0x01000193;
  const FNV_OFFSET_BASIS = 0x811c9dc5;

  let hash = FNV_OFFSET_BASIS;
  for (const char of code) {
    hash ^= char.charCodeAt(0);
    hash *= FNV_PRIME;
  }
  return hash;
};

const getColorFromUserName = (userName: string) => {
  if (!userName) return '#DDDDDD';

  const hash = fnv1a(userName);
  let color = '';

  for (let i = 0; i < 3; i++) {
    const value = (hash >> (i * 8)) & 0xff;
    color += ('00' + value.toString(16)).substr(-2);
  }

  return '#' + color;
};

export default getColorFromUserName;

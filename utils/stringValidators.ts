export const hasThreeDigits = (v: string): boolean => {
  const regex = new RegExp("[0-9][0-9][0-9]");
  return regex.test(v);
};

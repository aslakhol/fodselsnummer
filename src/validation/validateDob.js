import { prepareDob, daysInMonths } from "./utils";

export const isValidDob = dob => {
  if (dob.length !== 6) {
    return false;
  }
  const [day, month, year] = prepareDob(dob);
  return isValidDay(day, month) && isValidMonth(month) && isValidYear(year);
};

export const isValidDay = (day, month) => {
  return 0 < day && day <= daysInMonths[month - 1];
};

export const isValidMonth = month => {
  return 0 < month && month <= 12;
};

export const isValidYear = year => {
  return 0 <= year && year <= 99;
};

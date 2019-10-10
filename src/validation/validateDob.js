const destructDob = dobString => {
  const dayString = dobString.substring(0, 2);
  const monthString = dobString.substring(2, 4);
  const yearString = dobString.substring(4, 6);
  const dayNum = parseInt(dayString);
  const monthNum = parseInt(monthString);
  const yearNum = parseInt(yearString);

  return [dayNum, monthNum, yearNum];
};

export const isValidDob = dobString => {
  if (dobString.length !== 6) {
    return false;
  }

  const [day, month, year] = destructDob(dobString);

  return isValidDay(day, month) && isValidMonth(month) && isValidYear(year);
};

const daysInMonths = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

export const isValidDay = (day, month) => {
  return 0 < day && day <= daysInMonths[month - 1];
};

export const isValidMonth = month => {
  return 0 < month && month <= 12;
};

export const isValidYear = year => {
  return 0 <= year && year <= 99;
};

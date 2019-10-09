// Fødselsnummeret består av 11 siffer.
// De seks første sifrene viser fødselsdato i rekkefølgen dato, måned, år.
// De tre neste sifrene er individnummer hvor det tredje nummeret viser til kjønn, partall betegner kvinne og oddetall betegner mann.
// De to siste sifrene er kontrollsiffer.
// Personnummer er de fem siste sifrene i fødselsnummeret.
// De tre sifrene som er individnummeret, tildeles fortløpende innen den enkelte fødselsdato. Som individsiffer for personer født:
// 1854-1899, brukes serien 749-500
// 1900-1999, brukes serien 499-000
// 1940-1999, brukes også serien 999-900
// 2000-2039, brukes serien 999-500

const isValidFn = fnString => {
  const dob = fnString.substring(0, 6);
  const individ = fnString.substring(6, 9);
  const control = fnString.substring(9, 12);

  isValidDob(dob);
  isValidIndivid(individ);
  isValidControl(control);
};

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

// I'm deciding that all instances of february can have 29 days because I don't want to handle leap years.
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

export const isValidIndivid = individ => {
  return false;
};

const isValidControl = control => {
  return false;
};

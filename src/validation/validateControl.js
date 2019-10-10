import {
  destructFodselsnummer,
  calculateFirstControl,
  calculateSecondControl
} from "./utils";

export const isValidControl = fodselsnummer => {
  const fnArray = destructFodselsnummer(fodselsnummer);
  return isValidFirstControl(fnArray) && isValidSecondControl(fnArray);
};

const isValidFirstControl = fodselsnummer => {
  return calculateFirstControl(fodselsnummer) === fodselsnummer[9];
};

const isValidSecondControl = fodselsnummer => {
  return calculateSecondControl(fodselsnummer) === fodselsnummer[10];
};

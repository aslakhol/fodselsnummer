import { calculateFirstControl, calculateSecondControl } from "./utils";

export const isValidControl = fodselsnummer => {
  return (
    isValidFirstControl(fodselsnummer) && isValidSecondControl(fodselsnummer)
  );
};

const isValidFirstControl = fodselsnummer => {
  return calculateFirstControl(fodselsnummer) === fodselsnummer[9];
};

const isValidSecondControl = fodselsnummer => {
  return calculateSecondControl(fodselsnummer) === fodselsnummer[10];
};

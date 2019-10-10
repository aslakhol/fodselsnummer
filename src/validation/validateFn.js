import { isValidDob } from "./validateDob";
import { isValidControl } from "./validateControl";

export const isValidFodselsnummer = fnString => {
  if (fnString.length !== 11) {
    return false;
  }
  const dob = fnString.substring(0, 6);
  const individ = fnString.substring(6, 9);
  const control = fnString.substring(9, 12);

  return isValidDob(dob) && isValidIndivid(individ) && isValidControl(fnString);
};

export const isValidIndivid = individ => {
  if (individ.length !== 3 || isNaN(individ)) {
    return false;
  } else {
    return true;
  }
};

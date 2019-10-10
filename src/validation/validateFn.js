import { isValidDob } from "./validateDob";
import { isValidControl } from "./validateControl";
import { stringToNumbers } from "./utils";

export const isValidFodselsnummer = fodselsnummerString => {
  if (fodselsnummerString.length !== 11) {
    return false;
  }
  const fodselsnummerArray = stringToNumbers(fodselsnummerString);
  const dob = fodselsnummerArray.slice(0, 6);
  const individ = fodselsnummerString.substring(6, 9);

  return (
    isValidDob(dob) &&
    isValidIndivid(individ) &&
    isValidControl(fodselsnummerArray)
  );
};

export const isValidIndivid = individ => {
  if (individ.length !== 3 || isNaN(individ)) {
    return false;
  } else {
    return true;
  }
};

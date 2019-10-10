export const destructFodselsnummer = fn => {
  return fn.split("").map(Number);
};

export const calculateFirstControl = fn => {
  const weightedSum =
    3 * fn[0] +
    7 * fn[1] +
    6 * fn[2] +
    1 * fn[3] +
    8 * fn[4] +
    9 * fn[5] +
    4 * fn[6] +
    5 * fn[7] +
    2 * fn[8];

  const rest = weightedSum % 11;

  if (rest === 0) {
    return rest;
  } else {
    return 11 - rest;
  }
};

export const calculateSecondControl = fn => {
  const weightedSum =
    5 * fn[0] +
    4 * fn[1] +
    3 * fn[2] +
    2 * fn[3] +
    7 * fn[4] +
    6 * fn[5] +
    5 * fn[6] +
    4 * fn[7] +
    3 * fn[8] +
    2 * fn[9];

  const rest = weightedSum % 11;

  if (rest === 0) {
    return rest;
  } else {
    return 11 - rest;
  }
};

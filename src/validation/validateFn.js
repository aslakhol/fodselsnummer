import { isValidDob } from "./validateDob";
import { isValidControl } from "./validateControl";
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
  if (fnString.length !== 11) {
    return false;
  }
  const dob = fnString.substring(0, 6);
  const individ = fnString.substring(6, 9);
  const control = fnString.substring(9, 12);

  isValidDob(dob);
  isValidIndivid(individ);
  isValidControl(control);
};

export const isValidIndivid = individ => {
  if (individ.length !== 3 || isNaN(individ)) {
    return false;
  } else {
    return true;
  }
  // I considered validating that the number fell into the correct range based on year,
  // However, as we just have the last two digits in the year the ranges overlapped so much
  // That it lost most of it's purpose. So I skipped it.
};

// Kilde: https://www.skatteetaten.no/person/folkeregister/fodsel-og-navnevalg/barn-fodt-i-norge/fodselsnummer/
// Fødselsnummeret består av 11 siffer.
// De seks første sifrene viser fødselsdato i rekkefølgen dato, måned, år.
// De tre neste sifrene er individnummer hvor det tredje nummeret viser til kjønn, partall betegner kvinne og oddetall betegner mann.
// De to siste sifrene er kontrollsiffer.
// Personnummer er de fem siste sifrene i fødselsnummeret.
// De tre sifrene som er individnummeret, tildeles fortløpende innen den enkelte fødselsdato. Som individsiffer for personer født:
// 1854-1899, brukes serien 749-500 54-99 -> 749-500
// 1900-1999, brukes serien 499-000 00-99 -> 499-000
// 1940-1999, brukes også serien 999-900 40-99 -> 999-900
// 2000-2039, brukes serien 999-500 00-39 -> 999-500
// EX: 01 12 99 551 31

// kilde: https://no.wikipedia.org/wiki/F%C3%B8dselsnummer
// k1 = 11 - ((3 × d1 + 7 × d2 + 6 × m1 + 1 × m2 + 8 × å1 + 9 × å2 + 4 × i1 + 5 × i2 + 2 × i3) mod 11)
// k2 = 11 - ((5 × d1 + 4 × d2 + 3 × m1 + 2 × m2 + 7 × å1 + 6 × å2 + 5 × i1 + 4 × i2 + 3 × i3 + 2 × k1) mod 11).

// I considered validating that the number fell into the correct range based on year,
// However, as we just have the last two digits in the year the ranges overlapped so much
// That it lost most of it's purpose. So I skipped it.

// I'm deciding that all instances of february can have 29 days because I don't want to handle leap years.

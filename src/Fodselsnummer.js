import React, { useState, useEffect } from "react";
import { Input } from "nav-frontend-skjema";
import { isValidFodselsnummer } from "./fodselsnummerValidation/validateFodselsnummer";

const Fodselsnummer = () => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  const onChange = value => {
    setInputValue(value);
  };

  useEffect(() => {
    setError(!isValidFodselsnummer(inputValue));
  }, [inputValue]);

  const props = {
    label: "Fødselsnummer: ",
    bredde: "XL",
    value: inputValue,
    onChange: e => onChange(e.target.value)
  };

  if (error && inputValue !== "") {
    props.feil = { feilmelding: "Det er feil i fødselsnummeret" };
  }

  return <Input {...props} />;
};

export default Fodselsnummer;

import React, { useState } from "react";
import { Input } from "nav-frontend-skjema";

const Fodselsnummer = () => {
  const [inputValue, setInputValue] = useState("");

  const onChange = value => {
    setInputValue(value);
  };

  return (
    <Input
      label="Fødselsnummer: "
      bredde="XL"
      value={inputValue}
      onChange={e => onChange(e.target.value)}
    />
  );
};

export default Fodselsnummer;

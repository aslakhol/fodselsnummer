import React from "react";
import "./App.css";
import Veileder from "nav-frontend-veileder";
import Fodselsnummer from "./Fodselsnummer";
import veilederSvg from "./veileder.svg";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Veileder
          tekst={
            <span>
              Her kan du skrive inn fødselsnummeret ditt for å sjekke om du er
              en ekte person!
            </span>
          }
        >
          <img src={veilederSvg} alt="veileder" />
        </Veileder>
        <Fodselsnummer />
      </div>
    </div>
  );
}

export default App;

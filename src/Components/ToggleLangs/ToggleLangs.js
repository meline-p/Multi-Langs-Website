import React, { useContext } from "react";
import FrenchFlag from "../../assets/france.svg";
import SpanishFlag from "../../assets/spain.svg";
import EnglishFlag from "../../assets/united-kingdom.svg";
import "./ToggleLangs.css";
import { Context } from "../../context/langContext";

function ToggleLangs() {
  const { toggleLang } = useContext(Context);

  return (
    <div className="container-langs">
      <img onClick={() => toggleLang("FR")} src={FrenchFlag} alt="frenchFlag" />
      <img
        onClick={() => toggleLang("EN")}
        src={EnglishFlag}
        alt="EnglishFlag"
      />
      <img
        onClick={() => toggleLang("ES")}
        src={SpanishFlag}
        alt="SpanishFlag"
      />
    </div>
  );
}

export default ToggleLangs;
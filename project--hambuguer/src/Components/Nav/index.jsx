import "./nav.css";
import imgNav from "./MaskGroup.png";
import { useState } from "react";

function Nav({ foods, setdataFilter }) {
  const [input, setInput] = useState("");
  

  function takeValue(t) {
    t.preventDefault();

    const result = foods.filter((elem) => {
      const change = elem.name.toLowerCase();
      return change.includes(input.toLowerCase());
    });
    setdataFilter(result);
  }
  return (
    <>
      <nav className="Nav">
        <img className="imgnav" src={imgNav} alt="" />
        <form className="NavDiv" onSubmit={(event) => takeValue(event)}>
          <input
            type="text"
            placeholder="Digitar Pesquisa"
            onChange={(event) => setInput(event.target.value)}
          />
          <button type="submit">Pesquisar</button>
        </form>
      </nav>
    </>
  );
}

export default Nav;

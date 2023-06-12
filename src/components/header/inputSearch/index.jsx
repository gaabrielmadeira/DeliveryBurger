import buttonSearch from "../../../assets/buttonSearch.svg";
import { useState } from "react";
import {StyledInputSearch} from "./style";

export const InputSearch = ({ callback}) => {
  const [inputSearch, setInputSearch] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    callback(inputSearch);
  }

  return (
      <StyledInputSearch onSubmit={handleSubmit}>
        <input className="inputSearch" type="text" placeholder="Digitar pesquisa" onChange={(event) => setInputSearch(event.target.value)} />
        <button type="submit">
          <img src={buttonSearch} alt="Logo da lupa" />
        </button>
      </StyledInputSearch>
  )
}
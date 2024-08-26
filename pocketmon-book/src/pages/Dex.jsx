import React, { useState } from "react";
import DashBoard from "../components/DashBoard";
import PocketmonList from "../components/PocketmonList";
import MOCK_DATA from "../mock";
import { PokemonContext } from "../context/PokemonContext";

const Dex = () => {
  const [addCard, setAddCard] = useState([]);
  return (
    <div>
      <PokemonContext.Provider value={{ addCard, setAddCard, MOCK_DATA }}>
        <DashBoard></DashBoard>
        <PocketmonList></PocketmonList>
      </PokemonContext.Provider>
    </div>
  );
};

export default Dex;

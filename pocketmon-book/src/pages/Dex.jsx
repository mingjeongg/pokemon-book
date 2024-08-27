import React, { useState } from "react";
import DashBoard from "../components/DashBoard";
import PocketmonList from "../components/PocketmonList";
import MOCK_DATA from "../mock";
import { PokemonContext } from "../context/PokemonContext";

const Dex = () => {
  return (
    <div>
      <DashBoard></DashBoard>
      <PocketmonList></PocketmonList>
    </div>
  );
};

export default Dex;

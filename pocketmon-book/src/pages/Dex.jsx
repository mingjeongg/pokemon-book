import React, { useState } from "react";
import DashBoard from "../components/DashBoard";
import PocketmonList from "../components/PocketmonList";
import MOCK_DATA from "../mock";

const Dex = () => {
  const [addCard, setAddCard] = useState([]);
  return (
    <div>
      <DashBoard addCard={addCard} setAddCard={setAddCard}></DashBoard>
      <PocketmonList
        MOCK_DATA={MOCK_DATA}
        addCard={addCard}
        setAddCard={setAddCard}
      ></PocketmonList>
    </div>
  );
};

export default Dex;

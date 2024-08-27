import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dex from "./pages/Dex";
import PokemonDetail from "./pages/PokemonDetail";
import { PokemonContext } from "./context/PokemonContext";
import MOCK_DATA from "./mock";

const App = () => {
  const [addCard, setAddCard] = useState([]);
  // const [addCard, setAddCard] = useState(Array(6).fill({})); (길이가 6인 배열에. {} 빈객체로 채우겠다) === useState([ {}, {}, {}, {}, {}, {} ]) ===useState([ null,null,null,null,null,null] )
  //  6개의 빈 배열을 만든 다음에, id가 없으면 포켓몬볼 이미지를 띄우고 id 있으면 그 id를 가지는 포켓몬을 넣겠다로 초기 설정을 했어야함
  return (
    <PokemonContext.Provider value={{ addCard, setAddCard, MOCK_DATA }}>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dex" element={<Dex />} />
            <Route path="/detail" element={<PokemonDetail />} />
          </Routes>
        </BrowserRouter>
      </div>
    </PokemonContext.Provider>
  );
};

export default App;

import { useNavigate, useSearchParams } from "react-router-dom";
import MOCK_DATA from "../mock";
import { useContext, useState } from "react";
import { PokemonContext } from "../context/PokemonContext";

function PokemonDetail() {
  const navi = useNavigate();

  const { addCard, setAddCard } = useContext(PokemonContext);
  //주소창에서 pokemonId를 뽑아오기 위함
  const [searchParam] = useSearchParams();
  const pokemonId = searchParam.get("id");

  const pokemon = MOCK_DATA.find((p) => p.id === Number(pokemonId));

  //early return
  //이게 return문 밑으로 들어가면 function app (a, b) { return ( return  a + b; ) } 이런 모양임
  // return문 안에 return문 들어갈 수 없다
  // 이게 여기 위치하면 여기서 return 되고 빠져나가는데 return 밑에 있으면 return 만나고 또 return 만나는거다. 안된다
  //포켓몬 리스트에 추가 버튼에 들어가있는 return도 여러개 쓰여있긴 하지만 return을 두번 만나는 구조는 아님. 한번씩만 만남
  if (!pokemon) {
    return <div>포켓몬을 찾을 수 없습니다.</div>;
  }

  const addCardOnDashboard = () => {
    setAddCard([...addCard, pokemon]);
    //일단 풀어서 배열로 다시 감싸줘야함
    // pokemon 안에 전체 키밸루 가져와도 됨 왜냐 어차피 뿌려줄때 사진이랑 이름만 뿌려주기로 정했으니가
    // react는 원페이지, 뒤로가기는 새로고침은 아님, 그냥 한 페이지내에서 보여주는게 이동만 할 뿐
  };

  return (
    //  if (!pokemon) {
    //     return <div>포켓몬을 찾을 수 없습니다.</div>;
    //   } //return 문 안에는 return이 한개만 있어야함

    <div>
      <img src={pokemon.img_url} alt={pokemon.korean_name} />
      <h2>{pokemon.korean_name}</h2>
      <p>타입: {pokemon.types.join(", ")}</p>
      <button
        onClick={() => {
          navi(-1); //navigate가 제공하는 기능 : -1 하면 이전 페이지로 돌아감
          //   navi("/dex");
        }}
      >
        뒤로 가기
      </button>
      <button onClick={addCardOnDashboard}>대시보드에추가</button>
    </div>
  );
}

export default PokemonDetail;

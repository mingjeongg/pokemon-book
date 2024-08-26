import { useNavigate, useSearchParams } from "react-router-dom";
import MOCK_DATA from "../mock";

function PokemonDetail() {
  const [searchParam] = useSearchParams();
  console.log(searchParam);
  const pokemonId = searchParam.get("id");

  const pokemon = MOCK_DATA.find((p) => p.id === Number(pokemonId));

  if (!pokemon) {
    return <div>포켓몬을 찾을 수 없습니다.</div>;
  }
  const navi = useNavigate();
  return (
    <div>
      <img src={pokemon.img_url} alt={pokemon.korean_name} />
      <h2>{pokemon.korean_name}</h2>
      <p>타입: {pokemon.types.join(", ")}</p>
      {/* {* onClick 이벤트를 완성해주세요. *} */}
      <button
        onClick={() => {
          navi(-1); //navigate가 제공하는 기능 : -1 하면 이전 페이지로 돌아감
          //   navi("/dex");
        }}
      >
        뒤로 가기
      </button>
    </div>
  );
}

export default PokemonDetail;

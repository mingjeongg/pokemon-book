import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PokemonContext } from "../context/PokemonContext";
import MOCK_DATA from "../mock";

const PocketmonList = () => {
  const listStyle = {
    width: "934px",
    backgroundColor: "rgb(240, 240, 240)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    display: "grid",
    columnGap: "20px",
  };
  const { addCard, setAddCard, MOCK_DATA } = useContext(PokemonContext);
  const navi = useNavigate();
  return (
    <div style={listStyle}>
      {MOCK_DATA.map((data) => {
        return (
          <div key={data.id}>
            <div
              onClick={() => {
                navi(`/detail?id=${data.id}`);
              }}
            >
              <img src={data.img_url} />
              <h5>{data.korean_name}</h5>
              <span>No. {data.id}</span>
              <br />
            </div>
            {/* e.target.value는 input-onChange에 씀, 여기서는 value 엮어주니까
            근데 button에서 쓰면 엮어준 value 없어서 빈값뜸 못씀
            그리고 버튼이 각각의 카드 안에 들어있기 때문에 이 버튼은 각각의 카드 정보를 이미 가지고 있음
            그리고 냅다 setAddCard(data) 해주면 안됨. 이전 배열에 추가 되는 형식으로 가야함 */}
            <button
              onClick={() => {
                console.log(addCard);
                const targetCardId = addCard.find((card) => {
                  return card.id === data.id;
                });
                // console.log(undefined === false); // 처음에는 빈배열 -> undefiend, undefined는 falsy한 값이다, 근데 false는 아님
                //length가 6번째에도 결과물을 찍어내니까 6포함하면 7번째까지 찍힘
                if (targetCardId) {
                  return alert("중복은안돼");
                } else {
                  if (addCard.length < 6) {
                    setAddCard([...addCard, data]);
                  } else {
                    return alert("6개까지만 된다");
                  }
                }
              }}
            >
              추가
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default PocketmonList;

import React, { useState } from "react";
import { redirect } from "react-router-dom";

const DashBoard = ({ addCard, setAddCard }) => {
  const titleStyle = {
    // backgroundColor: "rgb(240, 240, 240)",
    // color: "red",
    // display: "flex",
    // alignItems: "center",
    // justifyContent: "center",
  };

  //삭제함수
  //delete 하려면 그 삭제버튼에서 인자를 받아와야 비교 가능
  //card.id 그대로 받아오는게 아니라 이걸 받아와서 여기서 targetCardId라는 이름으로 쓸거야 라고 해줘야함
  const deleteCard = (targetCardID) => {
    const unDeletedCard = addCard.filter((card) => {
      return card.id !== targetCardID;
    });

    setAddCard([...unDeletedCard]);
  };
  return (
    <div>
      <h1 style={titleStyle}>나만의 포켓몬</h1>
      {addCard.map((card) => {
        return (
          <div key={card.id}>
            <img src={card.img_url} />
            <h5>{card.korean_name}</h5>
            <span>No. {card.id}</span>
            <button onClick={() => deleteCard(card.id)}>삭제</button>
          </div>
        );
      })}
    </div>
  );
};

export default DashBoard;

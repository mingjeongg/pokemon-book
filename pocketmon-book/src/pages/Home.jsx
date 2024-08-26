import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const buttonStyle = {
    backgroundColor: "red",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  const navi = useNavigate();
  return (
    <div>
      <img src="img/image.png" />
      <button
        onClick={() => {
          navi("/Dex");
        }}
        style={buttonStyle}
      >
        포켓몬 도감 시작하기
      </button>
    </div>
  );
};

export default Home;

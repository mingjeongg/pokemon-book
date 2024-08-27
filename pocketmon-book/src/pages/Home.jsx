import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Home = () => {
  const navi = useNavigate();

  return (
    //div로 감싸는게 아니라 styled된 div로 감싼다.
    <HomeStyle>
      <img src="img/image.png" width="100px" />
      <ButtonStyle
        onClick={() => {
          navi("/Dex");
        }}
      >
        포켓몬 도감 시작하기
      </ButtonStyle>
    </HomeStyle>
  );
};

const ButtonStyle = styled.button`
  background-color: red;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HomeStyle = styled.div`
  height: 100vh; //내 브라우저 높이(크기)만큼 (viewheight) -- 이 div를 화면의 전체로 잡아놓고 중앙정렬을 해야 완전 중앙으로 됨
  display: flex;
  flex-direction: column; // 기본은 가로 정렬인데 거기서 수직 방향으로 요소들을 정렬하고 싶을때
  align-items: center;
  justify-content: center;
`;

export default Home;

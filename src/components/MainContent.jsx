import React from "react";
import ImageGeneration from "./ImageGeneration"; // 이미지 생성 컴포넌트
import Storage from "./Storage"; // 보관함 컴포넌트
import Board from "./Board"; // 게시판 컴포넌트
import "../styles/MainContent.css";

const MainContent = ({ activeTab }) => {
  return (
    <div className="main-content">
      {activeTab === "이미지 생성" && <ImageGeneration />}
      {activeTab === "보관함" && <Storage />}
      {activeTab === "게시판" && <Board />}
    </div>
  );
};

export default MainContent;

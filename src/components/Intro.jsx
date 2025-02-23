import React from "react";
import "../styles/Intro.css";

const Intro = () => {
  return (
    <div className="intro-content">
      <h1>KO-CLIP</h1>
      <p>KO-CLIP은 텍스트를 기반으로 AI가 이미지를 생성하는 플랫폼입니다.</p>
      <p>다양한 스타일과 모델을 선택하여 원하는 이미지를 생성하세요.</p>
      <p>왼쪽 메뉴에서 '이미지 생성'을 클릭하여 시작하세요.</p>
    </div>
  );
};

export default Intro;

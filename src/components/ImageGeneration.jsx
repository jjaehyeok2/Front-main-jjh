import React from "react";
import ModelSelector from "./ModelSelector";
import StyleSelector from "./StyleSelector";
import InputBox from "./InputBox";
import GeneratedImage from "./GeneratedImage";
import "../styles/ImageGeneration.css";

const ImageGeneration = () => {
  return (
    <div className="image-generation">
      {/* 왼쪽 컨트롤 패널 */}
      <div className="control-panel">
        <InputBox />
        <div className="selectors">
          <ModelSelector />
          <StyleSelector />
        </div>
      </div>

      {/* 오른쪽 이미지 출력 영역 */}
      <div className="generated-image-container">
        <GeneratedImage />
      </div>
    </div>
  );
};

export default ImageGeneration;

import React, { useState } from "react";
import "./../styles/InputBox.css";

function InputBox() {
  const [text, setText] = useState("");

  const handleGenerateImage = () => {
    if (text.trim() === "") {
      alert("이미지 생성할 내용을 입력하세요!");
      return;
    }
    console.log("입력된 텍스트:", text);
    setText(""); // 입력 필드 초기화
  };

  return (
    <div className="input-box">
      <input
        type="text"
        placeholder="생성하고 싶은 이미지 내용을 입력하세요."
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleGenerateImage();
        }}
      />
      <button onClick={handleGenerateImage}>이미지 생성</button>
    </div>
  );
}

export default InputBox;

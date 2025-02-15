import React from "react";
import Sidebar from "./components/Sidebar";
import ModelSelector from "./components/ModelSelector";
import StyleSelector from "./components/StyleSelector";
import InputBox from "./components/InputBox";
import GeneratedImage from "./components/GeneratedImage";
import Navbar from "./components/Navbar";
import "./styles/App.css";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="content-wrapper">
        <Sidebar />
        <div className="main-container">
          <div className="control-panel">
            <InputBox />
            <ModelSelector />
            <StyleSelector />
          </div>
          <GeneratedImage />
        </div>
        <div className="right-sidebar"></div> {/* 우측 사이드바 (균형 맞추기) */}
      </div>
    </div>
  );
}

export default App;

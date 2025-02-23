import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import Intro from "./components/Intro"; // 소개 페이지 컴포넌트 추가
import "./styles/App.css";

function App() {
  const [activeTab, setActiveTab] = useState(null); // 초기에는 웹사이트 소개 화면

  return (
    <div className="app-container">
      <Navbar setActiveTab={setActiveTab} />
      <div className="content-wrapper">
        <Sidebar setActiveTab={setActiveTab} />

        {/* 메인 컨텐츠 영역 */}
        <div className="main-container">
          {/* 초기 화면: 웹사이트 소개 */}
          {!activeTab && <Intro />}

          {/* 이미지 생성, 보관함, 게시판 선택 시 MainContent에서 관리 */}
          {activeTab && <MainContent activeTab={activeTab} />}
        </div>

        <div className="right-sidebar"></div> {/* 우측 사이드바 (균형 맞추기) */}
      </div>
    </div>
  );
}

export default App;

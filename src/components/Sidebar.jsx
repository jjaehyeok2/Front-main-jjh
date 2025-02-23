import React from "react";
import "../styles/Sidebar.css";

const Sidebar = ({ setActiveTab }) => {
  return (
    <div className="sidebar">
      <div className="sidebar-menu">
        <div className="menu-item" onClick={() => setActiveTab("이미지 생성")}>
          🎨 이미지 생성
        </div>
        <div className="menu-item" onClick={() => setActiveTab("보관함")}>
          📁 보관함
        </div>
        <div className="menu-item" onClick={() => setActiveTab("게시판")}>
          🗂 게시판
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

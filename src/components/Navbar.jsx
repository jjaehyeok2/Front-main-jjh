import React from "react";
import "../styles/Navbar.css";

function Navbar({ setActiveTab }) {
  return (
    <nav className="navbar">
      {/* 로고 클릭 시 초기 화면으로 이동 */}
      <div className="logo" onClick={() => setActiveTab(null)}>
        KO-CLIP
      </div>
      <div className="nav-links">
        <span className="nav-item">설정</span>
      </div>
    </nav>
  );
}

export default Navbar;

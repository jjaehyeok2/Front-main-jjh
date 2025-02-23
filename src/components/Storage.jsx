import React from "react";
import "../styles/Storage.css";

const images = [
  { id: 1, name: "이미지 1", src: "/assets/sample1.jpg" },
  { id: 2, name: "이미지 2", src: "/assets/sample2.jpg" },
  { id: 3, name: "이미지 3", src: "/assets/sample3.jpg" },
];

const Storage = () => {
  return (
    <div className="storage-content">
      <h2>📁 보관함</h2>
      <div className="image-list">
        {images.map((img) => (
          <div key={img.id} className="image-item">
            <img src={img.src} alt={img.name} className="image-thumbnail" />
            <p>{img.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Storage;

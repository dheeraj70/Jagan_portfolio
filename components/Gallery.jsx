"use client";

import React, { useState, useRef, useEffect } from "react";
import "./Gallery.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Gallery = ({ main }) => {
  const images = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg",
    "10.jpg",
    "11.jpg",
    "12.jpg",
    "13.jpg",
    "14.jpg",
    "15.jpg",
    "16.jpg",
    "17.jpg",
    "18.jpg",
    "19.jpg",
    "20.jpg",
    "21.jpg",
    "22.jpg",
    "23.jpg",
    "24.jpg",
    "25.jpg",
    "26.jpg",
    "27.jpg",
    "28.jpg",
    "29.jpg",
    "30.jpg",
  ];
  const router = useRouter();

  const [viewerOpen, setViewerOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);
  const imgRef = useRef();
  const leftref = useRef();
  const rightref = useRef();

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (imgRef.current && !imgRef.current.contains(e.target) && !leftref.current.contains(e.target) && !rightref.current.contains(e.target)) {
        closeViewer();
      }
    };

    if (viewerOpen) {
      document.addEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [viewerOpen]);

  const openViewer = (index) => {
    setCurrentImageIndex(index);
    setScrollTop(window.scrollY); 
    setViewerOpen(true);
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollTop + 5}px`; 
  };

  const closeViewer = () => {
    setViewerOpen(false);
    document.body.style.overflow = "";
    document.body.style.position = "";
    window.scrollTo(0, scrollTop); 
  };

  const showNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const showPrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div style={{ marginTop: main ? "100px" : "150px" }} className="gallery">
      <img className="gall_i" src="/couple_baby_dakko.png" alt=" " />
      <img src="./baby_nyuuji_kenshin_kyoui.png" alt="" className="gall_i2" />
      <h1 className="avh">Gallery</h1>
      <div className="gcontainer">
        {(main ? images.slice(0, 10) : images).map((image, index) => (
          <div key={index} className="gbox">
            <Image
              width={300}
              height={400}
              src={`/gallery/${image}`}
              alt="photo"
              className="gimage"
              style={{ width: "100%", height: "auto", objectFit: "cover", cursor: "pointer" }}
              onClick={() => openViewer(index)}
            />
          </div>
        ))}
      </div>

      {main && (
        <div className="viewmore">
          <span onClick={() => { router.push('/gallery'); }} style={{ cursor: "pointer" }}>View more </span>
          <svg
            width="30px"
            height="30px"
            viewBox="0 0 15 15"
            fill="#2e5077"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.85355 2.14645C3.65829 1.95118 3.34171 1.95118 3.14645 2.14645C2.95118 2.34171 2.95118 2.65829 3.14645 2.85355L7.14645 6.85355C7.34171 7.04882 7.65829 7.04882 7.85355 6.85355L11.8536 2.85355C12.0488 2.65829 12.0488 2.34171 11.8536 2.14645C11.6583 1.95118 11.3417 1.95118 11.1464 2.14645L7.5 5.79289L3.85355 2.14645ZM3.85355 8.14645C3.65829 7.95118 3.34171 7.95118 3.14645 8.14645C2.95118 8.34171 2.95118 8.65829 3.14645 8.85355L7.14645 12.8536C7.34171 13.0488 7.65829 13.0488 7.85355 12.8536L11.8536 8.85355C12.0488 8.65829 12.0488 8.34171 11.8536 8.14645C11.6583 7.95118 11.3417 7.95118 11.1464 8.14645L7.5 11.7929L3.85355 8.14645Z"
              fill="#2e5077"
            />
          </svg>
        </div>
      )}

      {viewerOpen && (
        <div className="viewer">
          <button className="close-btn" onClick={closeViewer}><img className="close-btn-svg" height={'50px'} src="/x-markk.svg" alt="close" /></button>
          <button ref={leftref} className="prev-btn" onClick={showPrevImage}><img className="prev-btn-arr" height={'50px'} src="/rightarrow.svg" alt="previous" /></button>
          <Image
            src={`/gallery/${images[currentImageIndex]}`}
            alt="current"
            width={800}
            height={600}
            ref={imgRef}
            style={{ maxWidth: "90%", maxHeight: "90%", objectFit: "contain" }}
          />
          <button ref={rightref} className="next-btn" onClick={showNextImage}><img height={'50px'} src="/rightarrow.svg" alt="next" /></button>
        </div>
      )}
    </div>
  );
};

export default Gallery;

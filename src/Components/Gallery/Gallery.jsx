import React, { useEffect } from "react";
import locomotiveScroll from "locomotive-scroll";
import "../../Styles/gallery.css";
import NavBar from "../NavBar/NavBar";
import imgArr from "../../utility/img";

const Gallery = () => {
  let images = [];

  const showImages = () => {
    images.forEach((image) => {
      image.classList.remove("-clicked");
      image.classList.add("-active");
    });
  };

  const hideImages = () => {
    images.forEach((image) => {
      image.classList.remove("-active");
    });
  };

  useEffect(() => {
    const root = document.querySelector(".scroll-animations-example");
    images = root.querySelectorAll(".image");

    const func = () => {
      images.forEach((image) => {
        image.addEventListener("click", () => {
          image.classList.add("-clicked");
          hideImages();
        });
      });

      setTimeout(showImages(), 1000);

      const scroll = new locomotiveScroll({
        el: root,
        direction: "horizontal",
        smooth: true,
        lerp: 0.05,
        tablet: {
          smooth: true,
        },
        smartphone: {
          smooth: true,
        },
      });
    };

    func();
  }, []);

  const setMedia = () => {
    let media = [];

    for (let i = 0; i < imgArr.length; i++) {
      let speed = Math.floor(Math.random() * 3) + 1;
      let m = (
        <div className="item -normal" data-scroll data-scroll-speed={speed}>
          <img className="image" src={imgArr[i++]} />
        </div>
      );
      media.push(m);

      speed = Math.floor(Math.random() * 3) + 1;
      m = (
        <div className="item -big" data-scroll data-scroll-speed={speed}>
          <img className="image" src={imgArr[i++]} />
        </div>
      );
      media.push(m);

      speed = Math.floor(Math.random() * 3) + 1;
      m = (
        <div className="item -normal" data-scroll data-scroll-speed={speed}>
          <img className="image" src={imgArr[i++]} />
        </div>
      );
      media.push(m);

      speed = Math.floor(Math.random() * 3) + 1;
      m = (
        <div className="item -small" data-scroll data-scroll-speed={speed}>
          <img className="image" src={imgArr[i++]} />
        </div>
      );
      media.push(m);

      speed = Math.floor(Math.random() * 3) + 1;
      m = (
        <div
          className="item -normal -horizontal"
          data-scroll
          data-scroll-speed={speed}
        >
          <img className="image" src={imgArr[i++]} />
        </div>
      );
      media.push(m);
    }

    return media;
  };

  let media = setMedia();

  return (
    <>
      <NavBar />
      <div className="scroll-animations-example" data-scroll-container>
        <div className="scrollsection" data-scroll-section>
          {media}
        </div>
      </div>
    </>
  );
};

export default Gallery;

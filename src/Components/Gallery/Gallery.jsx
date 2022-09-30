import React, { useEffect, useState } from "react";
import locomotiveScroll from "locomotive-scroll";
import "../../Styles/gallery.css";
import NavBar from "../NavBar/NavBar";
import imgArr from "../../utility/img";

const Gallery = () => {
  const [media, setMedia] = useState([]);
  // let images = [];

  // const showImages = () => {
  //   images.forEach((image) => {
  //     image.classList.remove("-clicked");
  //     image.classList.add("-active");
  //   });
  // };

  // const hideImages = () => {
  //   images.forEach((image) => {
  //     image.classList.remove("-active");
  //   });
  // };

  useEffect(() => {
    const root = document.querySelector(".scroll-animations-example");
    // images = root.querySelectorAll(".image");

    const func = () => {
      // images.forEach((image) => {
      //   image.addEventListener("click", () => {
      //     // on click function for media
      //   });
      // });

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
    setMedia(mediaHandler());
  }, []);

  const mediaHandler = () => {
    let media = [];

    for (let i = 0; i < imgArr.length; i++) {
      let speed = Math.floor(Math.random() * 3) + 1;
      let m = (
        <div className="item -normal" data-scroll data-scroll-speed={speed}  key={"normal2" + i}>
          <img className="image" src={imgArr[i++]} />
        </div>
      );
      media.push(m);

      if (i === imgArr.length) {
        return media;
      }

      speed = Math.floor(Math.random() * 3) + 1;
      m = (
        <div className="item -big" data-scroll data-scroll-speed={speed} key={"big" + i}>
          <img className="image" src={imgArr[i++]} />
        </div>
      );
      media.push(m);

      if (i === imgArr.length) {
        return media;
      }

      speed = Math.floor(Math.random() * 3) + 1;
      m = (
        <div className="item -normal" data-scroll data-scroll-speed={speed} key={"normal1" + i}>
          <img className="image" src={imgArr[i++]} />
        </div>
      );
      media.push(m);

      if (i === imgArr.length) {
        return media;
      }

      speed = Math.floor(Math.random() * 3) + 1;
      m = (
        <div className="item -small" data-scroll data-scroll-speed={speed} key={"small" + i}> 
          <img className="image" src={imgArr[i++]} />
        </div>
      );
      media.push(m);

      if (i === imgArr.length) {
        return media;
      }

      speed = Math.floor(Math.random() * 3) + 1;
      m = (
        <div
          className="item -normal -horizontal"
          data-scroll
          data-scroll-speed={speed}
          key={"normal3" + i}
        >
          <img className="image" src={imgArr[i++]} />
        </div>
      );
      media.push(m);
    }

    return media;
  };

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

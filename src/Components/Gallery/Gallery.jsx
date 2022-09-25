import React, { useEffect } from "react";
import locomotiveScroll from 'locomotive-scroll';
import '../../Styles/gallery.css'
import NavBar from "../NavBar/NavBar";

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
  }, [])


    return (
        <>
            <NavBar/>
            <div class='scroll-animations-example' data-scroll-container>
                <div class='scrollsection' data-scroll-section>
                    <div class='item -normal' data-scroll data-scroll-speed="2">
                        <img class='image' src='https://picsum.photos/id/1005/300/400' />
                    </div>
                    <div class='item -big' data-scroll data-scroll-speed="1">
                        <img class='image' src='https://picsum.photos/id/1019/600/800' />
                    </div>
                    <div class='item -small -horizontal' data-scroll data-scroll-speed="4">
                        <img class='image' src='https://picsum.photos/id/1027/400/300' />
                    </div>
                    <div class='item -normal' data-scroll data-scroll-speed="3">
                        <img class='image' src='https://picsum.photos/id/1028/300/400' />
                    </div>
                    <div class='item -normal -horizontal' data-scroll data-scroll-speed="2">
                        <img class='image' src='https://picsum.photos/id/1041/400/300' />
                    </div>
                    <div class='item -big -horizontal' data-scroll data-scroll-speed="4">
                        <img class='image' src='https://picsum.photos/id/1042/800/600' />
                    </div>
                    <div class='item -small' data-scroll data-scroll-speed="2">
                        <img class='image' src='https://picsum.photos/id/1049/300/400' />
                    </div>
                    <div class='item -normal -horizontal' data-scroll data-scroll-speed="1">
                        <img class='image' src='https://picsum.photos/id/1056/300/400' />
                    </div>
                    <div class='item -small -horizontal' data-scroll data-scroll-speed="3">
                        <img class='image' src='https://picsum.photos/id/1062/400/300' />
                    </div>
                    <div class='item -big' data-scroll data-scroll-speed="1">
                        <img class='image' src='https://picsum.photos/id/1068/600/800' />
                    </div>

                    <div class='item -normal -horizontal' data-scroll data-scroll-speed="2">
                        <img class='image' src='https://picsum.photos/id/1069/400/300' />
                    </div>
                    <div class='item -normal -horizontal' data-scroll data-scroll-speed="1">
                        <img class='image' src='https://picsum.photos/id/1072/300/400' />
                    </div>
                    <div class='item -small -horizontal' data-scroll data-scroll-speed="4">
                        <img class='image' src='https://picsum.photos/id/1075/400/300' />
                    </div>
                    <div class='item -big' data-scroll data-scroll-speed="3">
                        <img class='image' src='https://picsum.photos/id/1081/600/800' />
                    </div>
                    <div class='item -normal -horizontal' data-scroll data-scroll-speed="2">
                        <img class='image' src='https://picsum.photos/id/111/400/300' />
                    </div>
                    <div class='item -small -horizontal' data-scroll data-scroll-speed="4">
                        <img class='image' src='https://picsum.photos/id/129/400/300' />
                    </div>
                    <div class='item -big' data-scroll data-scroll-speed="2">
                        <img class='image' src='https://picsum.photos/id/137/600/800' />
                    </div>
                    <div class='item -normal -horizontal' data-scroll data-scroll-speed="1">
                        <img class='image' src='https://picsum.photos/id/141/300/400' />
                    </div>
                    <div class='item -small -horizontal' data-scroll data-scroll-speed="3">
                        <img class='image' src='https://picsum.photos/id/145/400/300' />
                    </div>
                    <div class='item -normal' data-scroll data-scroll-speed="1">
                        <img class='image' src='https://picsum.photos/id/147/300/400' />
                    </div>
                </div>
            </div>

            
        </>
    )
}

export default Gallery;

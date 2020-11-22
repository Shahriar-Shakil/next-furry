import React, { ReactElement } from "react";

interface Props {}

export default function Banner({}: Props): ReactElement {
  return (
    <div className="ps-home-banner ps-home-banner--1">
      <div className="ps-container">
        <div className="ps-section__left">
          {/* <div
            className="ps-carousel--nav-inside owl-slider"
            dataOwlAuto="true"
            dataOwlLoop="true"
            dataOwlSpeed={5000}
            dataOwlGap={0}
            dataOwlNav="true"
            dataOwlDots="true"
            dataOwlItem={1}
            dataOwlItem-xs={1}
            dataOwlItem-sm={1}
            dataOwlItem-md={1}
            dataOwlItem-lg={1}
            dataOwlDuration={1000}
            dataOwlMousedrag="on"
          >
            <div className="ps-banner">
              <a href="#">
                <img src="img/slider/home-1/slide-1.jpg" alt="" />
              </a>
            </div>
            <div className="ps-banner">
              <a href="#">
                <img src="img/slider/home-1/slide-2.jpg" alt="" />
              </a>
            </div>
            <div className="ps-banner">
              <a href="#">
                <img src="img/slider/home-1/slide-3.jpg" alt="" />
              </a>
            </div>
          </div> */}
        </div>
        <div className="ps-section__right">
          <a className="ps-collection" href="#">
            <img src="img/slider/home-1/promotion-1.jpg" alt="" />
          </a>
          <a className="ps-collection" href="#">
            <img src="img/slider/home-1/promotion-2.jpg" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

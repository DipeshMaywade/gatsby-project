import React from "react";
import { Link } from "gatsby";

export default function Feature({ stories }) {
  return (
    <div>
      <section className="feature">
        <div className="auto__container">
          <div className="feature__inner">
            <div className="feature__inner-title">
              <h2 className="t-l">
                FEATURES
                <span>FEATURES</span>
              </h2>
            </div>
            <Link to={`/story/${stories[41].slug}`}>
              <div className="feature__row">
                <div className="feature__row-image">
                  <img src={stories[41].image} alt="" />
                </div>
                <div className="feature__row-content">
                  <h3>{stories[41].title}</h3>
                  <p className="sm">{stories[41].sub_title}</p>
                  <a href="#" className="feature__row-content-link">
                    <span></span> Read more
                  </a>
                </div>
              </div>
            </Link>
            <Link to={`/story/${stories[42].slug}`}>
              <div className="feature__row under">
                <div className="feature__row-content">
                  <h3>{stories[42].title} </h3>
                  <p className="sm">{stories[42].sub_title}</p>
                  <a href="#" className="feature__row-content-link">
                    <span></span> Read more
                  </a>
                </div>
                <div className="feature__row-image">
                  <img src={stories[42].image} alt="" />
                </div>
              </div>
            </Link>
            <Link to={`/story/${stories[45].slug}`}>
              <div className="feature__row">
                <div className="feature__row-image">
                  <img src={stories[45].image} alt="" />
                </div>
                <div className="feature__row-content">
                  <h3>{stories[45].title}</h3>
                  <p className="sm"></p>
                  <a href="#" className="feature__row-content-link">
                    <span></span> Read more
                  </a>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

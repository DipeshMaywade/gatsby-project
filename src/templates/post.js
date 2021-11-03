import React, { useState } from "react";
import Header from "../components/header";
import { graphql } from "gatsby";
import cx from "classnames";
import { Link } from "gatsby";
import Footer from "../components/footer";

export default function Post({ data }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const story = data.cms.CMS_Story;
  return (
    <div>
      <div>
        <div className={cx("intro", { active: isOpen })} id="intro">
          <div className={cx("sidebar", { active: isOpen })} id="menu">
            <div className="sidebar__inner">
              <Link className="sidebar__inner-link" to={`/`}>
                Advertise
              </Link>
              <Link className="sidebar__inner-link" to={`/`}>
                Contact us
              </Link>
              <Link className="sidebar__inner-link" to={`/`}>
                About
              </Link>
              <Link className="sidebar__inner-link active" to={`/`}>
                Home
              </Link>
            </div>
            <div className={cx("sidebar__close", { active: isOpen })} id="menuClose" onClick={toggle}>
              <img src="/images/icons/close.svg" alt="" />
            </div>
          </div>
          <div className="intro__inner">
            <div className="intro__header">
              <div className="intro__header-logo">
                <img src="/images/nerdblack.png" />
              </div>
              <div className="intro__header-search">
                <img src="/images/nerdblack.png" style={{ height: 40, marginLeft: 30, marginBottom: -8 }} />
              </div>
              <div className="intro__header-row">
                <a href="#">
                  <span>Newsletter</span>
                </a>
                <button id="menuBtn" onClick={toggle}>
                  <img src="/images/icons/ham.svg" alt="" />
                </button>
              </div>
            </div>
            <div className="intro__content">
              <div className="intro__content-text">
                <h2>{story.title}</h2>
                <p dangerouslySetInnerHTML={{ __html: story.title }}></p>
              </div>
              <div className="intro__content-image">
                <a href="#blog" className="intro__content-anchor">
                  <img src="/images/icons/arrow-bottom.svg" alt="" />
                </a>
                <img src={story.image} alt="" />
              </div>
            </div>
            <div className="intro__social">
              <a href="#" className="intro__social-link">
                <img src="/images/icons/facebook.svg" alt="" />
              </a>
              <a href="#" className="intro__social-link">
                <img src="/images/icons/instagram.svg" alt="" />
              </a>
              <a href="#" className="intro__social-link">
                <img src="/images/icons/twitter.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export const query = graphql`
  query MyQuery3($slug: ID!) {
    cms {
      CMS_Story(id: $slug) {
        id
        title
        pub_date
        image
      }
    }
  }
`;

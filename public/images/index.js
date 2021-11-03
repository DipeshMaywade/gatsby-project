import React from "react"
import { Helmet } from "react-helmet"
import "../styles/main.css"

export default function Home() {
  return (
    <>
      <Helmet>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="styles/main.css" />
        <title>Blog</title>
      </Helmet>
      <section class="intro" id="intro">
        <div class="sidebar" id="menu">
          <div class="sidebar__inner">
            <a href="#" class="sidebar__inner-link">
              {" "}
              Advertise{" "}
            </a>
            <a href="#" class="sidebar__inner-link">
              {" "}
              Contact us{" "}
            </a>

            <a href="#" class="sidebar__inner-link">
              {" "}
              About{" "}
            </a>

            <a href="#" class="sidebar__inner-link active">
              {" "}
              Home{" "}
            </a>
          </div>
          <div class="sidebar__close" id="menuClose">
            <img src="images/icons/close.svg" alt="" />
          </div>
        </div>
        <div class="intro__inner">
          <div class="intro__header">
            <div class="intro__header-logo">
              <img src="images/nerdblack.png" />
            </div>
            <div class="intro__header-search">
              <img
                src="images/nerdblack.png"
                style="height: 40px; margin-left: 30px; margin-bottom: -8px"
              />
            </div>
            <div class="intro__header-row">
              <a href="#">
                <span>Newsletter</span>
              </a>
              {/* <!-- <button id="searchBtn">
              <img src="images/icons/search.svg" alt="" />
            </button> --> */}
              <button id="menuBtn">
                <img src="images/icons/ham.svg" alt="" />
              </button>
            </div>
          </div>
          <div class="intro__content">
            <div class="intro__content-text">
              <h2>Best Blogs to Read from Famous Bloggers</h2>
              <p>
                Covers all things showbusiness, including celebrity gossip,
                entertainment news, and the latest on new shows, movies, and
                popular books
              </p>
              <a href="#" class="btn-primary">
                {" "}
                Read all{" "}
              </a>
            </div>
            <div class="intro__content-image">
              <a href="#blog" class="intro__content-anchor">
                <img src="images/icons/arrow-bottom.svg" alt="" />
              </a>
              <img src="images/introImage.jpeg" alt="" />
            </div>
          </div>
          <div class="intro__social">
            <a href="#" class="intro__social-link">
              <img src="images/icons/facebook.svg" alt="" />
            </a>
            <a href="#" class="intro__social-link">
              <img src="images/icons/instagram.svg" alt="" />
            </a>
            <a href="#" class="intro__social-link">
              <img src="images/icons/twitter.svg" alt="" />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

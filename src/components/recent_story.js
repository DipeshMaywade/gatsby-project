import React from "react";

export default function Recent({ stories }) {
  return (
    <div>
      <section className="recent">
        <div className="auto__container">
          <div className="recent__title">
            <h2 className="b-l">
              Recently added
              <span> New </span>
            </h2>
          </div>
          <div className="recent__inner">
            <div className="recent__post">
              <div className="recent__post-body">
                <div className="recent__post-body-image">
                  <img src={stories[29].image} alt="" />
                  <div className="recent__post-body-content">
                    <h4>{stories[29].title}</h4>
                  </div>
                </div>

                <a href="#" className="btn-primary">
                  {" "}
                  view more posts{" "}
                </a>
              </div>
            </div>
            <div className="recent__newsletter">
              <div className="recent__newsletter-header">
                <img src="images/added/1 (1).png" alt="" />
                <div className="recent__newsletter-header-content">
                  <h2>
                    Join our <br />
                    newsletter
                  </h2>
                  <a href="#" className="btn-primary">
                    {" "}
                    subscribe{" "}
                  </a>
                </div>
              </div>
              <div className="recent__newsletter-body">
                <h2>
                  LETS STAY <br />
                  CONNECTED
                </h2>
                <a href="#" className="btn-primary">
                  {" "}
                  JOIN OUR TEAM{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

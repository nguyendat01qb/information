import React from "react";
import Header from "../../components/Header/Header";
import "./AboutMe.css";

export default function AboutMe() {
  return (
    <div className="about-me-container screen-container">
      <div className="about-me-parent">
        <Header title="About me" content="Why choose me?" />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              Full stack web with background knowledge of MERN stacks with
              redux, Ruby On Rails, along with a knack of building applications
              with utmost efficiency. Willing to be an asset for an
              organization.
            </span>
            <div className="about-me-highlights">
              <span>Here are a Few Highlights:</span>
              <div className="highlight">
                <div className="highlight-blob"></div>
                <span>Ruby On Rails</span>
              </div>
              <div className="highlight">
                <div className="highlight-blob"></div>
                <span>Full Stack web</span>
              </div>
              <div className="highlight">
                <div className="highlight-blob"></div>
                <span>Interactive Front End as per the design</span>
              </div>
              <div className="highlight">
                <div className="highlight-blob"></div>
                <span>React and React Native</span>
              </div>
              <div className="highlight">
                <div className="highlight-blob"></div>
                <span>Building REST API</span>
              </div>
              <div className="highlight">
                <div className="highlight-blob"></div>
                <span>Managing database SQL && NoSQL</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

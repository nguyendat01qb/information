import React from "react";
import Typical from "react-typical";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.facebook.com/neukhongthulamsaobietduoc">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="#">
                <i className="fa fa-google-plus-square"></i>
              </a>
              <a href="https://www.instagram.com/nvdatdev/">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fa fa-skype"></i>
              </a>
              <a href="#">
                <i className="fa fa-twitter"></i>
              </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'm <span className="highlighted-text">Nguyen Dat</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Ruby On Rails Dev",
                    1000,
                    "Full Stack Dev",
                    1000,
                    "MERN Stack Dev",
                    1000,
                    "React Dev",
                    1000,
                    "Vue Dev",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Building applications with front and back end operations.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn">
              {""}
              Hire Me{" "}
            </button>
            {/* <a href="#" download="">
              <button className="btn highlighted-btn">Get Resume</button>
            </a> */}
            <a
              target="_blank"
              href="https://www.topcv.vn/xem-cv/BlcGCVJbDlIFA1oNVg5fUFdSCldSDFFSXAEKXA4af4"
            >
              <button className="btn highlighted-btn">My CV</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}

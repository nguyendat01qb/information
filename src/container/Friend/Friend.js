import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Header from "../../components/Header/Header";
import dat from "../../assets/Home/20472940a42f6b71323e.jpg";
import htho from "../../assets/Home/274605957_1233385117413357_8756173668328546270_n.jpg";
import ttho from "../../assets/Home/273036052_1317991808666420_3084454343553392006_n.jpg";
import tung from "../../assets/Home/271274899_3147560795513879_5434809409132509196_n.jpg";
import "./Friend.css";

export default function AboutMe() {
  const members = [
    {
      name: "Nguyen Van Dat",
      image: dat,
      desctiption:
        "When he delivered my job, my head spinned, it was so nice and he implemented every functionality i requested for.",
      role: "FullStack MERN, Ruby On Rails",
      facebook: "https://www.facebook.com/neukhongthulamsaobietduoc",
    },
    {
      name: "Tran Huu Tho",
      image: htho,
      desctiption:
        "When he delivered my job, my head spinned, it was so nice and he implemented every functionality i requested for.",
      role: "Android developer && React JS",
      facebook: "https://www.facebook.com/thientho.it",
    },
    {
      name: "Tran Nhat Truong Tho",
      image: ttho,
      desctiption:
        "When he delivered my job, my head spinned, it was so nice and he implemented every functionality i requested for.",
      role: "Developer Ruby On Rails",
      facebook: "https://www.facebook.com/profile.php?id=100013668392118",
    },
    {
      name: "Nguyen Van Tung",
      image: tung,
      desctiption:
        "When he delivered my job, my head spinned, it was so nice and he implemented every functionality i requested for.",
      role: "Developer Ruby On Rails",
      facebook: "https://www.facebook.com/map.tung.9",
    },
  ];
  return (
    <div>
      <Header title="Me && Companions" content="Like-minded people" />
      <section className="companion-section">
        <div className="container">
          <Carousel
            prevLabel={false}
            nextLabel={false}
            touch={true}
            wrap={true}
            indicators={false}
            interval={2000}
          >
            {members.map((member) => (
              <Carousel.Item>
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left"></i>
                      {member.desctiption}
                      <i className="fa fa-quote-right"></i>
                    </p>
                  </div>
                  <a
                    href={member.facebook}
                    target="_blank"
                    className="client-info"
                  >
                    <img src={member.image} />
                    <div className="info">
                      <h5>{member.name}</h5>
                      <p>{member.role}</p>
                    </div>
                  </a>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </section>
    </div>
  );
}

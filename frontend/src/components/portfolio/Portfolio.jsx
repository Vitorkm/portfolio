import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio4.jpg";
import IMG2 from "../../assets/portfolio5.png";
import IMG3 from "../../assets/portfolio2.jpg";

const data = [
  {
    id: 1,
    title: "Title for portfolio project",
    img: IMG1,
    github: "#",
    liveDemo: "#",
  },
  {
    id: 2,
    title: "Title for portfolio project",
    img: IMG2,
    github: "#",
    liveDemo: "#",
  },
  {
    id: 3,
    title: "Title for portfolio project",
    img: IMG3,
    github: "#",
    liveDemo: "#",
  }
]

const Portfolio = () => {
  
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio-container">
        {data.map((item) => {
          return (
            <article key={item.id} className="portfolio-item">
              <div className="portfolio-item-img">
                <img src={item.img} alt={item.title} />
              </div>
              <h3>{item.title}</h3>
              <div className="portfolio-item-cta">
                <a href={item.github} className="btn" target="_blank">
                  Github
                </a>
                <a href={item.liveDemo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;

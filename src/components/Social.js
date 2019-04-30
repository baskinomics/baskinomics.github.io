import React, { Component } from "react";
import "../styles/Social.css";

class Social extends Component {
  render() {
    return (
      <div className="Social">
        <a class="portfolio-link" href="https://www.linkedin.com/in/sean-baskin/" target="_blank"><i class="fab fa-linkedin"></i></a>
        <a class="portfolio-link" href="https://github.com/baskinomics" target="_blank"><i class="fab fa-github"></i></a>
        <a class="portfolio-link" href="./Sean-Baskin-Resume.pdf" target="_blank"><i class="far fa-file-alt"></i></a>
      </div>
    );
  }
}

export default Social;

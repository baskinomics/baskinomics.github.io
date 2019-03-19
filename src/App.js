import React, { Component } from "react";
import { hot } from "react-hot-loader/root";
import "./App.css";
import Handle from "./components/Handle.js";
import Social from "./components/Social.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Handle />
        <Social />
      </div>
    );
  }
}

export default hot(App);

// Components
// --> HeroHandle
// --> Social

// <!DOCTYPE html>
// <html lang="en" dir="ltr">
//
// <head>
//   <meta charset="utf-8">
//   <title>baskinomics.github.io</title>
//   <link href="style.css" rel="stylesheet">
//   <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">
//   <link href="https://fonts.googleapis.com/css?family=Source+Code+Pro" rel="stylesheet">
// </head>
//
// <body>
//   <div class="content-box">
//     <div class="github-handle">
//       <p>$ baskinomics</p>
//     </div>
//     <div class="portfolio-links">
//       <a class="portfolio-link" href="https://www.linkedin.com/in/sean-baskin/" target="_blank"><i class="fab fa-linkedin"></i></a>
//       <a class="portfolio-link" href="https://github.com/baskinomics" target="_blank"><i class="fab fa-github"></i></a>
//     </div>
//   </div>
// </body>
//
// </html>

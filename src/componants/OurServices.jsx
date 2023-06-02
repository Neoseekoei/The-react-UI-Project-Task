import React from 'react';


const OurServices = () => {
  return (
    <div className="services-section">
      <h2>Our Services</h2>
      <div className="services-list">
        <div className="service">
          <img src="html-5.png" alt="Service 1" />
          <h3>HTML</h3>
          <p>HTML is the standard markup language for Web pages.
             With HTML you can create your own Website.
             HTML is easy to learn - You will enjoy it!</p>
        </div>
        <div className="service">
          <img src="css-3.png" alt="Service 2" />
          <h3>CSS</h3>
          <p>CSS is the language we use to style an HTML document.
             CSS describes how HTML elements should be displayed.
             This tutorial will teach you CSS from basic to advanced.</p>
        </div>
        <div className="service">
          <img src="js.png" alt="Service 3" />
          <h3>JAVASCRIPT</h3>
          <p>JavaScript is the world's most popular programming language.
             JavaScript is the programming language of the Web.
             JavaScript is easy to learn.
             This tutorial will teach you JavaScript from basic to advanced.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
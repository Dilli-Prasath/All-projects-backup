import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About BookHub</h2>
            <p className='fs-17'>Libraries store the energy that fuels the imagination. They open up windows to the world and inspire us to explore and achieve and contribute to improving our quality of life. Libraries change lives for the better.</p>
            <p className='fs-17'>It is a far, far better thing that I do, than I have ever done; it is a far, far better rest I go to than I have ever known</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

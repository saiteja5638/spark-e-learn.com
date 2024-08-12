import React, { useState } from 'react';
import '../../App.css';
import Navbar from './Navbar';

const Home = () => {


  return (
    <>
      <Navbar></Navbar>
      <div className='Hero_main_container'  >
        <div className='Hero_page'  >
          <div className='Hero_sub_page' >
            <h1 id="hero-callout" >Empower Your Skills: Learn, Build, and Buy Projects</h1>
            <h3 >Premium Programming Courses and Projects Available</h3>
            <br></br>
            <img src="//s3.us-east-2.amazonaws.com/upskill-school/coding.png" class="coding-img img-fluid" alt=""></img>
          </div>
        </div>
        <div className='Hero_Sub' >
          <div className='Hero_Sub2' >
            <blockquote class="blockquote">
              <h2 class="mb-3">Empower your future with hands-on projects and cutting-edge courses. </h2>
              <p>At our startup, we understand the challenges of finding high-quality, real-time projects without breaking the bank. That's why we offer a wide range of budget-friendly projects, complete with free hosting to get you started right away. But we don't stop there—every project comes with complimentary training classes, ensuring you gain the skills and confidence to succeed.

                Whether you're a student, a budding developer, or someone looking to enhance their portfolio, our platform is your go-to destination. Join us today and take advantage of our affordable rates, hands-on training, and supportive community. Let's build your future, one project at a time!</p>            </blockquote>
          </div>
        </div>
      </div>
      <div className='Hero_courses' >
        <div id="image-ticker">
          <div id="ticker-box-1" class="pt-5pb-5">
            <img src="//s3.us-east-2.amazonaws.com/upskill-school/bootstrap.svg" class="roundedmr-5custom-shadow" alt="" />
            <img src="//s3.us-east-2.amazonaws.com/upskill-school/css.svg" class="roundedmr-5custom-shadow" alt="" />
            <img src="//s3.us-east-2.amazonaws.com/upskill-school/html.svg" class="roundedmr-5custom-shadow" alt="" />
            <img src="//s3.us-east-2.amazonaws.com/upskill-school/javascript.svg" class="roundedmr-5custom-shadow" alt="" />
            <img src="//s3.us-east-2.amazonaws.com/upskill-school/node.svg" class="roundedmr-5custom-shadow" alt="" />
            <img src="//s3.us-east-2.amazonaws.com/upskill-school/rubyonrails.svg" class="roundedmr-5custom-shadow" alt="" />
            <img src="//s3.us-east-2.amazonaws.com/upskill-school/jquery.svg" class="roundedmr-5custom-shadow" alt="" />
            <img src="//s3.us-east-2.amazonaws.com/upskill-school/github.svg" class="roundedmr-5custom-shadow" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

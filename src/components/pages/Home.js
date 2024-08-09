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
            <h1 id="hero-callout" >Learn how to code from scratch.</h1>
            <h3 >Premium Programming Courses</h3>
            <br></br>
            <img src="//s3.us-east-2.amazonaws.com/upskill-school/coding.png" class="coding-img img-fluid" alt=""></img>
          </div>
        </div>
        <div className='Hero_Sub' >
          <div className='Hero_Sub2' >
            <blockquote class="blockquote">
              <h2 class="mb-3">Upskill is a high-quality tech training platform.</h2>
              <h3>Learn fundamental and state-of-the-art programming skills using modern technologies.</h3>
            </blockquote>
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

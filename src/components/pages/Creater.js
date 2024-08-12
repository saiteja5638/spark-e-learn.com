import React from 'react';
import '../../App.css';
import Navbar from './Navbar';
import Carousel from 'react-bootstrap/Carousel';
export default function Creater() {
    return (
        <>
            <Navbar></Navbar>
            <div className='Creat_M_Conatainer' >
                <div className='Hero_sub_page' >
                    <h1 id="hero-callout" > We Build Projects According to Your Requirements will Match Your Vision </h1>
                    <h3 >Your Vision, Our Expertise – Custom Projects Made Just for You</h3>
                    <br></br>
                    <img src="//s3.us-east-2.amazonaws.com/upskill-school/coding.png" class="coding-img img-fluid" alt=""></img>
                </div>
                <div className='Hero_Sub2' >
                    <blockquote class="blockquote">
                        
                        <p>Why settle for one-size-fits-all projects when you can have something designed specifically for you? At our startup, we specialize in creating custom projects that align perfectly with your unique requirements. Whether you have a specific idea in mind or need expert guidance to bring your vision to life, our team is here to help.

                            We work closely with you to understand your needs and deliver a project that not only meets but exceeds your expectations. With our affordable pricing, free hosting, and personalized training sessions, you're not just getting a project—you're getting a complete, tailored experience.

                            Let us turn your ideas into reality. Share your requirements, and we'll take care of the rest!</p>            </blockquote>
                            <h2 class="mb-3" align="center" > Contact : 7036305638  <br></br>Email id :chervirallasaiteja@gmail.com </h2>
                </div>
            </div>
        </>
    )
}
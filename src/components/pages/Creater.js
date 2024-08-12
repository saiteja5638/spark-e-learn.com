import React from 'react';
import '../../App.css';
import Navbar from './Navbar';
import Carousel from 'react-bootstrap/Carousel';
export default function Creater()
{
    return(
        <>
        <Navbar></Navbar>
        <div className='Creat_M_Conatainer' >
            <div className='Creat_Carosuel' >
            <Carousel data-bs-theme="dark" className='Car1' >
                            <Carousel.Item interval={1000} >
                                <img
                                    className='Car'
                                    src="https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={1000} >
                                <img
                                    className='Car'
                                    src="https://images.pexels.com/photos/270488/pexels-photo-270488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    alt="Second slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={1000} >
                                <img
                                    className='Car'
                                    src="https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                        </Carousel>
            </div>
            <div className='Creat_content'  >
                 
            </div>
        </div>
        </>
    )
}
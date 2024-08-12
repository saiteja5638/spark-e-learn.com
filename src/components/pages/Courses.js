import React from 'react';
import '../../App.css';
import Navbar from './Navbar';
import Cour  from '../models/Courses.json';
import CardItem from '../CardItem';
import Cards from '../Cards';
export default function Courses()
{
    return(
        <>
        <Navbar></Navbar>
        <div className='Courses_container'>
        {Cour.map((item, index) => (
          <div className='Proj_container_item' key={index}>
            <CardItem
              src={item.img1}
              text={item.courses}
              label={item.title}
              path={`/view_detail?$cid=${item.id}`}
            />
          </div>
        ))}
      </div>
        </>
    )
}
import React from 'react';
import '../../App.css';
import Navbar from './Navbar';
import modelData  from '../models/projects.json';
import CardItem from '../CardItem';
import Cards from '../Cards';
export default function Services()
{
    return(
        <>
        <Navbar></Navbar>
        <h1 className='Projects_header_h1' >Only a few projects are displayed. There are many more available.</h1>
      <div className='Projects_container'>
        {modelData.map((item, index) => (
          <div className='Proj_container_item' key={index}>
            <CardItem
              src={item.img1}
              text={item.title}
              
              path={`/view_detail?$id=${item.id}`}
            />
          </div>
        ))}
      </div>
        </>
    )
}
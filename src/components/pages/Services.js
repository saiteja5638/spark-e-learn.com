import React from 'react';
import '../../App.css';
import Navbar from './Navbar';
import modelData from '../models/projects.json';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { redirect } from 'react-router-dom';
export default function Services() {
  return (
    <>
      <Navbar></Navbar>
      <h1 className='Projects_header_h1' align="center" >Only a few projects are displayed. There are many more available.</h1>
      <div className='Projects_container' >
        {modelData.map((item, index) => (

          <Card sx={{ maxWidth: 345 }} className='Projects_Card' >
            <CardActionArea>
              <CardMedia
                component="img"
                
                className='Proj_container_item'
                height="140"
                image={item.img1}
                alt="green iguana"
                
              />
              <CardContent>
                <Typography variant="subtitle1" color="text.secondary">
                  {item.title}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </div>

    </>
  )
}
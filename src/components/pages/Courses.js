import React from 'react';
import '../../App.css';
import Navbar from './Navbar';
import Cour from '../models/Courses.json';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
export default function Courses() {
  return (
    <>
      <Navbar></Navbar>
      <div className='Courses_container'>
        <div className='course_items' >
          {Cour.map((item, index) => (

            <Card sx={{ maxWidth: 345 }} className='Projects_Card'  >
              <CardActionArea>
                <CardMedia
                  component="img"
                  className='Proj_container_item'
                  height="140"
                  image={item.img1}
                  alt="green iguana"
                />
                <CardContent>
                  {/* <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography> */}
                  <Typography variant="subtitle1" color="text.secondary">
                    {item.title}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>

          ))}
        </div>
      </div>
    </>
  )
}
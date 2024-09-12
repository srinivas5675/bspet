import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import BuffaloImage from '../assets/images/buffalo.jpg';

export default function buffalos() {
  const buffalosData = [{name:'murra jathi geedha',age:'4years', price:'90,000', customerName:'Vusu', customerPhone:'3423433233', address:'eluru'},
  {name:'natu buffalo',age:'3years', price:'70,000', customerName:'naga', customerPhone:'3423433233', address:'eluru'}];
  
  return (
    <div style={{display: 'flex'}}>
      {buffalosData.map((item) => (
      <Card sx={{ maxWidth: 330, margin:"12px"}}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="auto"
          image={BuffaloImage}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.name}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Age: {item.age}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Price: {item.price}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Address: {item.address}
          </Typography>
        </CardContent>
      </Card>
      ))}
    </div>
  );
}

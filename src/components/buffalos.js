import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import BuffaloImage from '../assets/images/buffalo.jpg';

const BuffaloCard = () => (
  <Card sx={{ maxWidth: 345, margin: '12px' }}>
    <CardMedia
      component="img"
      alt="buffalo"
      height="140"
      image={BuffaloImage}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        Buffalos
      </Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        Buffalos are large, herbivorous mammals known for their strength and
        resilience, often found in grasslands and savannas.
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Share</Button>
      <Button size="small">Learn More</Button>
    </CardActions>
  </Card>
);

export default function BuffaloCards() {
  const cards = [];

  for (let i = 0; i < 12; i++) {
    cards.push(<BuffaloCard key={i} />);
  }

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {cards}
    </div>
  );
}

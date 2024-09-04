import  React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
//import CardHeader from '@mui/material/CardHeader';
// or
import { CardHeader } from '@mui/material';

export default function Header() {
  return (
    <>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
vasu
                    
                </IconButton>

                <Typography
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1 }}
                >
                    GeeksforGeeks Header
                </Typography>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </>
  );
}
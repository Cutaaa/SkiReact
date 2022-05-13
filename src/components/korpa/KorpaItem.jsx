import { Box, Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material';
import React from 'react';

const KorpaItem = ({skije}) => {
  return <Card style={{padding:'20px',maxWidth:'400px'}}>
      <CardHeader title={<Typography variant='h4'>{skije.model}</Typography>}/>
      <Box><img style={{margin:'20px'}} src={skije.slikaUrl}/></Box>
       <Typography variant='p'>
       {skije.specifikacije}
       </Typography>
       <CardContent>{skije.brojPonavljanja}</CardContent>
  </Card>;
};

export default KorpaItem;
import React, { useContext } from 'react';
import { SkijeContext } from '../../store/SkijeContext';
import KorpaItem from './KorpaItem';
import { Grid, Typography,Box } from '@mui/material';

const KorpaList = () => {

    const skijeCtx=useContext(SkijeContext);
    const skije=skijeCtx.skije;

  return <Grid container style={{width:'100%',marginTop:'6rem'}}>
      {skije.length>0?skije.map(s=>{
          return <Grid style={{margin:'30px'}}  item xs={4} key={s.id}>
              <KorpaItem skije={s}/>
          </Grid>
      }):<Box style={{textAlign:'center'}}><Typography style={{marginTop:'5rem',color:'black',marginLeft:'2rem'}} variant='h3'>Niste dodali skije u korpu!</Typography></Box>}
      </Grid>
    };
  

export default KorpaList;
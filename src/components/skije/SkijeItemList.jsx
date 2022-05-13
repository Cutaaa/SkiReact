import { Grid } from '@mui/material';
import React from 'react';
import SkijeItem from './SkijeItem';
import '../../App.css'

const SkijeItemList = ({skije}) => {
    return(
        <div style={{marginTop:'8rem'}} className="all-skies">
            <Grid container style={{marginLeft:'auto',marginRight:'auto',width:'80%'}}>
        {skije.map((skije) => (
            <Grid item xs={4} key={skije.id}  >
                <SkijeItem skije={skije} />
            </Grid>

        ))}

            </Grid>


        </div>
   );
};

export default SkijeItemList;
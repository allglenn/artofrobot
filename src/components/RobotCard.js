import * as React from 'react';

import {CardContent, CardMedia, Grid, Typography } from '@mui/material';

const  RobotCard = ({ id,name,description,img}) => {
    return  ( 
        <Grid container sx={{ margin: 5, maxWidth: 250 }} alignItems="center">
            <CardMedia
            component={'img'}
                image={img}
            height="150"
            alt='robot'
            />
            <CardContent>
                <Typography gutterBottom variant='h5' component={'div'}>
                    {name}
                </Typography>
                <Typography variant='body2' color='textSecondary' component={'div'}>
                    {description}
                </Typography>
            </CardContent>
        </Grid> 
        )
    
}
 
export default RobotCard;
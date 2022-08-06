import { Box, Grid, Paper, Typography } from '@mui/material';
import * as React from 'react';
import RobotCard from './RobotCard';
import ScrollableList from './ScrollableList';
import SearchBox from './SearchBox';



const RobotCardList = ({ robots }) => {
    const [robotsList, setRobotsList] = React.useState(robots);

    const handleSearch = (e) => {
        setRobotsList(robots.filter(robot => robot.name.toLowerCase().includes(e.toLowerCase())));
    }

    return (
        <div>
            
            <Grid container spacing={2}>
                <Grid item xs={12} textAlign={"center"}  >
                    <Typography variant='h1' >
                        Art of Robot
                    </Typography>                
                    </Grid>
                <Grid item xs={12} align={"center"} >
                    <SearchBox onSearch={handleSearch} />
                </Grid>
            </Grid>
            <ScrollableList>

            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} >
                    {
                        robotsList.map((item,index) =>
                            <Grid item xs={2} key={index.toString()} >
                                <Paper elevation={3} key={index.toString()}>
                                    <RobotCard key={index.toString()} name={item.name} description={item.description} img={item.img} />
                                </Paper>
                            </Grid>

                        )
                    }
                </Grid>
            </Box>
            </ScrollableList>

        </div>
    );
    }

    export default RobotCardList;
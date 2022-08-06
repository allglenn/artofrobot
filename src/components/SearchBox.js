import { TextField, Grid } from '@mui/material';
import * as React from 'react';

const SearchBox = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = React.useState('');

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
        onSearch(e.target.value);
    }


    return (
            <Grid>
            <TextField type="text" value={searchTerm} onChange={handleChange} />
            </Grid>
    );
}

export default SearchBox;
    
    
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const SortSelect = () => {
    const [sortMetod, setSortMetod] = React.useState('');

    const handleChange = event => {
        setSortMetod(event.target.value);
    };

    return (
        <Box sx={{ minWidth: 220 }}>
            <FormControl fullWidth sx={{ color: 'text.secondary' }}>
                <InputLabel size="small" id="demo-simple-select-label">
                    Sort by:
                </InputLabel>
                <Select
                    size="small"
                    labelId="demo-simple-select-label"
                    id="sort_by"
                    value={sortMetod}
                    label="Sort by"
                    onChange={handleChange}
                    sx={{ color: 'text.secondary' }}
                >
                    <MenuItem sx={{ color: 'text.secondary' }} selected={true} value={''}>
                        <em>None</em>
                    </MenuItem>
                    <MenuItem sx={{ color: 'text.secondary' }} value={'popularity.asc'}>
                        popularity.asc
                    </MenuItem>
                    <MenuItem sx={{ color: 'text.secondary' }} value={'popularity.desc'}>
                        popularity.desc
                    </MenuItem>
                    <MenuItem sx={{ color: 'text.secondary' }} value={'vote_average.asc'}>
                        vote_average.asc
                    </MenuItem>
                    <MenuItem sx={{ color: 'text.secondary' }} value={'vote_average.desc'}>
                        vote_average.desc
                    </MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
};

export default SortSelect;

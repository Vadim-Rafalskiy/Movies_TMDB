import { SORT_OPTIONS } from '../../../const.js';
import { FormattedMessage } from 'react-intl';
import React from 'react';
import { Field } from 'react-final-form';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

function SortSelect() {
    return (
        <Field
            name="sort_by"
            render={({ input }) => (
                <FormattedMessage id="filter.sort_by">
                    {placeholder => (
                        <FormControl sx={{ minWidth: 140, mr: '10px' }}>
                            <InputLabel id="demo-simple-select-label">{placeholder}</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                autoWidth
                                size="small"
                                value={'sort_by'}
                                label="sort_by"
                                {...input}
                            >
                                {SORT_OPTIONS.map(({ label, value }) => (
                                    <MenuItem key={value} value={value}>
                                        <FormattedMessage
                                            id={`filter.sort.${label}`}
                                        ></FormattedMessage>
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    )}
                </FormattedMessage>
            )}
        />
    );
}

export default SortSelect;

import { SORT_OPTIONS } from '../../../const.js';
import { FormattedMessage } from 'react-intl';
// import React from 'react';
import { Field } from 'react-final-form';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

export const SortSelect = () => {
    return (
        <Field
            name="sort_by"
            render={({ input }) => (
                <FormattedMessage id="filter.sort_by">
                    {placeholder => (
                        <FormControl sx={{ width: '100%', mr: '10px' }}>
                            <InputLabel id="demo-simple-select-label">{placeholder}</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                autoWidth
                                label={placeholder}
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
};

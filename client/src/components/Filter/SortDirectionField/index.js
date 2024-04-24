import { Field } from 'react-final-form';
import { FormattedMessage } from 'react-intl';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

import { SORT_DIRECTION } from '../../../const';

export const SortDirectionField = () => {
    return (
        <Field
            name="sortDirection"
            render={({ input }) => (
                <FormattedMessage id="filter.sort.sort_direction">
                    {placeholder => (
                        <FormControl
                            required
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                gap: '10px',
                                alignItems: 'center',
                            }}
                        >
                            <FormLabel id="sort_direction">{placeholder}</FormLabel>
                            <RadioGroup row name="sort_direction" {...input}>
                                <FormControlLabel
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'baseline',
                                    }}
                                    value={SORT_DIRECTION.ASC}
                                    control={<Radio sx={{ paddingRight: '0px' }} />}
                                    label={
                                        <ArrowUpwardIcon />
                                        // <FormattedMessage id="filter.sort_direction_options.asc"></FormattedMessage>
                                    }
                                />
                                <FormControlLabel
                                    sx={{ display: 'flex', alignItems: 'baseline' }}
                                    value={SORT_DIRECTION.DESC}
                                    control={<Radio sx={{ paddingRight: '0px' }} />}
                                    label={
                                        // <FormattedMessage id="filter.sort_direction_options.desc"></FormattedMessage>
                                        <ArrowDownwardIcon />
                                    }
                                />
                            </RadioGroup>
                        </FormControl>
                    )}
                </FormattedMessage>
            )}
        />
    );
};

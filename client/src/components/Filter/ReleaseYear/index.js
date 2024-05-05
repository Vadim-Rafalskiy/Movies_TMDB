import { TextField } from '@mui/material';
import { Field } from 'react-final-form';
import { FormattedMessage } from 'react-intl';

export const ReleaseYear = () => {
    return (
        <Field
            name="primary_release_year"
            render={({ input, meta }) => (
                <>
                    <TextField
                        id="outlined-basic"
                        label={<FormattedMessage id="filter.input_release_year"></FormattedMessage>}
                        inputProps={{
                            type: 'text',
                            inputMode: 'numeric',
                            pattern: '[0-9]*',
                        }}
                        sx={{ width: '100%' }}
                        size="small"
                        {...input}
                    />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                </>
            )}
        />
    );
};


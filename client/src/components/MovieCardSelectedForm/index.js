import * as React from 'react';
import { Box, Divider, IconButton, InputBase, Paper } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import { Form, Field } from 'react-final-form';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types'

const validate = value => (value ? undefined : 'Required');

const MovieCardSelectedForm = ({ onSubmit }) => {
    return (
        <Box sx={{ alignSelf: 'stretch' }}>
            <Form
                onSubmit={onSubmit}
                render={({ handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <Paper elevation={2} sx={{ mt: 1, display: 'flex', p: '4px 8px' }}>
                            <Field name="listName" validate={validate}>
                                {({ input, meta }) => (
                                    <>
                                        <FormattedMessage id="input_selected_section">
                                            {placeholder_1 => (
                                                <InputBase
                                                    placeholder_1={placeholder_1}
                                                    inputProps={{ 'aria-label': 'put list name' }}
                                                    sx={{ flex: 1 }}
                                                    {...input}
                                                />
                                            )}
                                        </FormattedMessage>
                                        {meta.error && meta.touched && <span>{meta.error}</span>}
                                    </>
                                )}
                            </Field>

                            <Divider sx={{ height: 30, m: 0.5 }} orientation="vertical" />
                            <IconButton type="submit" color="primary" aria-label="directions">
                                <CheckIcon />
                            </IconButton>
                        </Paper>
                    </form>
                )}
            />
        </Box>
    );
};

MovieCardSelectedForm.propTypes={
    onSubmit: PropTypes.func.isRequired,
}

export default MovieCardSelectedForm;

import * as React from 'react';
import { Box, Divider, IconButton, InputBase, Paper } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import { Form, Field } from 'react-final-form';

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
                                        <InputBase
                                            placeholder="Put the list name"
                                            inputProps={{ 'aria-label': 'put list name' }}
                                            sx={{ flex: 1 }}
                                            {...input}
                                        />
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

export default MovieCardSelectedForm;

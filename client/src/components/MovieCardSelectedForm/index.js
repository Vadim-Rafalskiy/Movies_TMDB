import * as React from 'react';
// import { render } from 'react-dom';
import { Divider, IconButton, InputBase, Paper } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import { Form, Field } from 'react-final-form';

const MovieCardSelectedForm = ({ onSubmit }) => {
  return (
    <Form
      onSubmit={onSubmit}
      validate={values => {
        const errors = {};
        if (!values.listName) {
          errors.username = 'Required';
        }
        return errors;
      }}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Paper elevation={2} sx={{ mt: 1, display: 'flex', alignSelf: 'stretch', p: '4px 8px' }}>
            <Field
              name="listName"
              render={({ input, meta }) => (
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
            />

            <Divider sx={{ height: 30, m: 0.5 }} orientation="vertical" />
            <IconButton type="submit" color="primary" aria-label="directions">
              <CheckIcon />
            </IconButton>
          </Paper>
        </form>
      )}
    />
  );
};

export default MovieCardSelectedForm;

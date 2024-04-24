import { TextField } from '@mui/material';
import { Field } from 'react-final-form';
import { FormattedMessage } from 'react-intl';

const FormField = ({ name, id, ...props }) => {
    return (
        <Field
            name={name}
            render={({ input, meta }) => (
                <>
                    <TextField
                        id="outlined-basic"
                        label={<FormattedMessage id={id}></FormattedMessage>}
                        {...props}
                        {...input}
                        size="small"
                    />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                </>
            )}
        />
    );
};

export default FormField;

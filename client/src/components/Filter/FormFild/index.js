import { TextField } from '@mui/material';
import { Field } from 'react-final-form';
import { FormattedMessage } from 'react-intl';

const FormField = ({ name, id, sx }) => {
    return (
        <Field name={name}>
            {({ input, meta }) => (
                <>
                    <FormattedMessage id={id}>
                        {label => <TextField size="small" label={label} sx={sx} {...input} />}
                    </FormattedMessage>
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                </>
            )}
        </Field>
    );
};

export default FormField;

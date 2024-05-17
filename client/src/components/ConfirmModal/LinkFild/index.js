import * as React from 'react';
import PropTypes from 'prop-types';

import { InputBase, IconButton, Paper } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { toast } from 'react-toastify';
import translate from '../../../utils/translate';

const LinkFild = ({ link }) => {
    return (
        <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
        >
            <InputBase sx={{ ml: 1, flex: 1 }} value={link} />

            <CopyToClipboard
                text={link}
                onCopy={() => toast.success(translate('toast.link_copied'))}
            >
                <IconButton type="button" sx={{ p: '10px' }} aria-label="copy to clipboard">
                    <ContentCopyIcon color="primary" />
                </IconButton>
            </CopyToClipboard>
        </Paper>
    );
};

LinkFild.propTypes={
    link: PropTypes.string.isRequired,
}

export default LinkFild;

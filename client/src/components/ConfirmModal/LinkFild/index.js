import * as React from 'react';
import { InputBase, Divider, IconButton, Paper } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { toast } from 'react-toastify';

const LinkFild = ({ link }) => {
  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
    >
      <InputBase sx={{ ml: 1, flex: 1 }} value={link} />

      <CopyToClipboard text={link} onCopy={() => toast.success('Link copied!')}>
        <IconButton type="button" sx={{ p: '10px' }} aria-label="copy to clipboard">
          <ContentCopyIcon color="primary" />
        </IconButton>
      </CopyToClipboard>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton
        href="/recommend"
        // href={link}
        target="_blank"
        color="primary"
        sx={{ p: '10px' }}
        aria-label="preview"
      >
        <VisibilityIcon color="primary" />
      </IconButton>
    </Paper>
  );
};

export default LinkFild;

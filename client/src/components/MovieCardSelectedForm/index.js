import { Divider, IconButton, InputBase, Paper } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

const MovieCardSelectedForm = () => {
  return (
    <Paper elevation={2} sx={{ mt: 1, display: 'flex', alignSelf: 'stretch', p: '4px 8px' }}>
      <InputBase
        placeholder="Put the list name"
        inputProps={{ 'aria-label': 'put list name' }}
        sx={{ flex: 1 }}
      />
      <Divider sx={{ height: 30, m: 0.5 }} orientation="vertical" />
      <IconButton color="primary" aria-label="directions">
        <CheckIcon />
      </IconButton>
    </Paper>
  );
};

export default MovieCardSelectedForm;

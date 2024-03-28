import PropTypes from 'prop-types';

import { Backdrop, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

const CardBackdrop = ({ open, children, onClick }) => {
  const BackdropCard = styled(Backdrop)(({ theme }) => ({
    // color: '#ffffff',
    color: 'rgba(0, 0, 0, 0.3)',
    position: 'absolute',
    zIndex: theme => theme.zIndex.drawer + 1,
  }));

  return (
    <div style={{ position: 'relative' }}>
      <BackdropCard open={open}>
        <IconButton
          sx={{
            borderRadius: '50%',
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            position: 'absolute',
            top: 'auto',
            right: 'auto',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
            },
          }}
          //   aria-haspopup="true"
          onClick={onClick}
        >
          <AddCircleOutlineOutlinedIcon />
        </IconButton>
      </BackdropCard>
      {children}
    </div>
  );
};

CardBackdrop.propTypes = {
  open: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CardBackdrop;

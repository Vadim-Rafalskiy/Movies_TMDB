import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import LinkFild from './LinkFild';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 450,
  bgcolor: 'background.paper',
  border: '2px solid #b4b4b8',
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

const ConfirmModal = ({ title, link, onOpen, handleModalClose }) => {
  return (
    <div>
      <Modal
        open={onOpen}
        onClose={handleModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            mb={2}
            component="h2"
            sx={{ textAlign: 'center' }}
          >
            {title}
          </Typography>
          <LinkFild link={link} />
        </Box>
      </Modal>
    </div>
  );
};

export default ConfirmModal;
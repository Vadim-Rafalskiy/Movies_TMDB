import * as React from 'react';
import PropTypes from 'prop-types';

import { Typography, Modal, Box } from '@mui/material';

import LinkFild from './LinkFild';
import { SocialShare } from '../../components';

const ConfirmModal = ({ title, link, onOpen, handleModalClose }) => {
    return (
        <div>
            <Modal
                open={onOpen}
                onClose={handleModalClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box
                    sx={{
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
                    }}
                >
                    <Typography
                        id="modal-modal-title"
                        variant="h6"
                        mb={2}
                        component="h2"
                        align='center'
                    >
                        {title}
                    </Typography>
                    <LinkFild link={link} />
                    <Box
                        sx={{
                            mt: '10px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <SocialShare
                            sx={{ gap: '10px' }}
                            direction="row"
                            title={title}
                            link={link}
                        />
                    </Box>
                </Box>
            </Modal>
        </div>
    );
};

ConfirmModal.propTypes={
    title:PropTypes.string.isRequired,
    link:PropTypes.string.isRequired,
    onOpen: PropTypes.bool.isRequired,
    handleModalClose: PropTypes.func.isRequired

}

export default ConfirmModal;

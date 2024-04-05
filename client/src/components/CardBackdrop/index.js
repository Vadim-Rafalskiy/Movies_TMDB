import PropTypes from 'prop-types';

import { Backdrop, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';

const CardBackdrop = ({ open, children, onClick }) => {
    const BackdropCard = styled(Backdrop)(({ theme }) => ({
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
                        position: 'absolute',
                        top: 'auto',
                        right: 'auto',
                    }}
                    aria-haspopup="true"
                    onClick={onClick}
                >
                    <AddBoxOutlinedIcon sx={{ fill: '#fff', width: '80px', height: '80px' }} />
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

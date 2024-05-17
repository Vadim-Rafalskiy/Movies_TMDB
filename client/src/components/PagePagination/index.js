import { Box, Pagination, styled } from '@mui/material';
import PropTypes from 'prop-types'

const PagePagination = ({ pageCount, page, paginationHandler }) => {
    const NewPagination = styled(Pagination)(({ theme }) => ({
        padding: theme.spacing(1),
        border: '1px solid #a6a6a6',
        borderRadius: '5px',
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        size: 'large',
        variant: 'outlined',
        color: 'primary',
        [theme.siblingCount]: '0',
    }));

    return (
        <Box sx={{ flexGrow: 1, padding: 1, display: 'flex', justifyContent: 'center' }}>
            <NewPagination
                siblingCount={0}
                onChange={paginationHandler}
                page={page}
                count={pageCount}
            />
        </Box>
    );
};

PagePagination.defaultProps = {
    pageCount: 1,
    page: 1,
};

PagePagination.propTypes={
    pageCount: PropTypes.number.isRequired,
    page: PropTypes.number.isRequired,
    paginationHandler: PropTypes.func.isRequired,
}

export default PagePagination;

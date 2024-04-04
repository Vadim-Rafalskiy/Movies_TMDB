import { Box, Pagination, styled } from '@mui/material';

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

export default PagePagination;

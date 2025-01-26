import CloseIcon from '@mui/icons-material/Close';
import { Box, IconButton, Modal, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Typography } from '@mui/material';
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import RenderPattern from "../../Pages/RenderPattern";
import RenderRotatePattern from "../../Pages/RenderRotatePattern";
import RenderWithRectPattern from "../../Pages/RenderWithRectPattern";

const SignalModal = ({ open, handleClose, selectedPattern, activatedColor, activatedIndex }) => {

    const colorIndexes = useSelector((state) => state.signal.colorIndexes);
    const [tableRows, setTableRows] = useState([]); 
    const [page, setPage] = useState(0); 
    const [rowsPerPage, setRowsPerPage] = useState(11); 

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width:"90%",
        maxHeight: '85vh',
        overflow: 'auto',
        bgcolor: 'background.paper',
        boxShadow: 24,
        pt: 2,
        px: 4,
        pb: 3,
        borderRadius: '15px',
    };


    const formatDate = () => {
        const date = new Date();
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const ampm = hours >= 12 ? 'pm' : 'am';
        const hour12 = hours % 12 || 12;
        return `${day}/${month}/${year} ${hour12}:${minutes} ${ampm}`;
    };




    useEffect(() => {
        const newRow = {
            color: selectedPattern.lights[colorIndexes[activatedIndex]],
            time: formatDate()
        };
        setTableRows((prevRows) => [newRow, ...prevRows]);
    }, [colorIndexes]);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0); 
    };


    return (
        <Modal open={open} onClose={handleClose} aria-labelledby="child-modal-title" aria-describedby="child-modal-description">
            <Box sx={{ ...style, position: 'relative' }}>
                <IconButton
                    onClick={handleClose}
                    sx={{
                        position: 'absolute',
                        top: 8,
                        right: 8,
                        color: 'black'
                    }}
                >
                    <CloseIcon />
                </IconButton>

                <Typography variant="h6" sx={{ textAlign: 'right', marginTop: '40px' }}>
                    {formatDate()}
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "90%", margin: "auto", flexDirection: { xs: "column", sm: "row" }  }}>
                    <Box sx={{ width: { xs: "100%", sm: "25%" } }}>
                        {selectedPattern && (
                            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "20px" }}>
                                {selectedPattern.type === "default" && <RenderPattern pattern={selectedPattern} cardIndex={activatedIndex} colorIndexes={colorIndexes} lightStyles={lightStyles} />}
                                {selectedPattern.type === "with-rect" && <RenderWithRectPattern pattern={selectedPattern} cardIndex={activatedIndex} colorIndexes={colorIndexes} lightStyles={lightStyles} />}
                                {selectedPattern.type === "rotate" && <RenderRotatePattern pattern={selectedPattern} cardIndex={activatedIndex} colorIndexes={colorIndexes} lightStyles={lightStyles} />}
                            </Box>
                        )}
                    </Box>
                    <Box sx={{ width: { xs: "100%", sm: "70%" } }} >
                        <TableContainer sx={{ marginTop: "20px", borderRadius: "8px", overflow: "hidden", border: "2px solid #ccc" }}>
                            <Table sx={{ borderCollapse: "collapse", width: "100%" }}>
                                <TableHead>
                                    <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
                                        <TableCell sx={{ borderBottom: "2px solid black", padding: "9px" }}>Active Color</TableCell>
                                        <TableCell sx={{ borderBottom: "2px solid black", padding: "9px" }}>Date & Time</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {tableRows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                        .filter((_, index, array) => index !== array.length - 1) 
                                        .map((row, index) => (
                                            <TableRow key={index} sx={{ borderBottom: "1px solid #ddd" }}>
                                                <TableCell sx={{ padding: "9px", borderRight: "1px solid #ddd" }}>{row.color}</TableCell>
                                                <TableCell sx={{ padding: "9px" }}>{row.time}</TableCell>
                                            </TableRow>
                                        ))}
                                </TableBody>
                            </Table>
                        </TableContainer>


                    
                        {tableRows.length > rowsPerPage && (
                            <TablePagination
                                rowsPerPageOptions={[10]}
                                component="div"
                                count={tableRows.length - 2}
                                rowsPerPage={rowsPerPage - 1}
                                page={page}
                                onPageChange={handleChangePage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                            />
                        )}
                    </Box>
                </Box>



            </Box>
        </Modal>
    );
};

const lightStyles = (lightIndex, currentColor, colorIndex) => ({
    width: 40,
    height: 40,
    backgroundColor: lightIndex === colorIndex ? currentColor : "lightgray",
    borderRadius: "50%",
    transition: "background-color 0.5s ease",
});

export default SignalModal;

import { Box, Modal, Typography } from "@mui/material";

const PopupWindow = ({open, onClose}) => {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };     
      
    return (
        <Modal open={open} onClose={onClose}>
            <Box sx={style}>            
                <Typography variant="h6">
                    Test header
                </Typography>
                <Typography sx={{ mt: 2 }}>
                    test context
                </Typography>
            </Box>
        </Modal>
    );
}

export default PopupWindow;
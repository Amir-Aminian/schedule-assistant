import { Box, Button, Chip, Modal, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import SetTask from "../../utilities/SetTask";
import InputForm from "../../forms/InputForm";
import { DateRange } from "@mui/icons-material";

const PopupWindow = ({open, onClose, date}) => {
    const user = localStorage.getItem("userName");
    
    const {control, handleSubmit} = useForm();

    const submit = (data) => {
        SetTask({user: user, data:[[date, data]]});
        // window.location.reload();
    };

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
                <form onSubmit={handleSubmit(submit)}>
                    <Chip label={user} variant="outlined" />
                    <DateRange />
                    <Typography>{date[0]} {date[1]} {date[2]}</Typography>
                    <InputForm type="text" id="taskTitle" label="Task Title" control={control} rules={{required: "This field is required"}} />
                    <InputForm type="time" id="startTime" label="Task Start Time" control={control} rules={{required: "This field is required"}} />
                    <InputForm type="time" id="endTime" label="Task End Time" control={control} rules={{required: "This field is required"}} />
                    <InputForm type="text" id="taskDescription" label="Task Description" control={control} rules={{required: "This field is required"}} />
                    <Button type="submit" variant="contained" size="small" sx={{mb: 4}}>Done</Button>
                </form>
            </Box>
        </Modal>
    );
}

export default PopupWindow;
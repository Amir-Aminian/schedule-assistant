import { Avatar, Badge, Box, Button, Chip, Fab, Modal, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import SetTask from "../../utilities/SetTask";
import InputForm from "../../forms/InputForm";
import { DateRange } from "@mui/icons-material";
import { Stack } from "@mui/system";
import { useState } from "react";

const PopupWindow = ({open, onClose, date}) => {
    const user = localStorage.getItem("userName");
    
    const {control, handleSubmit} = useForm();

    const[color, setColor] = useState("rgb(66, 133, 244)");

    const[colorLabel, setColorLabel] = useState("Blue");

    const submit = (data) => {
        SetTask({user: user, date: new Date(date).getTime(), task: data, color:color});        
        window.location.reload();
    };

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: "30%",
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };     
      
    return (
        <Modal open={open} onClose={onClose}>
            <Box sx={style}>            
                <form onSubmit={handleSubmit(submit)}>
                    <Stack direction="column" spacing={2}>
                        <Avatar sx={{backgroundColor:"rgb(0, 114, 181)"}}></Avatar>
                        <Chip label={user} variant="outlined" sx={{width:"30%"}} />
                        <Stack direction="row" spacing={1}>
                            <DateRange />
                            <Typography>{date[0]}, {date[1]} {date[2]} {date[3]}</Typography>
                        </Stack>                    
                        <InputForm type="text" id="taskTitle" label="Task Title" control={control} rules={{required: "This field is required"}} />
                        <InputForm type="time" id="startTime" label="Task Start Time" control={control} rules={{required: "This field is required"}} />
                        <InputForm type="time" id="endTime" label="Task End Time" control={control} rules={{required: "This field is required"}} />
                        <InputForm type="text" id="taskDescription" label="Task Description" control={control} rules={{required: "This field is required"}} />
                        <Stack direction="row" spacing={2}>
                            <Typography>Pick a color for this task:</Typography>
                            <Badge badgeContent="" sx={{"& .MuiBadge-badge":{backgroundColor:color}}}>
                                <Chip label={colorLabel} />  
                            </Badge>                         
                        </Stack>
                        <Stack direction="row" spacing={2}>
                            <Fab onClick={() => {setColor("rgb(66, 133, 244)"); setColorLabel("Blue")}} size="small" sx={{backgroundColor:"rgb(66, 133, 244)"}} />
                            <Fab onClick={() => {setColor("rgb(219, 68, 55)"); setColorLabel("Red")}} size="small" sx={{backgroundColor:"rgb(219, 68, 55)"}} />
                            <Fab onClick={() => {setColor("rgb(244, 180, 0)"); setColorLabel("Yellow")}} size="small" sx={{backgroundColor:"rgb(244, 180, 0)"}} />
                            <Fab onClick={() => {setColor("rgb(15, 157, 88)"); setColorLabel("Green")}} size="small" sx={{backgroundColor:"rgb(15, 157, 88)"}} />
                        </Stack>
                        <Button type="submit" variant="contained" size="small" sx={{mb: 4}}>Done</Button>
                    </Stack>
                </form>
            </Box>
        </Modal>
    );
}

export default PopupWindow;
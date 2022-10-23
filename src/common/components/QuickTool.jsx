import {Box, SpeedDial,SpeedDialIcon, SpeedDialAction} from "@mui/material";
import {FileCopy, Save,  Print,  Share} from "@mui/icons-material"
import {useState} from "react";

const actions = [
    {icon: <FileCopy/>, name: 'Copy'},
    {icon: <Save/>, name: 'Save'},
    {icon: <Print/>, name: 'Print'},
    {icon: <Share/>, name: 'Share'},
];

export const QuickTool = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Box sx={{height: 320, transform: 'translateZ(0px)', flexGrow: 1}}>
            <SpeedDial
                ariaLabel="SpeedDial uncontrolled open example"
                sx={{position: 'absolute', bottom: 16, right: 16}}
                icon={<SpeedDialIcon/>}
                onClose={handleClose}
                onOpen={handleOpen}
                open={open}
            >
                {actions.map((action) => (
                    <SpeedDialAction
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                        onClick={handleClose}
                    />
                ))}
            </SpeedDial>
        </Box>
    );
}
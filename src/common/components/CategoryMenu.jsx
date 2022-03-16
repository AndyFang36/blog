import {Drafts, ExpandLess, ExpandMore, Inbox, Send, StarBorder} from "@mui/icons-material";
import {Collapse, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader} from "@mui/material";
import {useState} from "react";

export const CategoryMenu = () => {
    const [open, setOpen] = useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <List
            className="category-menu"
            sx={{width: "100%", maxWidth: 360,}}
            component='nav'
            aria-labelledby='nested-list-subheader'
            subheader={
                <ListSubheader component='div' id='nested-list-subheader'>
                    Nested List Items
                </ListSubheader>
            }
        >
            <ListItemButton>
                <ListItemIcon><Send/></ListItemIcon>
                <ListItemText primary='Sent mail'/>
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon><Drafts/></ListItemIcon>
                <ListItemText primary='Drafts'/>
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon><Send/></ListItemIcon>
                <ListItemText primary='Sent mail'/>
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon><Drafts/></ListItemIcon>
                <ListItemText primary='Drafts'/>
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon><Send/></ListItemIcon>
                <ListItemText primary='Sent mail'/>
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon><Drafts/></ListItemIcon>
                <ListItemText primary='Drafts'/>
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon><Send/></ListItemIcon>
                <ListItemText primary='Sent mail'/>
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon><Drafts/></ListItemIcon>
                <ListItemText primary='Drafts'/>
            </ListItemButton>
            <ListItemButton onClick={handleClick}>
                <ListItemIcon><Inbox/></ListItemIcon>
                <ListItemText primary='Inbox'/>{open ? <ExpandLess/> : <ExpandMore/>}
            </ListItemButton>
            <Collapse in={open} timeout='auto' unmountOnExit>
                <List component='div' disablePadding>
                    <ListItemButton sx={{pl: 4}}>
                        <ListItemIcon><StarBorder/></ListItemIcon>
                        <ListItemText primary='Starred'/>
                    </ListItemButton>
                    <ListItemButton sx={{pl: 4}}>
                        <ListItemIcon><StarBorder/></ListItemIcon>
                        <ListItemText primary='Starred'/>
                    </ListItemButton>
                    <ListItemButton sx={{pl: 4}}>
                        <ListItemIcon><StarBorder/></ListItemIcon>
                        <ListItemText primary='Starred'/>
                    </ListItemButton>
                    <ListItemButton sx={{pl: 4}}>
                        <ListItemIcon><StarBorder/></ListItemIcon>
                        <ListItemText primary='Starred'/>
                    </ListItemButton>
                    <ListItemButton sx={{pl: 4}}>
                        <ListItemIcon><StarBorder/></ListItemIcon>
                        <ListItemText primary='Starred'/>
                    </ListItemButton>
                </List>
            </Collapse>
        </List>
    );
};
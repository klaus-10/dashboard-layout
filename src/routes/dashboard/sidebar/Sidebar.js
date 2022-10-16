import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
// import Icon from "../../../components/Icon";
import { Icon } from "@mui/material/";

// import * as MuiIcons from "@mui/icons-material";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";

import elements from "./Sidebar.json";

import "./Sidebar.css";
import { ListItem } from "@mui/material";

export default function Sidebar(props) {
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <div className={props.open === true ? "sidebar open" : "sidebar close"}>
      {/* {!props.mediaQy && <p onClick={props.close}>Close ICON</p>} */}
      <Box
        sx={{
          width: "100%",
          maxWidth: 360,
        }}
      >
        <ListItem className="sidebar-logo">
          <ListItemIcon className="sidebar-logo-icon">
            <InboxIcon className="slide-icon" />
          </ListItemIcon>
        </ListItem>

        <div style={{ padding: "10px 20px" }}>
          <ListItem className="sidebar-logo-admin">
            <Avatar sx={{ bgcolor: "#637b92" }}>
              {/* <NotificationsIcon /> */}A
            </Avatar>
            <ListItemText className="slide-admin-text" primary="Admin" />
          </ListItem>
        </div>
        <List component="nav" aria-label="main mailbox folders">
          <ListItem></ListItem>
          <ListItem></ListItem>

          {elements.sidebar.map((el, index) => (
            // <div>
            //   <h5>{el}</h5>
            // </div>
            <ListItemButton
              key={index}
              selected={selectedIndex === index}
              onClick={(event) => handleListItemClick(event, index)}
            >
              <ListItemIcon>
                {/* <InboxIcon className="slide-icon" /> */}
                {/* <FontAwesomeIcon className="slide-icon" icon={el?.icon}/> */}
                {/* <Icon icon={el.name} /> */}
                <Icon
                  fontSize="small"
                  className={selectedIndex === index ? "googleIconColor" : ""}
                >
                  {el.icon}
                </Icon>
                {/* <Icon fontSize="small">add_circle</Icon> */}
              </ListItemIcon>
              <ListItemText className="slide-text" primary={el.text} />
            </ListItemButton>
          ))}
        </List>
      </Box>
    </div>
  );
}

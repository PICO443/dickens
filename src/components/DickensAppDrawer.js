import { Divider, IconButton, List, Toolbar } from "@mui/material";
import React from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { Drawer } from "./mui material-ui v5.14.15 docs-data_material_getting-started_templates_dashboard/Dashboard";
import DrawerListItem from "./DrawerListItem";
import { Dashboard } from "@mui/icons-material";
import { School } from "@mui/icons-material"

export default function DickensAppDrawer({ open, toggleDrawer }) {
  return (
    <Drawer variant="permanent" open={open}>
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          px: [1],
        }}
      >
        <IconButton onClick={toggleDrawer}>
          <ChevronLeftIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      <List component="nav">
        <React.Fragment>
          <DrawerListItem
            icon={<Dashboard />}
            label={"Dashbaord"}
            route="/Dashboard"
          />
          <DrawerListItem
            icon={<School />}
            label={"Courses"}
            route="/Courses"
          />
          <DrawerListItem
            icon={<School />}
            label={"Students"}
            route="/Students"
          />
          <DrawerListItem
            icon={<School />}
            label={"Students"}
            route="/Students"
          />
        </React.Fragment>
        <Divider sx={{ my: 1 }} />
        {/* {secondaryListItems} */}
      </List>
    </Drawer>
  );
}

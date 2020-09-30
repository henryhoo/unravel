import React from "react";
import { Link } from "components/Router";
import { useSiteData } from "react-static";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import IconDashboard from "@material-ui/icons/Dashboard";
import { makeStyles } from "@material-ui/core/styles";
import AppMenuItem from "./AppMenuItem";

function Nav() {
  const routeMap = useSiteData().routeMap;
  const classes = useStyles();

  let itemList = [];
  for (const root in routeMap) {
    let items = [];
    routeMap[root].forEach((child) => {
      items.push(
        {
          name: child,
        }
      );
    });

    itemList.push(
      <AppMenuItem name={root} icon={IconDashboard} items={items}></AppMenuItem>
    );
  }

  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <List component="nav" className={classes.appMenu} disablePadding>
        {itemList}
      </List>
    </Drawer>
  );
}

const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    position: "fixed",
    width: "20%",
    height: "100%",
    background: "#535454",
    color: "#fff",
  },
  appMenu: {
    width: "100%",
  },
  menuItem: {
    width: "20%",
  },
}));

export default Nav;

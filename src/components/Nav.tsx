import type { AppMenuItemProps } from "./AppMenuItem";

import React from "react";
import { useSiteData } from "react-static";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import IconDashboard from "@material-ui/icons/Dashboard";
import { makeStyles } from "@material-ui/core/styles";
import AppMenuItem from "./AppMenuItem";

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

function Nav(): React.ReactElement {
  const routes = useSiteData().routes;
  const classes = useStyles();

  let itemList: any[] = [];
  routes.forEach(
    (rootItem: { itemName: string; urlPart: string; items: any[] }) => {
      let items: AppMenuItemProps[] = [];
      rootItem.items.forEach(
        (childItem: { itemName: string; urlPart: string }) => {
          items.push({
            name: childItem.itemName,
          });
        }
      );

      itemList.push(
        <AppMenuItem
          name={rootItem.itemName}
          Icon={IconDashboard}
          items={items}
        ></AppMenuItem>
      );
    }
  );

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

export default Nav;

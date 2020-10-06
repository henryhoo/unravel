import type { NestedMenuItemType } from "./AppMenuItem";

import React from "react";
import { useSiteData } from "react-static";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import IconDashboard from "@material-ui/icons/Dashboard";
import { makeStyles } from "@material-ui/core/styles";
import AppMenuItem from "./AppMenuItem";
const mdPages = require("react-static-plugin-md-pages");

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
  const mdTreeRoot = mdPages.useMarkdownTree();
  let itemList: any[] = [];
  mdTreeRoot.children.forEach(
    (rootItem: { key: string; frontmatter: any; children: any[] }) => {
      let items: NestedMenuItemType[] = [];
      rootItem.children.forEach(
        (childItem: { key: string; frontmatter: any; children: any[] }) => {
          items.push({
            name: childItem.key,
            link: "/" + rootItem.key + "/" + childItem.key,
            nestedItems: [],
          });
        }
      );

      itemList.push({
        name: rootItem.key,
        link: "/" + rootItem.key,
        Icon: IconDashboard,
        nestedItems: items,
      });
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
        <AppMenuItem items={itemList} key="root-menu"></AppMenuItem>
      </List>
    </Drawer>
  );
}

export default Nav;

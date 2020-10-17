import type { NestedMenuItemType } from "./NestedMenu";

import React from "react";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Drawer from "@material-ui/core/Drawer";
import IconDashboard from "@material-ui/icons/Dashboard";
import { makeStyles } from "@material-ui/core/styles";
import NestedMenu from "./NestedMenu";
const mdPages = require("react-static-plugin-md-pages");

const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    position: "fixed",
    width: "20%",
    height: "100%",
    background: theme.palette.background.default,
    color: theme.palette.primary.main,
  },
  menuItemIcon: {},
  menuItemText: {},
}));

function Nav(): React.ReactElement {
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

  const getItemComponent = (item: NestedMenuItemType) => {
    const { name, Icon } = item;
    return (
      <>
        {!!Icon && (
          <ListItemIcon className={classes.menuItemIcon}>
            <Icon />
          </ListItemIcon>
        )}
        <ListItemText
          primary={name}
          inset={!Icon}
          className={classes.menuItemText}
        />
      </>
    );
  };

  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <NestedMenu
        items={itemList}
        getItemComponent={getItemComponent}
        key="root-menu"
      ></NestedMenu>
    </Drawer>
  );
}

export default Nav;

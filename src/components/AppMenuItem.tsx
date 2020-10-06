import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Collapse from "@material-ui/core/Collapse";
import { navigate } from "./Router";

import IconExpandLess from "@material-ui/icons/ExpandLess";
import IconExpandMore from "@material-ui/icons/ExpandMore";

export type NestedMenuItemType = {
  name: string;
  link: string;
  Icon?: React.ElementType;
  nestedItems: NestedMenuItemType[];
};

export type NestedMenuPropsType = {
  items: NestedMenuItemType[];
};

const useStyles = makeStyles((theme) =>
  createStyles({
    menuItem: {},
    menuItemIcon: {},
  })
);

function NestedMenu(props: NestedMenuPropsType) {
  const { items = [] } = props;
  const classes = useStyles();
  const [openIndex, setOpenIndex] = React.useState(-1);

  const MenuItems = items.map(({ name, link, Icon, nestedItems }, index) => {
    const isExpandable = nestedItems && nestedItems.length > 0;
    function handleClick() {
      setOpenIndex(index);
    }

    const ItemRoot = (
      <ListItem
        button
        className={classes.menuItem}
        onClick={handleClick}
      >
        {!!Icon && (
          <ListItemIcon className={classes.menuItemIcon}>
            <Icon />
          </ListItemIcon>
        )}
        <ListItemText
          primary={name}
          inset={!Icon}
          onClick={() => {
            navigate(link);
          }}
        />
        {isExpandable && !open && <IconExpandMore />}
        {isExpandable && open && <IconExpandLess />}
      </ListItem>
    );

    const ItemChildren = isExpandable ? (
      <Collapse
        in={openIndex === index}
        timeout="auto"
        unmountOnExit
      >
        <Divider />
        <List component="div" disablePadding>
          <NestedMenu items={nestedItems} />
        </List>
      </Collapse>
    ) : null;
    return (
      <div key = {link}>
        {ItemRoot}
        {ItemChildren}
      </div >
    );
  });

  return <>{MenuItems}</>;
}

export default NestedMenu;

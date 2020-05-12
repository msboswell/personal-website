import React from 'react';
import {
  List,
  ListItem,
  ListItemText,
  Link,
  Typography,
  AppBar,
  Toolbar,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  header: {
    fontStyle: 'oblique',
    flex: 'none', // change to 1 to push everything else to right
  },
});

const Item = ({ path, children }) => (
  <ListItemText inset>
    <Typography color="inherit" variant="h6">
      <Link color="inherit" href={path}>
        {children}
      </Link>
    </Typography>
  </ListItemText>
);

export default () => {
  const classes = useStyles();

  return (
    <AppBar color="primary" position="static">
      <Toolbar>
        <Link
          href="/"
          color="inherit"
          underline="none"
          className={classes.header}
        >
          <Typography variant="h5">Miles Boswell</Typography>
        </Link>
        <List component="nav">
          <ListItem component="div">
            <Item path="/blog/">Blog</Item>
            <Item path="/contact/">Contact</Item>
          </ListItem>
        </List>
      </Toolbar>
    </AppBar>
  );
};

import React, { useState, useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Link from "@material-ui/core/Link";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import { useHistory, Link as RouterLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setUserInitialState } from '../Actions/userActions';
import { removeJWT } from '../Actions/jwtActions'; 

const menuItemsSignedIn = [
    {
      menuTitle: "Home",
      pageURL: "/"
    },
    {
      menuTitle: "Congress",
      pageURL: "/congress"
    },
    {
      menuTitle: "Resources",
      pageURL: "/resources"
    },
    {
      menuTitle: "Dashboard",
      pageURL: "/dashboard"
    },
    {
      menuTitle: "Sign Out",
      pageURL: "/sign-out"
    }
  ];

const menuItemsSignedOut = [
  {
    menuTitle: "Home",
    pageURL: "/"
  },
  {
    menuTitle: "Congress",
    pageURL: "/congress"
  },
  {
    menuTitle: "Resources",
    pageURL: "/resources"
  },
  {
    menuTitle: "Sign In",
    pageURL: "/sign-in"
  }
];

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginBottom: '30px'
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    [theme.breakpoints.down("sm")]: {
      flexGrow: 1
    }
  },
  headerOptions: {
    display: "flex",
    flex: 1,
    justifyContent: "space-evenly"
  },
  anchorColorWhite: {
    color: 'white'
  },
  anchorColorBlack: {
    color: 'black'
  }
}));

export default function NavBar() {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const userToken = useSelector(state => state.jwtToken.token)
  const [menuItems, setMenuItems] = useState(menuItemsSignedOut)

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const signOut = (pageURL) => {
    dispatch(setUserInitialState());
    dispatch(removeJWT());
    localStorage.clear();
    history.push('/')
  }

  const handleMenuClick = pageURL => {
    setAnchorEl(null);
    if (pageURL === '/sign-out') {
      signOut();
    }
  };

  const handleButtonClick = pageURL => {
    if (pageURL === '/sign-out') {
      signOut();
    }
  };

  useEffect(() => {
    if (userToken) {
      setMenuItems(menuItemsSignedIn);
    } else {
      setMenuItems(menuItemsSignedOut);
    }
  }, [userToken])

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            Our Voice
          </Typography>
          {isMobile ? (
            <>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                onClick={handleMenu}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                open={open}
                onClose={() => setAnchorEl(null)}
                className={classes.anchorColorBlack}
              >
                {menuItems.map(menuItem => {
                  const { menuTitle, pageURL } = menuItem;
                  return (
                    <MenuItem key={menuTitle} onClick={() => handleMenuClick(pageURL)} >
                      <Link component={RouterLink} to={pageURL} className={classes.anchorColor} underline="none">
                        {menuTitle}
                      </Link>
                    </MenuItem>
                  );
                })}
              </Menu>
            </>
          ) : (
            <div className={classes.headerOptions}>
              {menuItems.map(menuItem => {
                const { menuTitle, pageURL } = menuItem;
                return (
                  <MenuItem
                    key={`${menuTitle}`}
                    variant="contained"
                    onClick={() => handleButtonClick(pageURL)}
                    >
                      <Link component={RouterLink} to={pageURL} className={classes.anchorColorWhite} underline="none">
                        {menuTitle}
                      </Link>
                  </MenuItem>)
              })}
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

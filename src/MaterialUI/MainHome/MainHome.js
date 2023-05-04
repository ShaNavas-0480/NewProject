import {
  AppBar,
  Box,
  Button,
  Collapse,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  styled,
  useTheme,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import "../styles.css";
import { ExpandLess, ExpandMore, StarBorder } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import GroupsIcon from "@mui/icons-material/Groups";
import ManageHistoryIcon from "@mui/icons-material/ManageHistory";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import GroupTable from "../Groups/GroupTable";
import AddIcon from "@mui/icons-material/Add";
import Group from "../Groups/GroupHome";
import Users from "../../components/UserManagement/Users";
import GroupHome from "../Groups/GroupHome";
import UserHome from "../Users/UserHome";
import { Dropdown, NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
function MainHome() {
  const [open, setOpen] = useState(false);
  const [openList, setOpenList] = useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const username = localStorage.getItem("username");

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleList = () => {
    setOpenList(!openList);
  };
  const handleClick = () => {
    setOpen(!open);
  };
  const theme = useTheme();
  const drawerWidth = 240;
  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));
  const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
  });

  const closedMixin = (theme) => ({
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
      width: `calc(${theme.spacing(8)} + 1px)`,
    },
  });
  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));

  const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
      ...openedMixin(theme),
      "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      "& .MuiDrawer-paper": closedMixin(theme),
    }),
  }));

  const [isShowGroups, setIsShowGroups] = useState(true);
  const [isShowUsers, setIsShowUsers] = useState(false);

  const handleMenuClick = (value) => {
    if (value === "users") {
      setIsShowGroups(false);
      setIsShowUsers(true);
    } else if (value === "groups") {
      setIsShowUsers(false);
      setIsShowGroups(true);
    }
  };
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <>
      <div className="main-drawer">
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <AppBar position="fixed" open={open}>
            <div className="d-flex justify-content-between align-items-center">
              <Toolbar>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={handleDrawerOpen}
                  edge="start"
                  sx={{
                    marginRight: 5,
                    ...(open && { display: "none" }),
                  }}
                >
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap component="div">
                  Logo
                </Typography>
              </Toolbar>
              <div className="user-profile ">
                {/* <Dropdown>
                  <Dropdown.Toggle id="dropdown-basic">
                    <AccountCircleIcon />
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item>{username}</Dropdown.Item>
                    <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown> */}
                <NavDropdown
                  title={<AccountCircleIcon />}
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item>{username}</NavDropdown.Item>
                  <NavDropdown.Item onClick={handleLogout}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              </div>
            </div>
          </AppBar>
          <Drawer className="side-menu-drawer" variant="permanent" open={open}>
            <DrawerHeader>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === "rtl" ? (
                  <ArrowForwardIosIcon />
                ) : (
                  <ArrowBackIosNewIcon />
                )}
              </IconButton>
            </DrawerHeader>
            <Divider />

            <List
              className="side-menu-list"
              sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
              component="nav"
              aria-labelledby="nested-list-subheader"
            >
              <ListItemButton onClick={handleList}>
                <ListItemIcon>
                  <ManageAccountsIcon />
                </ListItemIcon>
                <ListItemText primary="User Management" />
                {openList ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse
                className="side-menu-list-collapse"
                in={openList}
                timeout="auto"
                unmountOnExit
              >
                <List component="div" disablePadding>
                  <ListItemButton
                    className="side-sub-menu-list"
                    sx={{ pl: 4 }}
                    onClick={() => handleMenuClick("groups")}
                  >
                    <ListItemIcon>
                      <GroupsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Groups" />
                  </ListItemButton>
                  <ListItemButton
                    className="side-sub-menu-list"
                    sx={{ pl: 4 }}
                    onClick={() => handleMenuClick("users")}
                  >
                    <ListItemIcon>
                      <AdminPanelSettingsIcon />
                    </ListItemIcon>
                    <ListItemText primary="User" />
                  </ListItemButton>
                </List>
              </Collapse>
            </List>
            <List>
              <ListItem disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <ManageHistoryIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={"Configuration"}
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <SettingsIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={"Key Setup"}
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
            </List>
          </Drawer>
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <DrawerHeader />
            {isShowGroups && <GroupHome />}
            {isShowUsers && <UserHome />}
          </Box>
        </Box>
      </div>
    </>
  );
}

export default MainHome;

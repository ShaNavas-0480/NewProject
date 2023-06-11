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
import HubIcon from "@mui/icons-material/Hub";
import SettingsAccessibilityIcon from "@mui/icons-material/SettingsAccessibility";
import PaidIcon from "@mui/icons-material/Paid";
import TerminalIcon from "@mui/icons-material/Terminal";
import { Icon } from "@iconify/react";
import NetworkConfigMain from "../SystemConfig/NetworkConfig/NetworkConfigMain";
import SystemConfigHeaderMain from "../SystemConfig/SystemConfigHeader/SystemConfigHeaderMain";
import MerchantConfigHome from "../SystemConfig/MerchantConfig/MerchantConfigHome";
import TransactionTypeMain from "../SystemConfig/TransactionType/TransactionTypeMain";
import TerminalConfigHome from "../SystemConfig/TerminalConfig/TerminalConfigHome";
import { useEffect } from "react";
function MainHome() {
  const [open, setOpen] = useState(true);
  const [openUserList, setOpenUserList] = useState(false);
  const [openSystemConfigList, setOpenSystemConfiglist] = useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const username = localStorage.getItem("username");

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleUserList = () => {
    setOpenUserList(!openUserList);
  };
  const handleSystemConfigList = () => {
    setOpenSystemConfiglist(!openSystemConfigList);
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

  const [isShowNetworkConfig, setIsshowNetworkConfig] = useState(false);
  const [isShowMerchantConfig, setIsshowMerchantConfig] = useState(false);
  const [isShowTerminalConfig, setIsshowTerminalConfig] = useState(false);
  const [isShowHeader, setIsshowHeader] = useState(false);
  const [isShowTransactionType, setIsshowTransactionType] = useState(false);

  const handleMenuClick = (value) => {
    console.log(value);

    switch (value) {
      case "networkConfig":
        console.log("yes");
        setIsshowMerchantConfig(false);
        setIsShowGroups(false);
        setIsShowUsers(false);
        setIsshowHeader(false);
        setIsshowTerminalConfig(false);
        setIsshowTransactionType(false);
        setIsshowNetworkConfig(true);
        break;
      case "transactionType":
        setIsshowMerchantConfig(false);
        setIsShowGroups(false);
        setIsShowUsers(false);
        setIsshowHeader(false);
        setIsshowTerminalConfig(false);
        setIsshowNetworkConfig(false);
        setIsshowTransactionType(true);
        break;
      case "header":
        setIsshowMerchantConfig(false);
        setIsShowGroups(false);
        setIsShowUsers(false);
        setIsshowTerminalConfig(false);
        setIsshowNetworkConfig(false);
        setIsshowTransactionType(false);
        setIsshowHeader(true);
        break;
      case "merchantConfig":
        setIsShowGroups(false);
        setIsShowUsers(false);
        setIsshowTerminalConfig(false);
        setIsshowNetworkConfig(false);
        setIsshowTransactionType(false);
        setIsshowHeader(false);
        setIsshowMerchantConfig(true);
        break;
      case "terminalConfig":
        setIsShowGroups(false);
        setIsShowUsers(false);
        setIsshowNetworkConfig(false);
        setIsshowTransactionType(false);
        setIsshowHeader(false);
        setIsshowMerchantConfig(false);
        setIsshowTerminalConfig(true);
        break;
      case "users":
        setIsShowGroups(false);
        setIsshowNetworkConfig(false);
        setIsshowTransactionType(false);
        setIsshowHeader(false);
        setIsshowMerchantConfig(false);
        setIsshowTerminalConfig(false);
        setIsShowUsers(true);
        break;
      case "groups":
        setIsshowNetworkConfig(false);
        setIsshowTransactionType(false);
        setIsshowHeader(false);
        setIsshowMerchantConfig(false);
        setIsshowTerminalConfig(false);
        setIsShowUsers(false);
        setIsShowGroups(true);
        break;
    }
  };
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  useEffect(() => {}, [isShowUsers]);
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
              <ListItemButton onClick={handleUserList}>
                <ListItemIcon>
                  <ManageAccountsIcon />
                </ListItemIcon>
                <ListItemText primary="User Management" />
                {openUserList ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse
                className="side-menu-list-collapse"
                in={openUserList}
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
              <ListItemButton onClick={handleSystemConfigList}>
                <ListItemIcon>
                  <ManageHistoryIcon />
                </ListItemIcon>
                <ListItemText primary="System Config" />
                {openSystemConfigList ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse
                className="side-menu-list-collapse"
                in={openSystemConfigList}
                timeout="auto"
                unmountOnExit
              >
                <List component="div" disablePadding>
                  <ListItemButton
                    className="side-sub-menu-list"
                    sx={{ pl: 4 }}
                    onClick={() => handleMenuClick("networkConfig")}
                  >
                    <ListItemIcon>
                      <HubIcon />
                    </ListItemIcon>
                    <ListItemText primary="Network Config" />
                  </ListItemButton>
                  <ListItemButton
                    className="side-sub-menu-list"
                    sx={{ pl: 4 }}
                    onClick={() => handleMenuClick("header")}
                  >
                    <ListItemIcon>
                      <SettingsAccessibilityIcon />
                    </ListItemIcon>
                    <ListItemText primary="Header" />
                  </ListItemButton>
                  <ListItemButton
                    className="side-sub-menu-list"
                    sx={{ pl: 4 }}
                    onClick={() => handleMenuClick("transactionType")}
                  >
                    <ListItemIcon>
                      <PaidIcon />
                    </ListItemIcon>
                    <ListItemText primary="Transaction Type" />
                  </ListItemButton>
                  <ListItemButton
                    className="side-sub-menu-list"
                    sx={{ pl: 4 }}
                    onClick={() => handleMenuClick("terminalConfig")}
                  >
                    <ListItemIcon>
                      <TerminalIcon />
                    </ListItemIcon>
                    <ListItemText primary="Terminal Config" />
                  </ListItemButton>
                  <ListItemButton
                    className="side-sub-menu-list"
                    sx={{ pl: 4 }}
                    onClick={() => handleMenuClick("merchantConfig")}
                  >
                    <ListItemIcon>
                      <Icon icon="icon-park-solid:shop" />
                    </ListItemIcon>
                    <ListItemText primary="Merchant Config" />
                  </ListItemButton>
                </List>
              </Collapse>
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
            {isShowNetworkConfig && <NetworkConfigMain />}
            {isShowHeader && <SystemConfigHeaderMain />}
            {isShowMerchantConfig && <MerchantConfigHome />}
            {isShowTransactionType && <TransactionTypeMain />}
            {isShowTerminalConfig && <TerminalConfigHome />}
          </Box>
        </Box>
      </div>
    </>
  );
}

export default MainHome;

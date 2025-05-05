import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { NavLink } from "react-router-dom";
import { useUserContext } from "../stores/userStore";

const pagesConfig = [
  { label: "HomePage", url: "" },
  { label: "Page 2", url: "/page-two" },
  { label: "Page 3, ", url: "/PageThree/:id" },
  { label: "Page 4", url: "/PageFour" },
  { label: "Lab 1 ", url: "/LabOne" },
  { label: "Lab 2 ", url: "/LabTwo" },
  { label: "Lab 3 ", url: "/LabThree" },
  { label: "Lab 4 ", url: "/posts" },
];

function HeaderNavbar() {
  const { currentUser } = useUserContext();
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />

          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,

              display: { xs: "none", md: "flex" },

              fontFamily: "monospace",

              fontWeight: 700,

              letterSpacing: ".3rem",

              color: "inherit",

              textDecoration: "none",
            }}
          >
            Module 7 Part 2
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",

                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",

                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pagesConfig.map((page) => (
                <NavLink key={page.label} to={page.url}>
                  {page.label}
                </NavLink>
              ))}
            </Menu>
          </Box>

          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,

              display: { xs: "flex", md: "none" },

              flexGrow: 1,

              fontFamily: "monospace",

              fontWeight: 700,

              letterSpacing: ".3rem",

              color: "inherit",

              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {/* {pagesConfig.map((page) => (
              <Button
                key={page.label}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page.label}
              </Button>
            ))} */}
            {pagesConfig.map((page) => (
              <NavLink key={page.label} to={page.url}>
                {page.label}
              </NavLink>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title={currentUser}>
              {/* <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}> */}

              <Avatar alt={currentUser} src="/static/images/avatar/2.jpg" />

              {/* </IconButton> */}
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default HeaderNavbar;

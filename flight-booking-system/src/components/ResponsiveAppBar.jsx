import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

import logo from "./logo.png";
import { Link, Outlet } from "react-router-dom";

const pages = ["Home", "About Us", "Contact Us", "Login"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const createLinkPath = (page) => {
    return `/${page.replace(/\s+/g, "").toLowerCase()}`;
  };

  return (
    <>
      <AppBar sx={{ background: "" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <a href="/">
                <img
                  src={logo}
                  alt="Logo"
                  style={{
                    height: 40,
                    marginRight: 10,
                  }}
                />
              </a>
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="home"
                sx={{
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".1rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                Flight Booking System
              </Typography>
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="open menu"
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
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography
                      variant="body1"
                      align="center"
                      component={Link}
                      to={createLinkPath(page)}
                      sx={{
                        color: "inherit",
                        textDecoration: "none",
                        '&:hover': {
                          textDecoration: 'underline',
                        },
                      }}
                    >
                      {page}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "flex-end",
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  <Typography
                    component={Link}
                    to={createLinkPath(page)}
                    sx={{
                      color: "inherit",
                      textDecoration: "none",
                      fontFamily: "Segoe UI",
                      fontWeight: 500,
                      letterSpacing: ".1rem",
                      '&:hover': {
                        textDecoration: 'none',
                      },
                    }}
                  >
                    {page}
                  </Typography>
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Outlet />
    </>
  );
}

export default ResponsiveAppBar;

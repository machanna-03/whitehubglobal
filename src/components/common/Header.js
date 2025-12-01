import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

import logo from "../../assests/whlogo.png";

// Colors
const LIGHT_BLUE = "#004767";
const TXT_DARK = "#06283D";

function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();

  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const navButtons = [
    { label: "Home", path: "/" },
    { label: "Employer", path: "/looking-for-employees" },
    { label: "Job Seekers", path: "/looking for job" },
    { label: "Our Services", path: "/our-service" },
    { label: "Industry We Serve", path: "/industry-we-serve" },
    { label: "Contact Us", path: "/contact-us" },
  ];

  // LIGHT BLUE TEXT NAV STYLE (default)
  const textButtonSx = {
    color: LIGHT_BLUE,
    backgroundColor: "transparent",
    textTransform: "none",
    fontWeight: 700,
    px: 2,
    fontSize: { xs: 13, sm: 15 },
    minWidth: "auto",
    position: "relative",

    "&:before": {
      content: '""',
      position: "absolute",
      left: 0,
      right: 0,
      bottom: -6,
      height: 3,
      width: 0,
      backgroundColor: LIGHT_BLUE,
      transition: "width 220ms ease",
      borderRadius: 2,
    },

    "&:hover": {
      backgroundColor: "transparent",
      color: LIGHT_BLUE,
      "&:before": { width: "100%" },
    },
  };

  // DRAWER LIST (Mobile)
  const drawerList = (
    <Box sx={{ width: 300 }} role="presentation">
      <Box sx={{ p: 2, display: "flex", alignItems: "center" }}>
        <Box
          component="img"
          src={logo}
          alt="WHITEHUB"
          onClick={() => navigate("/")}
          sx={{ height: 44, cursor: "pointer" }}
        />
      </Box>

      <List>
        {navButtons.map((b) => (
          <ListItem key={b.label} disablePadding>
            <ListItemButton
              onClick={() => {
                setDrawerOpen(false);
                navigate(b.path);
              }}
            >
              <ListItemText
                primary={b.label}
                primaryTypographyProps={{ sx: { color: LIGHT_BLUE } }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        background: "#ffffff",
        color: TXT_DARK,
        borderBottom: "1px solid rgba(0,0,0,0.06)",
      }}
    >
      <Toolbar sx={{ px: 0 }}>
        <Box
          sx={{
            maxWidth: "1400px",
            width: "100%",
            mx: "auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            px: { xs: 2, md: 0 },
          }}
        >
          {/* LOGO */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box
              component="img"
              src={logo}
              alt="WHITEHUB"
              onClick={() => navigate("/")}
              sx={{ height: { xs: 40, sm: 56 }, cursor: "pointer" }}
            />
          </Box>

          {/* DESKTOP NAVIGATION */}
          {!isMobile ? (
            <Box sx={{ display: "flex", gap: 1 }}>
              {navButtons.map((b) => {
                const isSpecial = b.label === "Contact Us";

                return (
                  <Button
                    key={b.label}
                    sx={
                      isSpecial
                        ? {
                            textTransform: "none",
                            fontWeight: 700,
                            px: 2.5,
                            fontSize: { xs: 13, sm: 15 },
                            backgroundColor: "#005f86",
                            color: "#ffffff",
                            borderRadius: "8px",
                            transition: "all 200ms ease",
                            "&:hover": { backgroundColor: "#0077A8" },
                          }
                        : textButtonSx
                    }
                    onClick={() => navigate(b.path)}
                  >
                    {b.label}
                  </Button>
                );
              })}
            </Box>
          ) : (
            <IconButton
              edge="end"
              onClick={() => setDrawerOpen(true)}
              sx={{ color: LIGHT_BLUE }}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Box>
      </Toolbar>

      {/* MOBILE DRAWER */}
      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        {drawerList}
      </Drawer>
    </AppBar>
  );
}

export default Header;

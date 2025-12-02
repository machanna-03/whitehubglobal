import React from "react";
import {
  Box,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import RoomIcon from "@mui/icons-material/Room";
import logo from "../../assests/whlogo.png";
import { useNavigate } from "react-router-dom";

const addressDetails = [
  {
    title: "Address",
    address: ["Bangalore, Karnataka,"],
    phone: "+971 504059957",
    email: "info@whitehubglobal.com",
  },
];

const serviceLinks = [
  "Skilled Workforce Deployment",
  "Local Hiring (UAE)",
  "Executive Search & White-Collar Recruitment",
  "Project-Based Manpower Supply",
  "HR & Documentation Support",
];

const menuLinks = ["Home", "Jobs", "About Us", "Blogs", "Contact Us"];
const moreLinks = ["Privacy Policy", "Cookie Policy"];

const textColor = "#e3f0fc";
const hoverColor = "#8e9cb9ff";
const bgColor = "#0f2b49";

function Footer() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();

  const linkStyle = {
    color: textColor,
    mb: "0.6em",
    fontWeight: 400,
    cursor: "pointer",
    fontSize: isMobile ? "0.9rem" : "1rem",
    transition: "color 0.2s",
    "&:hover": { color: hoverColor },
  };

  const sectionTitleStyle = {
    color: textColor,
    fontWeight: 700,
    mb: "0.8em",
    fontSize: isMobile ? "1.1rem" : "1.2rem",
  };

  return (
    <Box sx={{ bgcolor: bgColor, py: 6, p: isMobile ? 3 : 0 }}>
      <Box sx={{ maxWidth: "1200px", mx: "auto" }}>
        <Grid container spacing={5}>

          {/* COLUMN 1 — ADDRESS */}
          <Grid item xs={12} sm={6} md={3}>
            <Box
              component="img"
              src={logo}
              alt="WHITEHUB"
              onClick={() => navigate("/")}
              sx={{
                height: { xs: 70, sm: 85 },
                cursor: "pointer",
                mb: isMobile ? 1 : 3.5,
              }}
            />

            <Typography sx={sectionTitleStyle}>Address</Typography>

            {addressDetails.map((loc) => (
              <Box key={loc.title}>
                <Box display="flex" alignItems="flex-start" mb="0.4em">
                  <RoomIcon sx={{ mr: "0.6em", color: textColor }} />
                  <Typography sx={{ color: textColor, fontSize: "0.95rem" }}>
                    {loc.address.map((line, i) => (
                      <span key={i}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </Typography>
                </Box>

                <Box display="flex" alignItems="center" mb="0.4em">
                  <PhoneIcon sx={{ mr: "0.6em", color: textColor }} />
                  <Typography sx={{ color: textColor, fontSize: "0.95rem" }}>
                    {loc.phone}
                  </Typography>
                </Box>

                <Box display="flex" alignItems="center">
                  <EmailIcon sx={{ mr: "0.6em", color: textColor }} />
                  <Typography sx={{ color: textColor, fontSize: "0.95rem" }}>
                    {loc.email}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Grid>

          {/* COLUMN 2 — SERVICES */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography sx={sectionTitleStyle}>Services</Typography>
            {serviceLinks.map((link) => (
              <Typography key={link} sx={linkStyle}>
                {link}
              </Typography>
            ))}
          </Grid>

          {/* COLUMN 3 — MENU (50% on mobile) */}
          <Grid item xs={6} sm={6} md={3} >
            <Typography sx={sectionTitleStyle}>Menu</Typography>
            {menuLinks.map((link) => (
              <Typography key={link} sx={linkStyle}>
                {link}
              </Typography>
            ))}
          </Grid>

          {/* COLUMN 4 — MORE (50% on mobile) */}
          <Grid item xs={6} sm={6} md={3}>
            <Typography sx={sectionTitleStyle}>More</Typography>
            {moreLinks.map((link) => (
              <Typography key={link} sx={linkStyle}>
                {link}
              </Typography>
            ))}
          </Grid>
        </Grid>

        {/* COPYRIGHT */}
        <Box
          sx={{
            textAlign: "center",
            mt: 5,
            pt: 3,
            borderTop: "1px solid rgba(255,255,255,0.15)",
          }}
        >
          <Typography sx={{ color: "#d9e6f2", fontSize: "0.95rem" }}>
            Copyright © 2025 - WHITEHUB GLOBAL CONSULTANTS
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;

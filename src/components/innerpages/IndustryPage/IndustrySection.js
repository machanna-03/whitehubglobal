import React from "react";
import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";

import PhoneImg from "../../../assests/IndustriesWeServe.jpg";
import Icon1 from "../../../assests/list-icon-1.png";
import Icon2 from "../../../assests/list-icon-2.png";
import Icon3 from "../../../assests/list-icon-3.png";

// ==================== SHARED STYLES ====================

const circle = {
  height: "86px",
  width: "86px",
  borderRadius: "50%",
  background: "#7b4efd",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
};

const iconImg = {
  width: "80px",
  height: "80px",
  objectFit: "contain",
};

const textBlock = (title, desc) => (
  <Box sx={{ textAlign: "left" }}>
    <Typography sx={{ fontWeight: 700, fontSize: "20px" }}>{title}</Typography>
    <Typography sx={{ color: "#666", fontSize: "14px", mt: 1 }}>
      {desc}
    </Typography>
  </Box>
);

// ==================== LEFT CONNECTOR ====================
const leftConnector = {
  position: "relative",
  width: "100%",
  height: "50px",
  "&::before": {
    content: '""',
    height: "100%",
    width: "2px",
    borderLeft: "2px dashed #794efd",
    position: "absolute",
    top: 0,
    left: "calc(100% - 43px)",
  },
  "&::after": {
    content: '""',
    height: "10px",
    width: "10px",
    background: "#794efd",
    border: "2px solid #fff",
    borderRadius: "50%",
    position: "absolute",
    top: "-5px",
    left: "calc(100% - 48px)",
  },
};

// ==================== RIGHT CONNECTOR ====================
const rightConnector = {
  position: "relative",
  width: "100%",
  height: "50px",
  "&::before": {
    content: '""',
    height: "100%",
    width: "2px",
    borderLeft: "2px dashed #794efd",
    position: "absolute",
    top: 0,
    left: "40px",
  },
  "&::after": {
    content: '""',
    height: "10px",
    width: "10px",
    background: "#794efd",
    border: "2px solid #fff",
    borderRadius: "50%",
    position: "absolute",
    top: "-5px",
    left: "35px",
  },
};

// ==================== MAIN COMPONENT ====================

function IndustrySection() {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); 
  return (
    <Box sx={{ maxWidth: "1100px", mx: "auto",mb:isMobile? 2.5 : 6.5, }}>

      <Typography
        sx={{
          textAlign: "center",
          fontWeight: 800,
          fontSize: { xs: "1.2rem", md: "2rem" },
          mb:isMobile?1: 2.5,
          p:2,
          color: "#22356F",
        }}
      >
        Empowering Industries with Skilled Workforce Solutions
      </Typography>

      <Grid container spacing={4}>
        {/* LEFT GRID */}
        <Grid item xs={12} md={4}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1,px: isMobile? 2: 0 }}>
            
            {/* 1 */}
            <Box sx={{ display: "flex", alignItems: "center" }}>
              {textBlock(
                "Manufacturing & Industrial",
                "Skilled workforce for factory operations, assembly lines, and production units."
              )}
              <Box sx={{ marginLeft: "auto" }}>
                <Box sx={circle}>
                  <img src={Icon1} style={iconImg} />
                </Box>
              </Box>
            </Box>

            <Box sx={leftConnector}></Box>

            {/* 2 */}
            <Box sx={{ display: "flex", alignItems: "center" }}>
              {textBlock(
                "Healthcare & Medical Services",
                "Qualified nurses, attendants, and support staff for hospitals and clinics."
              )}
              <Box sx={{ marginLeft: "auto" }}>
                <Box sx={circle}>
                  <img src={Icon2} style={iconImg} />
                </Box>
              </Box>
            </Box>

            <Box sx={leftConnector}></Box>

            {/* 3 */}
            <Box sx={{ display: "flex", alignItems: "center" }}>
              {textBlock(
                "IT & Technical Support",
                "Highly trained professionals for software, networking, and helpdesk assistance."
              )}
              <Box sx={{ marginLeft: "auto" }}>
                <Box sx={circle}>
                  <img src={Icon3} style={iconImg} />
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>

        {/* CENTER GRID */}
        <Grid item xs={12} md={4}>
          <Box sx={{ textAlign: "center",mt:4 }}>
            <img
              src={PhoneImg}
              style={{ width: "350px", borderRadius: "20px" }}
              alt="center-device"
            />
          </Box>
        </Grid>

        {/* RIGHT GRID */}
        <Grid item xs={12} md={4}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 ,px: isMobile? 2: 0}}>
            
            {/* 1 */}
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box sx={circle}>
                <img src={Icon1} style={iconImg} />
              </Box>
              <Box sx={{ marginLeft: 3 }}>
                {textBlock(
                  "Security & Safety Services",
                  "Certified guards and surveillance staff for industries and organizations."
                )}
              </Box>
            </Box>

            <Box sx={rightConnector}></Box>

            {/* 2 */}
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box sx={circle}>
                <img src={Icon2} style={iconImg} />
              </Box>
              <Box sx={{ marginLeft: 3 }}>
                {textBlock(
                  "Banking & Corporate Offices",
                  "Professional manpower for admin, clerical, and front desk roles."
                )}
              </Box>
            </Box>

            <Box sx={rightConnector}></Box>

            {/* 3 */}
            <Box sx={{ display: "flex", alignItems: "center",mb:2 }}>
              <Box sx={circle}>
                <img src={Icon3} style={iconImg} />
              </Box>
              <Box sx={{ marginLeft: 3 }}>
                {textBlock(
                  "Retail & E-Commerce",
                  "Manpower for customer service, stocking, packing, and delivery operations."
                )}
              </Box>
            </Box>

          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default IndustrySection;

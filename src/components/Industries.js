import React from "react";
import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";

import PhoneImg from "../../src/assests/IndustriesWeServe.jpg";
import Icon1 from "../../src/assests/list-icon-1.png";
import Icon2 from "../../src/assests/list-icon-2.png";
import Icon3 from "../../src/assests/list-icon-3.png";

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
    <Typography sx={{ fontWeight: 700, fontSize: "18px" }}>{title}</Typography>
    <Typography sx={{ color: "#666", fontSize: "12px", mt: 1   }}>
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

function Industries() {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); 
  return (
    <Box sx={{ maxWidth: "1100px", mx: "auto", py: isMobile? 4 : 8 }}>

      {/* ===== TITLE ADDED HERE ===== */}
      <Typography
        sx={{
          textAlign: "center",
          fontWeight: 800,
          fontSize: { xs: "1.6rem", md: "2rem" },
          mb: 4,
          color: "#22356F",
        }}
      >
        Industries We Serve
      </Typography>

      <Grid container spacing={4}>
        {/* LEFT GRID */}
        <Grid item xs={12} md={4}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1,px: isMobile? 2: 0 }}>
            {/* 1 */}
            <Box sx={{ display: "flex", alignItems: "center", }}>
              {textBlock(
                "Construction & Engineering",
                "Reliable workforce for civil, mechanical, electrical, and infrastructure projects."
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
                "Hospitality & Catering",
                "Trained staff for hotels, restaurants, events, and premium service operations."
              )}
              <Box sx={{ marginLeft: "auto" }}>
                <Box sx={circle}>
                  <img src={Icon2} style={iconImg} />
                </Box>
              </Box>
            </Box>

            <Box sx={leftConnector}></Box>

            {/* 3 */}
            <Box sx={{ display: "flex", alignItems: "center", }}>
              {textBlock(
                "Oil & Gas",
                "Skilled manpower for upstream, midstream, and downstream operations."
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
          <Box sx={{ textAlign: "center",mt:4,  }}>
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
                  "Logistics & Transportation",
                  "Qualified personnel for warehousing, supply chain, and transport services."
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
                  "Facility Management",
                  "End-to-end staffing for maintenance, cleaning, and building operations."
                )}
              </Box>
            </Box>

            <Box sx={rightConnector}></Box>

            {/* 3 */}
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box sx={circle}>
                <img src={Icon3} style={iconImg} />
              </Box>
              <Box sx={{ marginLeft: 3 }}>
                {textBlock(
                  "Retail & Customer Service",
                  "Customer-focused staff for sales, support, and frontline service roles."
                )}
              </Box>
            </Box>

          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Industries;
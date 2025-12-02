import React from "react";
import {
  Box,
  Button,
  Grid,
  Typography,
  Paper,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

import heroImg from "../../src/assests/whbanner.jpg";

const PRIMARY = "#409bbeff";

function Banner() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ position: "relative", pb: { xs: 2, md: 8 } }}>
      {/* HERO BANNER */}
      <Box
        sx={{
          position: "relative",
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "cover",
          height: { xs: "200px", md: "380px" },
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          py: { xs: 6, md: 14 },
          px: { xs: 3, md: 4 },
          color: "#fff",
          zIndex: 1,
        }}
      >
        {/* RIGHT SIDE TEXT */}
        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            maxWidth: "400px",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "15px", md: "32px" },
              fontWeight: 700,
              opacity: 0.9,
              lineHeight: "1.2em",
              fontFamily: "Quicksand, sans-serif",
              mb: 1,
              letterSpacing: "0.5px",
            }}
          >
            Trusted Manpower Supply Across the Globe
          </Typography>

          <Typography
            sx={{
              mt: 2,
              fontSize: { xs: "12px", md: "18px" },
              ml: "auto",
              lineHeight: 1.55,
              fontWeight: 500,
              opacity: 0.95,
              maxWidth: "680px",
            }}
          >
            We bring together industry experts to deliver reliable and
            professional recruitment solutions - both locally and globally.
          </Typography>

          {/* BUTTONS */}
          {/* <Box
            sx={{
              display: "flex",
              gap: 2,
              mt: isMobile ? 7 : 5,
              flexWrap: "wrap",
              justifyContent: "flex-end",
            }}
          >
            <Button
              variant="contained"
              sx={{
                px: isMobile ? 2 : 4,
                py: isMobile ? 0.6 : 1.2,
                fontSize: "15px",
                borderRadius: "40px",
                background: "#004767",
                fontWeight: 600,
                boxShadow: "0px 4px 12px rgba(21, 95, 124, 0.4)",
                ":hover": { boxShadow: "0px 4px 15px rgba(9, 82, 110, 0.7)" },
              }}
            >
              Hire Top Talent
            </Button>

            <Button
              variant={isMobile ? "contained" : "outlined"}
              sx={{
                px: isMobile ? 2 : 4,
                py: isMobile ? 0.6 : 1.2,
                fontSize: "16px",
                borderRadius: "40px",
                background: isMobile ? "#004767" : "none",
                borderColor: "#015b85ff",
                color: "#fff",
                fontWeight: 600,
                ":hover": { background: "#015b85ff" },
              }}
            >
              Find A Job
            </Button>
          </Box> */}
        </Box>
      </Box>

      {/* FLOATING CARDS — DESKTOP (absolute) */}
      {!isMobile && (
        <Grid
          container
          spacing={3}
          sx={{
            position: "absolute",
            top: { md: "70%" },
            left: "50%",
            transform: "translateX(-50%)",
            width: { md: "80%" },
            zIndex: 3,
          }}
        >
          {[
            {
              icon: <PhoneIcon sx={{ color: "#003b5c", fontSize: 30 }} />,
              title: "Speak To Our Experts",
              subtitle: "+971 504059957",
            },
            {
              icon: <EmailIcon sx={{ color: "#003b5c", fontSize: 30 }} />,
              title: "Send Us A Mail For Queries",
              subtitle: "info@whitehubglobal.com",
            },
            {
              icon: <AccessTimeIcon sx={{ color: "#003b5c", fontSize: 30 }} />,
              title: "Our Operating Hours",
              subtitle: "Mon–Sat, 9am–6pm",
            },
          ].map((item, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  borderRadius: "15px 15px 0 0",
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  background: "#fff",
                }}
              >
                <Box
                  sx={{
                    width: 70,
                    height: 70,
                    borderRadius: "50%",
                    background: "#eff5fa",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {item.icon}
                </Box>

                <Box>
                  <Typography
                    sx={{ fontSize: "20px", fontWeight: 700, color: "#0d3150" }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    sx={{ fontSize: "16px", mt: 0.8, color: "#4d4d4d" }}
                  >
                    {item.subtitle}
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      )}

      {/* MOBILE VERSION — SEPARATE CARDS UNDER BANNER */}
      {isMobile && (
        <Box sx={{ p: 2, backgroundColor: "#e3f0fc" }}>
          {[
            {
              icon: <PhoneIcon sx={{ color: "#003b5c", fontSize: 24 }} />,
              title: "Speak To Our Experts",
              subtitle: "+971 504059957",
            },
            {
              icon: <EmailIcon sx={{ color: "#003b5c", fontSize: 24 }} />,
              title: "Send Us A Mail",
              subtitle: "info@whitehubglobal.com",
            },
            {
              icon: <AccessTimeIcon sx={{ color: "#003b5c", fontSize: 24 }} />,
              title: "Operating Hours",
              subtitle: "Mon–Sat, 9am–6pm",
            },
          ].map((item, index) => (
            <Paper
              key={index}
              sx={{
                p: 2.2,
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                gap: 2,
                background: "#fff",
                boxShadow: "0 3px 12px rgba(0,0,0,0.12)",
              }}
            >
              {/* ICON -- smaller */}
              <Box
                sx={{
                  width: 55,
                  height: 55,
                  borderRadius: "50%",
                  background: "#eff5fa",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {item.icon}
              </Box>

              <Box>
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: 700,
                    color: "#0d3150",
                  }}
                >
                  {item.title}
                </Typography>

                <Typography
                  sx={{
                    fontSize: "14px",
                    color: "#4d4d4d",
                    mt: 0.5,
                  }}
                >
                  {item.subtitle}
                </Typography>
              </Box>
            </Paper>
          ))}
        </Box>
      )}
    </Box>
  );
}

export default Banner;
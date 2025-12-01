import React from "react";
import { Box, Typography, Container, Breadcrumbs, Link, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import aboutusbanner from "../../../assests/innerbanner.jpg";

const WhyChooseBanner = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        minHeight: { xs: 240, sm: 280, md: 300 },
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        backgroundImage: `url(${aboutusbanner})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        py: { xs: 6, md: 10 },
        px: { xs: 2, sm: 4, md: 0 }
      }}
    >
      {/* Blue-gradient overlay for text clarity and vibrance */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(180deg, rgba(74,110,255,0.12) 0%, rgba(22,35,60,0.08) 60%, rgba(32,61,121,0.11) 100%)",
          zIndex: 0,
        }}
      />
      <Container
        maxWidth="md"
        sx={{
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <Typography
          variant="h2"
          component="h1"
          sx={{
            mt: 2,
            mb: 3,
            fontWeight: 900,
            fontSize: { xs: "2rem", sm: "2.6rem", md: "4rem" },
            color: "#fff",
            letterSpacing: 1,
            lineHeight: 1.14,
            textShadow: "0 2px 8px rgba(60,90,190,0.06)"
          }}
        >
         Contact Us
        </Typography>
        {/* <Breadcrumbs
          separator={
            <ArrowForwardIosIcon sx={{ fontSize: 18, color: "#fff" }} />
          }
          aria-label="breadcrumb"
          sx={{
            justifyContent: "center",
            display: "flex",
            fontSize: { xs: "1.1rem", sm: "1.21rem" },
          }}
        >
          <Typography sx={{ color: "#fff", fontWeight: 430, fontSize: { xs: "1rem", md: "1.19rem" } }}>
            Home
          </Typography>
          <Link
            underline="always"
            sx={{
              color: "#fff",
              fontWeight: 510,
              fontSize: { xs: "1rem", md: "1.20rem" },
              transition: "color 0.2s",
              "&:hover": { color: "#153875" }
            }}
            href="#"
          >
            Why Choose Us
          </Link>
        </Breadcrumbs> */}
      </Container>
    </Box>
  );
};

export default WhyChooseBanner;

import React from "react";
import {
  Box,
  Typography,
  Container,
  Breadcrumbs,
  Link,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import aboutusbanner from "../../../assests/innerbanner.jpg";

const MissionBanner = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        minHeight: { xs: 140, sm: 200, md: 300 },

        maxwidth:isMobile?"100%": "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",

        backgroundImage: `url(${aboutusbanner})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: { xs: "cover", sm: "cover", md: "cover" },
        backgroundPosition: { xs: "center", sm: "center", md: "center" },

        py: { xs: 4, md: 10 },
        px: { xs: 2, sm: 4, md: 0 }
      }}
    >
      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.15) 100%)",
          zIndex: 0
        }}
      />

      <Container
        maxWidth="md"
        sx={{
          textAlign: "center",
          position: "relative",
          zIndex: 1
        }}
      >
        <Typography
          variant="h2"
          component="h1"
          sx={{
            mt: 2,
            mb: 3,
            fontWeight: 900,
            fontSize: { xs: "1.2rem", sm: "2.4rem", md: "4rem" },
            color: "#fff",
            letterSpacing: 1,
            lineHeight: 1.14
          }}
        >
          Looking for Employees
        </Typography>
      </Container>
    </Box>
  );
};

export default MissionBanner;

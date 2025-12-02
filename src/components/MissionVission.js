import React from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  Container,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import MissionVission from "../../src/assests/How-Do-You-Determine-If-a-Strategic-Priority-Is-Robust-11.png";

const textColor = "#003b5c";

function MissionVision() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Mobile flag

  return (
    <Box
      sx={{
        bgcolor: "#eff5faff",
        py: { xs: 4, md: 8 },
        px: isMobile ? "8px" : "28px",
      }}
    >
      <Container maxWidth={false} sx={{ maxWidth: "1400px", width: "100%" }}>
        <Grid container alignItems="center" spacing={isMobile ? 2 : 6}>
          {/* Left Image */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{ textAlign: { xs: "center", md: "left" } }}
          >
            <Box
              component="img"
              src={MissionVission}
              alt="MissionVision"
              sx={{
                width: "100%",
                height: isMobile ? "240px" : "350px",
                maxWidth: "550px",
                objectFit: "cover",
                borderRadius: "5px",
              }}
            />
          </Grid>

          {/* Right Content */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h3"
              fontWeight={700}
              sx={{
                color: textColor,
                mb: 2,
                fontSize: { xs: "1.6rem", sm: "2.3rem", md: "2.6rem" },
              }}
            >
              Purpose and Direction
            </Typography>

            {/* Mission */}
            <Typography
              sx={{
                fontWeight: 700,
                mb: 1,
                fontSize: { xs: "0.9rem", md: "1.25rem" },
              }}
            >
              Purpose
            </Typography>

            <Typography
              sx={{
                color: "#404040",
                fontSize: { xs: "0.8rem", md: "1rem" },
                mb: 2,
                fontWeight: 100,
                lineHeight: 1.7,
              }}
            >
              To empower industries with dependable and skilled workforce
              solutions that enhance productivity and workplace efficiency. Our
              purpose is to connect businesses with the right talent, enabling
              seamless operations and long-term success.
            </Typography>

            {/* Vision */}
            <Typography
              sx={{
                fontWeight: 700,
                mb: 1,
                fontSize: { xs: "0.9rem", md: "1.25rem" },
              }}
            >
              Direction
            </Typography>

            <Typography
              sx={{
                color: "#404040",
                fontSize: { xs: "0.8rem", md: "1rem" },
                mb: 2.5,
                fontWeight: 100,
                lineHeight: 1.7,
              }}
            >
              We are moving toward a future where businesses can depend on us as
              their preferred workforce partner — driven by strong values, rapid
              support, and a constant focus on delivering skilled talent that
              keeps industries progressing.
            </Typography>

            {/* Button stays the same */}

            <Button
              variant="outlined"
              sx={{
                color: textColor,
                borderColor: textColor,
                borderRadius: "2em",
                px: "2.2em",
                py: "0.85em",
                fontWeight: 700,
                fontSize: isMobile ? "0.8rem" : "1rem",
                "&:hover": {
                  borderColor: "#1d295a",
                  color: "#1d295a",
                  background: "#f0f4ff",
                },
              }}
            >
              Know More
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default MissionVision;

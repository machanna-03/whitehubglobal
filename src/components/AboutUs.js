import React from "react";
import { Box, Grid, Typography, Button, Container } from "@mui/material";

import aboutUsImage from "../../src/assests/manpower.jpg";

const textColor = "#003b5c";

function AboutUs() {
  return (
    <Box
      sx={{
        py: 4,
        p: "28px",
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          maxWidth: "1400px",
          width: "100%",
          px: 0,
        }}
      >
        <Grid container alignItems="center">
          
          {/* ⭐ MOBILE: Image First | DESKTOP: Image Second  */}
          <Grid
            item
            xs={12}
            md={6}
            order={{ xs: 1, md: 2 }}
            sx={{
              textAlign: { xs: "center", md: "right" },
              mb: { xs: 3, md: 0 },
            }}
          >
            <Box
              component="img"
              src={aboutUsImage}
              alt="About Us"
              sx={{
                width:"100%",
                maxWidth: { xs: "340px", md: "650px" },
                objectFit: "cover",
                borderRadius: { xs: "12px", md: "5px" },
              }}
            />
          </Grid>

          {/* ⭐ MOBILE: Text Second | DESKTOP: Text First */}
          <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
            <Typography
              variant="h3"
              fontWeight={700}
              sx={{
                color: "#003b5c",
                textAlign: "center",
                mb: { xs: 1.5, md: 2 },
                fontSize: { xs: "1.7rem", sm: "2.1rem", md: "2.6rem" },
              }}
            >
              About Us
            </Typography>

            <Typography
              sx={{
                color: "#4B4B4B",
                fontSize: { xs: "0.82rem", md: "1.1rem" },
                mb: { xs: 3, md: 3 },
                fontWeight: 100,
                lineHeight: 1.65,
              }}
            >
              Whitehub Global is a professional recruitment and manpower
              solutions company based in the UAE, dedicated to connecting
              exceptional talent with leading employers across various
              industries. Experts from various industries have gathered under
              one platform to provide the best and most reliable recruitment
              services — ensuring that every industry’s manpower requirement is
              fulfilled professionally, effectively, and efficiently.
              <br />
              With a deep understanding of the UAE labor market and global
              sourcing strategies, we specialize in providing both local and
              overseas manpower, tailored to meet our clients’ operational needs
              and business goals. Our network extends across India, Pakistan,
              Nepal, Sri Lanka, the Philippines, and several African countries,
              giving us access to a wide range of qualified and experienced
              candidates. We deliver solutions that align perfectly with our
              clients’ expectations.
            </Typography>

            <Button
              variant="outlined"
              sx={{
                color: textColor,
                borderColor: textColor,
                borderRadius: "2em",
                px: "2em",
                py: "0.7em",
                fontWeight: 600,
                fontSize: "0.95rem",
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

export default AboutUs;

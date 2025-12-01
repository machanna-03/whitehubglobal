import React from "react";
import { Box, Grid, Typography, Button, List, ListItem, ListItemText } from "@mui/material";
import whyChooseUs from "../../src/assests/manpower-supply.webp";

const textColor = "#22356F";

function WhyChooseUs() {
  const points = [
    "Wide sourcing network across multiple countries",
    "Fast and transparent recruitment process",
    "Strict screening and verification procedures",
    "Ethical and compliant recruitment practices",
    "Dedicated and experienced team focused on client satisfaction"
  ];

  return (
    <Box sx={{ bgcolor: "#eff5faff", p: { xs: 3, sm: 5, md: 8 } }}>
      <Box
        sx={{
          maxWidth: "1400px",
          width: "90%",
          mx: "auto",
          px: { xs: 1, md: 0 }
        }}
      >
        <Grid container alignItems="center" spacing={4}>
          {/* Left: Content */}
          <Grid item xs={12} md={6} sx={{ pr: { md: 2 }, display: "flex", flexDirection: "column" }}>
            <Typography
              variant="h3"
              fontWeight={700}
              sx={{
                color: textColor,
                mb: 2,
                fontSize: { xs: "2rem", sm: "2.3rem", md: "2.6rem" }
              }}
            >
              Why Choose Us
            </Typography>
            <List sx={{ mb: 4, pl: 0 }}>
              {points.map((point) => (
                <ListItem
                  key={point}
                  sx={{
                    pl: 0,
                    alignItems: "flex-start",
                    borderBottom: "1px solid #3c508dff",
                    py: "0.5em",
                    display: "flex",
                    gap: "0.75rem"
                  }}
                  disableGutters
                >
                  <Typography 
                    sx={{ color: textColor, fontSize: "1.2rem", fontWeight: 700, mt: "0.25em" }}
                  >
                    &gt;
                  </Typography>
                  <ListItemText
                    primary={
                      <Typography
                        sx={{
                          color: "#404040",
                          fontSize: { xs: "0.9rem", md: "1rem" },
                          fontWeight: 400,
                          lineHeight: 1.7
                        }}
                      >
                        {point}
                      </Typography>
                    }
                  />
                </ListItem>
              ))}
            </List>
            <Button
              variant="outlined"
              sx={{
                color: textColor,
                borderColor: textColor,
                borderRadius: "2em",
                px: "1.5em",
                py: "0.5em",
                fontWeight: 600,
                fontSize: "1.2rem",
                '&:hover': {
                  borderColor: "#1d295a",
                  color: "#1d295a",
                  background: "#f0f4ff"
                },
                alignSelf: "start"
              }}
            >
              Know More
            </Button>
          </Grid>
          {/* Right: Image */}
          <Grid item xs={12} md={6} sx={{ pl: { md: 2 }, textAlign: { xs: "center", md: "right" } }}>
            <Box
              component="img"
              src={whyChooseUs}
              alt="Why Choose Us"
              sx={{
                width: "100%",
                maxWidth: "600px",
                objectFit: "cover",
                borderRadius: "0.6rem"
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default WhyChooseUs;

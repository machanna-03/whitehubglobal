import React from "react";
import { Box, Grid, Typography, Button, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import WorkImg from "../../../assests/human-resources-hr-management-recruitment-employment-headhunting-concept_1294533-966.jpg"; // Change to your image path

const JobOpeningsSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        maxWidth: "1200px",
        mx: "auto",
        pt: 6,
        px: { xs: 2, md: 0 },
      }}
    >
      {/* 2 Column Layout */}
      <Grid container spacing={2} alignItems="center">
        {/* Left Content */}
        <Grid item xs={12} md={6}>
          <Typography
            sx={{
              color: "#003b5c",
              fontSize: "1.8rem",
              fontWeight: 700,
              mb: 2,
              textAlign: "center",
            }}
          >
            Looking to Hire Employees?
          </Typography>

          <Box
            component="ul"
            sx={{
              pl: 3,
              color: "#435963",
              fontSize: "1.05rem",
              lineHeight: 1.8,
              "& li": { mb: 1 },
            }}
          >
            <li>
              Large database of skilled, semi-skilled & general workers ready
              for deployment.
            </li>
            <li>
              Sourcing manpower from trusted recruiting regions including all
              various places in UAE.
            </li>
            <li>
              Selection through trade testing, personal interviews & skill
              verification.
            </li>
            <li>
              Quick hiring support for construction, industrial, hospitality,
              logistics & facility management sectors.
            </li>
            <li>
              Candidate medical check, documentation & onboarding assistance.
            </li>{" "}
          </Box>
        </Grid>

        {/* Right Image with Floating Animation */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Box
            component="img"
            src={WorkImg}
            alt="Job Work"
            sx={{
              width: isMobile ? "100%" : "90%",
              borderRadius: "5px",
              animation: "float 4s ease-in-out infinite",
              "@keyframes float": {
                "0%": { transform: "translateY(0px)" },
                "50%": { transform: "translateY(-15px)" },
                "100%": { transform: "translateY(0px)" },
              },
            }}
          />
        </Grid>
      </Grid>

      {/* Submit Button */}
      <Box sx={{ textAlign: "center", mt: 4 }}>
        <Button
          variant="contained"
          onClick={() =>
            window.open(
              "https://docs.google.com/forms/d/e/1FAIpQLSc6Y5FBXjT5HAnGWYVxcilUkELtQbjV1EXzzKfboPJscA_Ofg/viewform?usp=publish-editor",
              "_blank"
            )
          }
          sx={{
            backgroundColor: "#003b5c",
            color: "#fff",
            px: 4,
            py: 2,
            borderRadius: "25px",
            fontSize: "1rem",
            fontWeight: 600,
            textTransform: "none",
            "&:hover": {
              backgroundColor: "#022c43",
            },
          }}
        >
          Submit Application Form
        </Button>
      </Box>

      {/* Footer Contact Info */}
      <Box sx={{ textAlign: "center", my: 2.5 }}>
        <Typography sx={{ color: "#435963", fontSize: "1rem" }}>
          Or contact us directly: +971 504059957 | info@whitehubglobal.com
        </Typography>
      </Box>
    </Box>
  );
};

export default JobOpeningsSection;

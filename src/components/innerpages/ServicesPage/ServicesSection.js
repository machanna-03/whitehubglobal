import React from "react";
import { Box, Typography, Card, CardContent, Grid } from "@mui/material";
import icon1 from "../../../assests/branding.svg";
import icon2 from "../../../assests/development.svg";
import icon3 from "../../../assests/app.svg";

const services = [
  {
    icon: icon1,
    title: "Overseas Recruitment",
    description: "Sourcing skilled, semi-skilled, and unskilled workers through a strong network of partners across Asia and Africa.",
    link: "#",
  },
  {
    icon: icon2,
    title: "Local Hiring (UAE)",
    description: " Providing manpower from within the UAE, including candidates with transferable visas and immediate availability.",
    link: "#",
  },
  {
    icon: icon3,
    title: "Executive Search & White-Collar Recruitment",
    description: "Identifying and recruiting professionals and management-level candidates across multiple sectors.",
    link: "#",
  },
  {
    icon: icon3,
    title: "Project-Based Manpower Supply",
    description: "Supplying workforce for shortterm and long-term projects in construction, hospitality, logistics, oil & gas, and other industries.",
    link: "#",
  },
  {
    icon: icon2,
    title: "HR & Documentation Support",
    description: "Managing visa processing, onboarding, and compliance services to ensure a smooth hiring process.",
    link: "#",
  },
];

const ServicesSection = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(to bottom,#e2f3ff 0, #f0f4f8ff 100%)",
      }}
    >
      <Box sx={{ maxWidth: 1200, mx: "auto", py: 10, px: 2 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              fontWeight: 400,
              mb: 2,
              fontSize: "16px",
              color: "#e60072",
              textTransform: "uppercase",
              letterSpacing: ".5px",
              lineHeight: "26px",
            }}
          >
            Service
          </Typography>
          <Typography
            sx={{
              fontWeight: 600,
              mb: 4,
              fontSize: "40px",
              color: "#050748",
              lineHeight: "52px",
            }}
          >
            Specializing In
          </Typography>
        </Box>

        {/* 🔥 Fixed Grid Layout */}
        <Grid container spacing={4} justifyContent="center">
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  borderRadius: "5px",
                  boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  height: "100%",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                  },
                }}
              >
                <Box
                  component="img"
                  src={service.icon}
                  alt="icon"
                  sx={{
                    width: 85,
                    height: 90,
                    marginY: 2.5,
                  }}
                />

                <CardContent sx={{ p: 0 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: "18px",
                      lineHeight: "26px",
                      fontWeight: 600,
                      width: 200,
                      mb: 1,
                      color: "#050748",
                      textAlign: "center",
                      mx: "auto",
                    }}
                  >
                    {service.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: "16px",
                      color: "#6a6a8e",
                      width: 250,
                      lineHeight: "24px",
                      mb: 1,
                      mx: "auto",
                    }}
                  >
                    {service.description}
                  </Typography>

                  <Typography
                    component="a"
                    href={service.link}
                    sx={{
                      textDecoration: "none",
                      color: "#6a6a8e",
                      fontSize: "17px",
                      fontWeight: 600,
                      display: "inline-flex",
                      alignItems: "center",
                      "&:hover": {
                        color: "#ff1f8e",
                      },
                    //   mb: 1,
                    }}
                  >
                    Learn More &gt;
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default ServicesSection;

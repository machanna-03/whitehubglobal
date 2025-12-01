import React from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Container,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

import philosophy1 from "../../src/assests/diversity01.jpg";
import philosophy2 from "../../src/assests/p1.jpg";
import philosophy3 from "../../src/assests/images (1).jpeg";

const blogData = [
  {
    image: philosophy1,
    title: "Integrity",
    description:
      "We uphold honesty and transparency at every stage of the recruitment process.",
  },
  {
    image: philosophy2,
    title: "Precision",
    description:
      "We carefully match skills with opportunity, ensuring that every placement adds real value.",
  },
  {
    image: philosophy3,
    title: "Partnership",
    description:
      "We grow with our clients and candidates, fostering long-term relationships based on mutual trust and respect.",
  },
];

const OurPhilosophy = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // true on mobile

  return (
    <Box
      sx={{
        my: { xs: 2, md: 4 },
        bgcolor: "#fff",
        p: { xs: 2.5, md: 0 }, // 4-side padding ONLY on mobile
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          maxWidth: "1200px",
          width: "100%",
          px: isMobile ? 0 : 0,
        }}
      >
        {/* Section Title */}
        <Typography
          sx={{
            fontWeight: 900,
            fontSize: { xs: "1.35rem", sm: "2.1rem", md: "2.6rem" },
            textAlign: "center",
            color:'#003b5c',
            mb: { xs: 2.8, md: 6 },
          }}
        >
          Our Philosophy
        </Typography>

        {/* Cards */}
        <Grid container spacing={{ xs: 2, md: 3 }} justifyContent="center">
          {blogData.map((blog, idx) => (
            <Grid item xs={12} sm={6} md={4} key={idx}>
              <Card
                elevation={1}
                sx={{
                  borderRadius: "1.1em",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                  overflow: "hidden",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",

                  // Mobile smaller sizing
                  ...(isMobile && {
                    borderRadius: "1em",
                    boxShadow: "0 1px 5px rgba(0,0,0,0.1)",
                  }),
                }}
              >
                <CardMedia
                  component="img"
                  image={blog.image}
                  alt={blog.title}
                  sx={{
                    width: "100%",
                    height: isMobile ? 120 : 180, // smaller image on mobile
                    objectFit: "cover",
                  }}
                />
                <CardContent
                  sx={{
                    flex: "1 1 auto",
                    px: isMobile ? 1.5 : 2.2,
                    py: isMobile ? 1.4 : 2,
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 700,
                      fontSize: isMobile ? "1rem" : "1.25rem",
                      mb: 1.2,
                      color: "#003b5c",
                    }}
                  >
                    {blog.title}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: isMobile ? "0.92rem" : "1.07rem",
                      color: "#2a303cff",
                      lineHeight: isMobile ? 1.35 : 1.55,
                    }}
                  >
                    {blog.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default OurPhilosophy;

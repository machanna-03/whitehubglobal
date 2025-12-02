import React from "react";
import {
  Box,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import phone1 from "../../../assests/c.jpg";

const JobSection = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/971504059957", "_blank");
  };
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Box
        sx={{
          maxWidth: "1100px",
          mx: "auto",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          py:isMobile?0: 6,
        }}
      >
        {/* Left Image */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            mb: { xs: 4, md: 0 },
          }}
        >
          <Box
            component="img"
            src={phone1}
            alt="Recruitment Services"
            sx={{
              height: { xs: "200px", md: "350px" },
              position: "relative",
              zIndex: 2,
            }}
          />
        </Box>

        {/* Right Content */}
        <Box sx={{ flex: 1, pl: { xs: 2, md: 4 } }}>
          <Typography
            sx={{
              color: "#121212",
              fontWeight: 700,
              fontSize: isMobile ? "1.4rem" : "1.4rem",
              textAlign: "center",
            }}
          >
            Strong Workforce Network <br/>for Every Industry
          </Typography>

          <Typography
            sx={{
              color: "#3f3e3e",
              fontWeight: 600,
              fontSize: isMobile ? "1rem" : "1.05rem",
              mt: 2,
            }}
          >
            What We Offer :
          </Typography>

          <Box
            component="ul"
            sx={{
              mt: 2,
              px:isMobile?2: 3,
              color: "#435963",
              fontSize: isMobile ? "0.8rem" : "1rem",
              textAlign:"justify" ,
              lineHeight: 1.8,
              "& li": { mb: 1 },
            }}
          >
            <li>
              Construction & Engineering - Skilled workforce for civil,
              mechanical, and industrial project requirements.
            </li>
            <li>
              Hospitality & Catering - Professional staff for hotels,
              restaurants, and event service operations.
            </li>
            <li>
              Oil & Gas - Trained manpower for upstream, midstream, and
              downstream field activities.
            </li>
            <li>
              Logistics & Transportation - Reliable workers for warehouse,
              supply chain, and cargo handling roles.
            </li>
            <li>
              Facility Management - Support staff for maintenance, cleaning, and
              building operations.
            </li>
            <li>
              Retail & Customer Service - Customer-facing staff for stores,
              sales, and service desks.
            </li>
            <li>
              Healthcare & Support Staff - Qualified caregivers, ward
              assistants, and support personnel.
            </li>
          </Box>
        </Box>
      </Box>

      {/* Contact CTA */}
      <Box
        sx={{
          maxWidth: "1100px",
          mx: "auto",
          textAlign: "center",
          mb:isMobile?2: 8,
        }}
      >
        <Typography sx={{ mb: 2, color: "#3f6272ff", fontSize: "1.2rem" }}>
          Looking for manpower supply <br /> or recruitment support?
        </Typography>

        <Button
          variant="contained"
          onClick={handleWhatsAppClick}
          sx={{
            backgroundColor: "#25D366",
            color: "#fff",
            fontWeight: 600,
            textTransform: "none",
            px: 3,
            py: 1.2,
            borderRadius: "25px",
            fontSize: "0.8rem",
            "&:hover": { backgroundColor: "#1da851" },
          }}
          startIcon={<WhatsAppIcon />}
        >
          Contact Us on WhatsApp
        </Button>
      </Box>
    </>
  );
};

export default JobSection;

import React from "react";
import { Box, Typography, Card, CardContent, useMediaQuery, useTheme } from "@mui/material";

import icon1 from "../../src/assests/branding.svg";
import icon2 from "../../src/assests/development.svg";
import icon3 from "../../src/assests/app.svg";

const services = [
  {
  icon: icon1,
  title: "Skilled Workforce Deployment",
  description:
    "Supplying trained and certified workers for specialized roles across industries like construction, hospitality, and facility management.",
  link: "#",
},

  {
    icon: icon2,
    title: "Local Hiring (UAE)",
    description:
      "Providing manpower from within the UAE, including candidates with transferable visas and immediate availability.",
    link: "#",
  },
  {
    icon: icon3,
    title: "Executive Search & White-Collar Recruitment",
    description:
      "Identifying and recruiting professionals and management-level candidates across multiple sectors.",
    link: "#",
  },
  {
    icon: icon3,
    title: "Project-Based Manpower Supply",
    description:
      "Supplying workforce for short-term and long-term projects in construction, hospitality, logistics, oil & gas, and other industries.",
    link: "#",
  },
  {
    icon: icon2,
    title: "HR & Documentation Support",
    description:
      "Managing visa processing, onboarding, and compliance services to ensure a smooth hiring process.",
    link: "#",
  },
];

const Service = () => {
  const scrollRef = React.useRef(null);
  const theme = useTheme();
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  const cardsToShow = isMobile ? 1 : isTablet ? 2 : 4;
  const cardGap = 24; // 24px gap as defined by gap={3}

  const scrollToIndex = (index) => {
    if (!scrollRef.current) return;
    
    const cardWidth = scrollRef.current.children[0]?.offsetWidth || 0;
    const scrollPosition = index * (cardWidth + cardGap);
    
    scrollRef.current.scrollTo({
      left: scrollPosition,
      behavior: "smooth"
    });
    setCurrentIndex(index);
  };

  const scrollLeft = () => {
    if (currentIndex > 0) {
      scrollToIndex(currentIndex - 1);
    }
  };

  const scrollRight = () => {
    if (currentIndex < services.length - 1) {
      scrollToIndex(currentIndex + 1);
    }
  };

  // Handle scroll events to update current index
  const handleScroll = () => {
    if (!scrollRef.current || !isMobile) return;
    
    const scrollLeft = scrollRef.current.scrollLeft;
    const cardWidth = scrollRef.current.children[0]?.offsetWidth || 0;
    const newIndex = Math.round(scrollLeft / (cardWidth + cardGap));
    
    if (newIndex !== currentIndex) {
      setCurrentIndex(newIndex);
    }
  };

  const arrowBtnStyle = {
    padding: "12px 20px",
    fontSize: "22px",
    borderRadius: "50%",
    cursor: "pointer",
    border: "none",
    background: "#ffffff",
    boxShadow: "0 4px 14px rgba(0,0,0,0.2)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: "48px",
    minHeight: "48px",
  };

  return (
    <Box
      sx={{
        position: "relative",
        py: 8,
        backgroundColor: "#e3f0fc",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          maxWidth: 1200,
          mx: "auto",
          position: "relative",
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <Box textAlign="center" mb={4}>
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: "40px",
              lineHeight: "52px",
              color: "#18326a",
            }}
          >
            Our Services
          </Typography>
        </Box>

        {/* DESKTOP/TABLET ARROWS */}
        {!isMobile && (
          <>
            <Box
              sx={{
                position: "absolute",
                top: "55%",
                left: "10px",
                transform: "translateY(-50%)",
                zIndex: 10,
              }}
            >
              <button onClick={scrollLeft} style={arrowBtnStyle}>
                ←
              </button>
            </Box>

            <Box
              sx={{
                position: "absolute",
                top: "55%",
                right: "10px",
                transform: "translateY(-50%)",
                zIndex: 10,
              }}
            >
              <button onClick={scrollRight} style={arrowBtnStyle}>
                →
              </button>
            </Box>
          </>
        )}

        {/* SCROLLABLE CARDS */}
        <Box
          ref={scrollRef}
          onScroll={handleScroll}
          sx={{
            display: "flex",
            gap: 3,
            overflowX: isMobile ? "auto" : "hidden",
            scrollBehavior: "smooth",
            py: 2,
            px: isMobile ? 2 : 0,
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": {
              display: "none",
            },
            ...(isMobile && {
              scrollSnapType: "x mandatory",
              "& > *": {
                scrollSnapAlign: "center",
              },
            }),
          }}
        >
          {services.map((service, index) => (
            <Card
              key={index}
              sx={{
                flex: isMobile
                  ? `0 0 calc(100% - ${cardGap / 2}px)`
                  : `0 0 calc(${100 / cardsToShow}% - ${cardGap * (cardsToShow - 1) / cardsToShow}px)`,
                minWidth: isMobile ? "calc(85% - 12px)" : "auto",
                borderRadius: "5px",
                background: "#fff",
                textAlign: "center",
                boxShadow: "0 6px 18px rgba(0,0,0,0.15)",
                scrollSnapAlign: isMobile ? "center" : "none",
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
                  mx: "auto",
                }}
              />

              <CardContent sx={{ px: 2, pb: 2 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "18px",
                    fontWeight: 600,
                    color: "#050748",
                  }}
                >
                  {service.title}
                </Typography>

                <Typography
                  sx={{
                    fontSize: "15px",
                    color: "#6a6a8e",
                    my: 1.5,
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
                    fontSize: "16px",
                    fontWeight: 600,
                    "&:hover": { color: "#003b5c" },
                  }}
                >
                  Learn More &gt;
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>

        {/* MOBILE VERSION → ARROWS + DOTS IN CENTER */}
        {isMobile && (
          <Box
            sx={{
              mt: 3,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 3,
            }}
          >
            {/* Left Arrow */}
            <button 
              onClick={scrollLeft} 
              style={arrowBtnStyle}
              disabled={currentIndex === 0}
            >
              ←
            </button>

            {/* DOTS INDICATOR */}
            <Box sx={{ display: "flex", gap: 1.5, alignItems: "center" }}>
              {services.map((_, index) => (
                <Box
                  key={index}
                  sx={{
                    width: index === currentIndex ? 14 : 6,
                    height: index === currentIndex ? 14 : 6,
                    backgroundColor: "#004767",
                    borderRadius: "50%",
                    opacity: index === currentIndex ? 1 : 0.6,
                    transition: "all 0.3s ease",
                  }}
                />
              ))}
            </Box>

            {/* Right Arrow */}
            <button 
              onClick={scrollRight} 
              style={arrowBtnStyle}
              disabled={currentIndex === services.length - 1}
            >
              →
            </button>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Service;
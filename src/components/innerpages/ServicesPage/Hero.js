import * as React from "react";
import {
  Box,
  Container,
  Stack,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { styled } from "@mui/system";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";

import heroImg from "../../../assests/mission&vision.avif";

const ACCENT_GOLD = "#D2C067";

const HeroRoot = styled(Box)(({ theme }) => ({
  position: "relative",
  overflow: "hidden",
  width: "100%",
  height: "80vh", // desktop default
  minHeight: "400px",
  backgroundColor: "#000",
  color: "#fff",

  [theme.breakpoints.down("sm")]: {
    height: "55vh", // smaller hero on mobile
    minHeight: "300px",
  },
}));

function Hero() {
  const wrapRef = React.useRef(null);
  const imgRef = React.useRef(null);
  const rafRef = React.useRef(0);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  React.useEffect(() => {
    const wrap = wrapRef.current;
    const img = imgRef.current;
    if (!wrap || !img) return;

    const handleScroll = () => {
      // Disable parallax effect on mobile
      if (isMobile) return;

      cancelAnimationFrame(rafRef.current);

      rafRef.current = requestAnimationFrame(() => {
        const rect = wrap.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        const scrollTop =
          window.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop ||
          0;

        const elementTop = rect.top + scrollTop;

        const progress = (scrollTop - elementTop + viewportHeight) / viewportHeight;
        const clamped = Math.min(Math.max(progress, 0), 1);

        const maxMove = 200; // desktop movement
        const translateY = clamped * maxMove;

        img.style.transform = `translate3d(-50%, calc(-50% + ${translateY}px), 0) scale(1.1)`;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [isMobile]);

  return (
    <HeroRoot ref={wrapRef}>
      {/* Background Image */}
      <Box
        ref={imgRef}
        component="img"
        src={heroImg}
        alt="Hero Background"
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: { xs: "115%", sm: "120%" }, // mobile smaller width
          height: { xs: "115%", sm: "140%" }, // mobile smaller height
          objectFit: "cover",
          transform: "translate3d(-50%, -50%, 0) scale(1.1)",
          pointerEvents: "none",
          userSelect: "none",
          willChange: "transform",
        }}
      />

      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.45)",
        }}
      />

      {/* Content */}
      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          px: 2,
        }}
      >
        <Stack spacing={2} alignItems="center">
          <Typography
            component="h1"
            sx={{
              fontWeight: 900,
              letterSpacing: 1,
              fontSize: { xs: 20, sm: 28, md: 36 },
              lineHeight: 1.2,
              textTransform: "uppercase",
            }}
          >
            Comfort, Safety, and Speed – Everything for
            <br />
            Your Journey
          </Typography>

          <Button
            variant="contained"
            disableElevation
            endIcon={<KeyboardArrowRightRoundedIcon />}
            sx={{
              bgcolor: ACCENT_GOLD,
              color: "#111",
              fontWeight: 800,
              borderRadius: 0.75,
              px: { xs: 2.5, sm: 3 },
              py: { xs: 0.9, sm: 1.1 },
              "&:hover": { bgcolor: "#C8B65A" },
            }}
          >
            READ MORE
          </Button>
        </Stack>
      </Container>
    </HeroRoot>
  );
}

export default Hero;

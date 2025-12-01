import React, { useEffect, useState } from "react";
import { Box, Grid, Typography, useTheme, useMediaQuery } from "@mui/material";

// ⭐ Updated Stats Content
const stats = [
  {
    label: "Industries Served Worldwide",
    value: 14,
    suffix: "+",
    color: "#fff",
    bg: "#181d25",
    highlight: false,
  },
  {
    label: "Global Talent Network",
    value: 7,
    suffix: "+ Countries",
    color: "#fff",
    bg: "#725BFF",
    highlight: true,
  },
  {
    label: "Client Satisfaction Rate",
    value: 98,
    suffix: "%",
    color: "#fff",
    bg: "#181d25",
    highlight: false,
  },
  {
    label: "Workforce Categories",
    value: 3,
    suffix: "+ Tiers",
    color: "#fff",
    bg: "#181d25",
    highlight: false,
  },
];

// ⭐ Count-up animation
function useAnimatedCounts(data, duration = 1400) {
  const [animated, setAnimated] = useState(data.map(() => 0));
  useEffect(() => {
    let raf;
    let start;
    function animate(ts) {
      if (!start) start = ts;
      const progress = Math.min(1, (ts - start) / duration);
      setAnimated(data.map((item) => Math.floor(progress * item.value)));
      if (progress < 1) raf = requestAnimationFrame(animate);
      else setAnimated(data.map((item) => item.value));
    }
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [data, duration]);
  return animated;
}

const StatsSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const animatedCounts = useAnimatedCounts(stats);

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <Box
      sx={{
        py: { xs: 4, md: 8 },
        px: { xs: 2, md: 4 },
        bgcolor: "#eff5fa",
        minHeight: 320,
      }}
    >
      <Grid container spacing={{ xs: 2, sm: 2, md: 4 }} justifyContent="center">
        {stats.map((card, idx) => {
          const isHovered = hoveredIndex === idx;

          return (
            <Grid item xs={12} sm={6} md={3} key={card.label}>
              <Box
                onPointerEnter={(e) => {
                  const p = e.pointerType ?? "mouse";
                  if (p === "mouse" || p === "pen") setHoveredIndex(idx);
                }}
                onPointerLeave={() => setHoveredIndex(null)}
                tabIndex={0}
                sx={{
                  background: card.highlight ? card.bg : "#0f2b49",
                  color: card.color,
                  borderRadius: "18px",
                  px: { xs: 2.4, md: 1.4 },
                  py: { xs: 4, md: 4.3 },
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  height: { xs: 200, md: 250 },
                  boxShadow: card.highlight
                    ? `0 3px 36px 0 rgba(114,91,255,0.6)`
                    : "none",
                  transition: "all 0.25s ease",
                  cursor: "pointer",

                  // ⭐ Better hover UI
                  ...(isHovered && !card.highlight
                    ? {
                        background: "#725BFF",
                        transform: "translateY(-6px)",
                        boxShadow: "0 10px 40px rgba(114, 91, 255, 0.45)",
                      }
                    : {}),
                }}
              >
                {/* ⭐ Big Animated Number */}
                <Typography
                  sx={{
                    fontWeight: 800,
                    fontSize: { xs: "2.6rem", md: "3.4rem" },
                    mb: 0.2,
                    color: "#fff",
                    letterSpacing: "-1px",
                  }}
                >
                  {animatedCounts[idx]}
                  {card.suffix}
                </Typography>

                {/* ⭐ Strong label text */}
                <Typography
                  sx={{
                    color: "#ccd2df",
                    fontWeight: 600,
                    textAlign: "center",
                    fontSize: { xs: "1.1rem", md: "1.25rem" },
                    mb: 2,
                    letterSpacing: "0.3px",
                  }}
                >
                  {card.label}
                </Typography>

                {/* ⭐ Softer dotted divider */}
                <Box
                  sx={{
                    width: "100%",
                    borderBottom: "1.5px dotted rgba(255,255,255,0.5)",
                    mb: 2,
                  }}
                />

                {/* ⭐ Professional subtext */}
                <Typography
                  sx={{
                    fontSize: { xs: "1rem", md: "1.1rem" },
                    color: "#eaeaee",
                    textAlign: "center",
                    opacity: 0.9,
                    fontWeight: 400,
                  }}
                >
                  Connecting skilled talent with
                  <br />
                  industry-leading employers
                </Typography>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default StatsSection;

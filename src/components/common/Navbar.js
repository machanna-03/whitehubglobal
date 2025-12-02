import * as React from "react";
import { Box, Container, Stack, Typography, IconButton, useMediaQuery, useTheme } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

function Navbar() {
  const [showBar, setShowBar] = React.useState(true);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  if (!showBar) return null; // 🔥 Hides the bar when user clicks close

  return (
    <Box
      component="section"
      sx={{
        bgcolor: "#0f2b49",
        color: "#fff",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        py: { xs: 0.75, sm: 0.9 },
        position: "relative",
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          spacing={2}
          sx={{
            flexWrap: { xs: "wrap", sm: "nowrap" },
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: { xs: 9, sm: 16 },
              lineHeight: 1.2,
            }}
          >
            WHITEHUB GLOBAL CONSULTANTS -{" "}
            <span style={{ fontSize:isMobile?"80%": "85%", fontWeight: 400 }}>
              Global manpower solutions for every industry
            </span>
          </Typography>
        </Stack>
      </Container>

      {/* ❌ Close Icon */}
      <IconButton
        onClick={() => setShowBar(false)}
        sx={{
          position: "absolute",
          right: 12,
          top: "50%",
          transform: "translateY(-50%)",
          color: "#fff",
          p: 0.5,
        }}
      >
        <CloseIcon sx={{ fontSize: 22 }} />
      </IconButton>
    </Box>
  );
}

export default Navbar;

import React from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  TextField,
  MenuItem,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

import consultantImg from "../../../assests/consultation.jpg";

const Consultant = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [service, setService] = React.useState("");

  return (
    <Box
      sx={{
        px: { xs: 2, md: 8 },
        py: { xs: 2.5, md: 4 },
        bgcolor: "#fff",
      }}
    >
      {/* Section Title */}
      <Typography
        variant="h4"
        align="center"
        sx={{
          fontWeight: 800,
          letterSpacing: 1,
          mb: 1,
          color: "#18326a",
          fontSize: { xs: "1.6rem", sm: "2rem" },
        }}
      >
        CONSULTATION
      </Typography>

      <Typography
        align="center"
        sx={{
          maxWidth: 500,
          mx: "auto",
          mb: 4,
          color: "#6a6c71",
          fontSize: { xs: "0.95rem", sm: "1rem" },
        }}
      >
        A guided journey that starts with expert consultation and ends with
        hiring skilled manpower tailored to your needs.{" "}
      </Typography>

      {/* Main Card */}
      <Box
        sx={{
          maxWidth: 1050,
          mx: "auto",
          overflow: "hidden",
        }}
      >
        <Grid container sx={{ flexDirection: isMobile ? "column" : "row" }}>
          {/* LEFT — IMAGE */}
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={consultantImg}
              alt="Consultant"
              sx={{
                width: 460,
                height: isMobile ? 280 : 360,
                objectFit: "cover",
                borderRadius: isMobile ? "12px" : "5px",
              }}
            />
          </Grid>

          {/* RIGHT — CONTENT */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                p: { xs: 2.5, sm: 4 },
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Form grid */}
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Name"
                    variant="standard"
                    fullWidth
                    required
                    InputLabelProps={{ sx: { fontSize: "1rem" } }}
                    inputProps={{ style: { fontSize: "1rem" } }}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Phone"
                    variant="standard"
                    fullWidth
                    required
                    InputLabelProps={{ sx: { fontSize: "1rem" } }}
                    inputProps={{ style: { fontSize: "1rem" } }}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Email"
                    variant="standard"
                    fullWidth
                    required
                    InputLabelProps={{ sx: { fontSize: "1rem" } }}
                    inputProps={{ style: { fontSize: "1rem" } }}
                  />
                </Grid>

                {/* SERVICE FIELD WITH LIGHTER PLACEHOLDER */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    select
                    variant="standard"
                    fullWidth
                    required
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    SelectProps={{ displayEmpty: true }}
                    sx={{ mt: 1.8 }}
                    InputLabelProps={{
                      sx: { fontSize: "1rem", mt: 1.5 },
                    }}
                    inputProps={{
                      style: { fontSize: "1rem" },
                    }}
                  >
                    <MenuItem value="" disabled>
                      Service you're looking for?
                    </MenuItem>

                    <MenuItem value="Skilled Workforce Deployment">
                      Skilled Workforce Deployment
                    </MenuItem>
                    <MenuItem value="Local Hiring (UAE)">
                      Local Hiring (UAE)
                    </MenuItem>
                    <MenuItem value="Executive Search">
                      Executive Search
                    </MenuItem>
                    <MenuItem value="Project-Based Manpower Supply">
                      Project-Based Manpower Supply
                    </MenuItem>
                    <MenuItem value="HR & Documentation Support">
                      HR & Documentation Support
                    </MenuItem>
                  </TextField>
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    label="Message"
                    variant="standard"
                    multiline
                    minRows={4}
                    fullWidth
                    InputLabelProps={{ sx: { fontSize: "1rem" } }}
                    inputProps={{ style: { fontSize: "1rem" } }}
                  />
                </Grid>
              </Grid>

              {/* Button */}
              <Box sx={{ mt: 5, textAlign: isMobile ? "center" : "left" }}>
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "#081d43",
                    color: "#fff",
                    px: 4,
                    py: 1.1,
                    fontWeight: 600,
                    fontSize: "0.9rem",
                    borderRadius: "6px",
                    "&:hover": { bgcolor: "#2952da" },
                  }}
                >
                  GET A QUOTES
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Consultant;

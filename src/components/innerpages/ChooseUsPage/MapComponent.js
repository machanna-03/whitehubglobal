import React from "react";
import { Box, Paper, Typography } from "@mui/material";

const MapComponent = () => {
  return (
    <Box>
      <Box sx={{ width: "100%", height: "500px", my: 2 }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d416693.11493818025!2d77.30126274279222!3d12.954459536684793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e1!3m2!1sen!2sin!4v1764394943746!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </Box>
    </Box>
  );
};

export default MapComponent;

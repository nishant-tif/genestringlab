import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { PlayCircleOutline } from "@mui/icons-material";

const LabTour = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#F8F6F2",
        padding: { xs: "40px 0", md: "60px 0", lg: "80px 0" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: "32px", md: "60px" },
          alignItems: "center",

          margin: "0 auto",
          paddingLeft: 0,
          paddingRight: { xs: 2, md: 4 },
        }}
      >
        {/* Left Section - Video/Image */}
        <Box
          sx={{
            flex: "0 0 auto",
            width: { xs: "100%", sm: "90%", md: "680px" },
            height: { xs: "250px", sm: "350px", md: "390px" },
            position: "relative",
            borderRadius: { xs: "0", md: "0 24px 24px 0" },
            overflow: "hidden",
            ml: { xs: 0, md: 0 },
          }}
        >
          {/* Background Image */}
          <Image
            src="/images/tour.png"
            alt="Laboratory Tour"
            fill
            style={{
              objectFit: "cover",
            }}
          />

          {/* Play Button Overlay */}
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              cursor: "pointer",
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "translate(-50%, -50%) scale(1.1)",
              },
            }}
          >
            <PlayCircleOutline
              sx={{
                fontSize: { xs: "60px", md: "80px" },
                color: "white",
                filter: "drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))",
              }}
            />
          </Box>
        </Box>

        {/* Right Section - Content */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "24px",
          }}
        >
          {/* Title */}
          <Typography
            sx={{
              fontFamily: "Onest",
              fontWeight: 700,
              fontSize: { xs: "28px", sm: "32px", md: "42px", lg: "42px" },
              lineHeight: "1.2",
              color: "#000000",
            }}
          >
            Take a Tour of Our Advanced Laboratory
          </Typography>

          {/* Description */}
          <Typography
            sx={{
              fontFamily: "Onest",
              fontWeight: 400,
              fontSize: { xs: "14px", sm: "16px", md: "24px" },
              lineHeight: "1.6",
              color: "#666666",
            }}
          >
            Discover our advanced testing facility equipped with world-class
            instruments and technology, ensuring precision and reliability in
            every result.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default LabTour;

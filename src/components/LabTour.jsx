import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import { PlayCircleOutline } from "@mui/icons-material";

const LabTour = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#F8F6F2",
        padding: "80px 0",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: "40px", md: "60px" },
            alignItems: "center",
          }}
        >
          {/* Left Section - Video/Image */}
          <Box
            sx={{
              flex: "0 0 auto",
              width: { xs: "100%", md: "680px" },
              height: { xs: "auto", md: "390px" },
              position: "relative",
              borderRadius: "24px",
              overflow: "hidden",
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
                  fontSize: "80px",
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
                fontSize: "40px",
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
                fontSize: "18px",
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
      </Container>
    </Box>
  );
};

export default LabTour;

import React from "react";
import { Box, Container, Typography } from "@mui/material";

const Mission = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#FFFFFF",
        padding: { xs: "60px 0", md: "50px 0", lg: "70px 0" },
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            backgroundColor: "#F8F6F2",
            borderRadius: "24px",
            padding: { xs: "50px 30px", sm: "60px 50px", md: "70px 80px" },
            textAlign: "center",
            mx: { xs: 2, md: 4 },
          }}
        >
          {/* Title */}
          <Typography
            sx={{
              fontFamily: "Onest",
              fontWeight: 700,
              fontSize: { xs: "32px", sm: "36px", md: "40px" },
              lineHeight: "1.3",
              color: "#000000",
              marginBottom: { xs: "24px", md: "30px" },
            }}
          >
            Our Mission
          </Typography>

          {/* Mission Description */}
          <Typography
            sx={{
              fontFamily: "Onest",
              fontWeight: 400,
              fontSize: { xs: "15px", md: "16px" },
              lineHeight: "1.7",
              color: "#555555",
              maxWidth: "1050px",
              margin: "0 auto",
            }}
          >
            We exist to transform the way individuals and healthcare
            professionals approach health and disease through the power of
            genetics. Our mission is to deliver{" "}
            <Box
              component="span"
              sx={{
                fontWeight: 700,
                color: "#000000",
              }}
            >
              accurate, timely, and clinically meaningful insights
            </Box>
            , empowering people to make informed decisions about their personal
            health and reproductive options. By integrating advanced science
            with human understanding, we aim to inspire confidence, enable early
            intervention, and support a healthier tomorrow for generations to
            come.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Mission;

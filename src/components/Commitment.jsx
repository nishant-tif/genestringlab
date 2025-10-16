import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";

const Commitment = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#FFFFFF",
        padding: { xs: "40px 0", md: "60px 0", lg: "80px 0" },
      }}
    >
      <Container maxWidth="lg">
        {/* Main Content Container */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            gap: { xs: "40px", md: "50px", lg: "50px" },
            mx: { xs: 2, md: 0 },
          }}
        >
          {/* Left Side - Image with Beige Background */}
          <Box
            sx={{
              flex: { xs: "0 0 auto", md: "0 0 35%" },
              width: { xs: "100%", md: "35%" },
              maxWidth: { xs: "400px", md: "none" },
              backgroundColor: "#F8F6F2",
              borderRadius: "24px",
              padding: { xs: "40px 30px", sm: "50px 40px", md: "50px" },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: { xs: "280px", sm: "320px", md: "300px" },
              }}
            >
              <Image
                src="/images/commitment.svg"
                alt="Our Commitment to Clarity and Care"
                fill
                style={{ objectFit: "contain" }}
              />
            </Box>
          </Box>

          {/* Right Side - Text Content (White Background) */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: { xs: "20px", md: "24px" },
              px: { xs: 2, md: 0 },
            }}
          >
            {/* Title */}
            <Typography
              sx={{
                fontFamily: "Onest",
                fontWeight: 700,
                fontSize: { xs: "26px", sm: "30px", md: "34px", lg: "38px" },
                lineHeight: "1.2",
                color: "#000000",
              }}
            >
              Our Commitment to Clarity and Care
            </Typography>

            {/* First Paragraph */}
            <Typography
              sx={{
                fontFamily: "Onest",
                fontWeight: 400,
                fontSize: { xs: "15px", md: "16px" },
                lineHeight: "1.7",
                color: "#333333",
              }}
            >
              At Genestrings Lab, we bring together advanced genetic technology
              and expert interpretation to ensure that your results are not only
              accurate but also meaningful to you. We believe in turning complex
              science into clear, actionable insights, empowering you to make
              confident, informed decisions about your health and your family's
              future.
            </Typography>

            {/* Second Paragraph */}
            <Typography
              sx={{
                fontFamily: "Onest",
                fontWeight: 400,
                fontSize: { xs: "15px", md: "16px" },
                lineHeight: "1.7",
                color: "#333333",
              }}
            >
              From fertility to prenatal care and beyond, our precise
              diagnostics are designed to make complex decisions simpler and
              more manageable. We partner with you every step of the way -
              because understanding is the first step toward hope.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Commitment;

import React from "react";
import { Box, Container, Typography } from "@mui/material";

const Aboutbanner = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#FFFFFF",
      }}
    >
      {/* Top Section - Full Width Image with Overlayed Card */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: "400px", md: "500px", lg: "600px" },
          marginBottom: { xs: "40px", md: "80px" },
        }}
      >
        {/* Full Width Image */}
        <Box
          sx={{
            width: "100%",
            height: "100%",
            overflow: "hidden",
          }}
        >
          <img
            src="/images/aboutbanner.svg"
            alt="About Genestrings Lab"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Box>

        {/* Overlayed White Card from Right */}
        <Container maxWidth="xl">
          <Box
            sx={{
              position: "absolute",
              right: { xs: "20px", md: "80px", lg: "-10px" },
              top: "50%",
              transform: "translateY(-50%)",
              backgroundColor: "#FFFFFF",
              borderRadius: "16px",
              padding: { xs: "24px 20px", md: "40px 48px", lg: "48px 56px" },
              maxWidth: {
                xs: "calc(100% - 40px)",
                sm: "500px",
                md: "600px",
                lg: "700px",
              },
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.12)",
            }}
          >
            {/* About Us Label */}
            <Typography
              className="onest-600"
              sx={{
                fontSize: { xs: "14px", md: "16px" },
                lineHeight: "1.5",
                color: "#666666",
                marginBottom: { xs: "12px", md: "16px" },
              }}
            >
              About Us
            </Typography>

            {/* Main Heading */}
            <Typography
              className="onest-700"
              sx={{
                fontSize: { xs: "20px", sm: "24px", md: "28px", lg: "32px" },
                lineHeight: "1.4",
                color: "#000000",
              }}
            >
              At Genestrings Lab, we are redefining access to advanced genetic
              diagnostics by blending scientific precision with compassionate
              care.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Bottom Section - Paragraphs */}
      <Container maxWidth="lg">
        <Box
          sx={{
            mx: { xs: 2, md: 4 },
            paddingBottom: { xs: "60px", md: "80px", lg: "100px" },
          }}
        >
          <Box
            sx={{
              maxWidth: "1200px",
              margin: "0 auto",
            }}
          >
            {/* First Paragraph */}
            <Typography
              className="onest-400"
              sx={{
                fontSize: { xs: "16px", md: "18px" },
                lineHeight: "1.8",
                color: "#333333",
                marginBottom: { xs: "20px", md: "24px" },
              }}
            >
              Established to bridge the gap between world-class genetic testing
              and everyday healthcare needs, we are{" "}
              <Box
                component="span"
                className="onest-700"
                sx={{ color: "#000000" }}
              >
                NABL-accredited
              </Box>
              ,{" "}
              <Box
                component="span"
                className="onest-700"
                sx={{ color: "#000000" }}
              >
                ISO 15189:2022 certified
              </Box>
              , and{" "}
              <Box
                component="span"
                className="onest-700"
                sx={{ color: "#000000" }}
              >
                PCPNDT registered
              </Box>
              , headquartered in the heart of the National Capital Region (NCR),
              with a growing network of satellite laboratories across India.
            </Typography>

            {/* Second Paragraph */}
            <Typography
              className="onest-400"
              sx={{
                fontSize: { xs: "16px", md: "18px" },
                lineHeight: "1.8",
                color: "#333333",
              }}
            >
              Our commitment is to make cutting-edge genetic testing accessible,
              understandable, and impactful for patients, families, and
              healthcare providers, both in India and overseas. We believe that
              clarity in genetic aetiology leads to clarity in decisions,
              management, and ultimately, better health outcomes.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Aboutbanner;

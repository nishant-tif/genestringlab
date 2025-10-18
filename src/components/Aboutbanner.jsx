import React from "react";
import { Box, Container, Typography } from "@mui/material";

const Aboutbanner = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#FFFFFF",
      }}
    >
      {/* Top Section - Full Width Hero Image */}
      <Box
        sx={{
          width: "100%",
          marginBottom: { xs: "40px", md: "60px" },
        }}
      >
        <img
          src="/images/abouthero.png"
          alt="About Genestrings Lab"
          style={{
            width: "100%",
            height: "auto",
            display: "block",
          }}
        />
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
                fontSize: { xs: "16px", md: "20px" },
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
                fontSize: { xs: "16px", md: "20px" },
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

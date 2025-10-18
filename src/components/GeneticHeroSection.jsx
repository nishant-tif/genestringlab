import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";

const GeneticHeroSection = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        paddingBottom: { xs: "40px", md: "60px" },
      }}
    >
      {/* Background Section with Image */}
      <Box
        sx={{
          position: "relative",
          height: { xs: "300px", md: "350px" },
          overflow: "hidden",
        }}
      >
        {/* Background Pattern Image */}
        <Image
          src="/images/geneticbanner.svg"
          alt="Genetic Testing Background"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </Box>

      {/* Overlayed Content Card with Fade */}
      <Container maxWidth="xl">
        <Box
          sx={{
            position: "relative",
            marginTop: { xs: "-60px", md: "-70px" },
            zIndex: 10,
            paddingX: { xs: 2, md: 4 },
          }}
        >
          <Box
            sx={{
              position: "relative",
              backgroundColor: "#fcfbf9",
              borderRadius: "32px",
              padding: { xs: "40px 32px 60px", md: "50px 80px 80px" },
              maxWidth: "1200px",
              margin: "0 auto",
              // boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)",

              // Gradient fade effect at bottom
              "&::after": {
                content: '""',
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "120px",
                background:
                  "linear-gradient(to bottom, rgba(252, 251, 249, 0) 0%, rgba(252, 251, 249, 0.5) 50%, rgba(252, 251, 249, 0.9) 100%)",
                borderBottomLeftRadius: "32px",
                borderBottomRightRadius: "32px",
                pointerEvents: "none",
              },
            }}
          >
            {/* Title */}
            <Typography
              sx={{
                fontFamily: "Onest",
                fontWeight: 700,
                fontSize: { xs: "32px", sm: "36px", md: "40px" },
                lineHeight: "1.2",
                color: "#000000",
                textAlign: "center",
                marginBottom: { xs: "24px", md: "28px" },
              }}
            >
              What is Genetic Testing?
            </Typography>

            {/* First Paragraph */}
            <Typography
              sx={{
                fontFamily: "Onest",
                fontWeight: 400,
                fontSize: { xs: "15px", md: "16px" },
                lineHeight: "1.5",
                color: "#333333",
                textAlign: "center",
                marginBottom: { xs: "20px", md: "24px" },
              }}
            >
              Genetic testing is an advanced medical process that examines your
              DNA - the unique blueprint that defines your health, traits, and
              how your body functions. By identifying specific changes, called
              genetic variations or mutations, it allows doctors to understand
              the cause of certain health conditions, assess your risk for
              future illnesses, and guide you toward precise treatments or
              preventive care.
            </Typography>

            {/* Second Paragraph */}
            <Typography
              sx={{
                fontFamily: "Onest",
                fontWeight: 400,
                fontSize: { xs: "15px", md: "16px" },
                lineHeight: "1.5",
                color: "#333333",
                textAlign: "center",
              }}
            >
              It is far more than simply detecting disease. Genetic testing can
              help explain unexplained symptoms, guide informed family planning
              decisions, and give you the knowledge and confidence to take
              charge of your long-term health and well-being.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default GeneticHeroSection;

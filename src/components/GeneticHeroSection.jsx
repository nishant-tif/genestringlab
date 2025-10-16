import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";

const GeneticHeroSection = () => {
  return (
    <>
      {/* Background Section with Image - 265px height */}
      <Box
        sx={{
          position: "relative",

          height: "265px",
          overflow: "hidden",
        }}
      >
        {/* Background Pattern Image */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 0,
          }}
        >
          <Image
            src="/images/geneticbanner.svg"
            alt="Genetic Testing Background"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </Box>
      </Box>

      {/* White Content Box - Exact Figma Specs */}
      <Box
        sx={{
          position: "relative",
          marginTop: { xs: "-60px", md: "-50px" }, // Overlap from background
          paddingBottom: { xs: "40px", md: "60px" },
          paddingX: { xs: 2, md: 0 },
        }}
      >
        <Container maxWidth="xl">
          <Box
            sx={{
              position: "relative",
              zIndex: 1,
              backgroundColor: "#f8f6f2",
              width: { xs: "100%", md: "1100px" },
              height: "265px",
              borderTopLeftRadius: "42px",
              borderTopRightRadius: "42px",
              borderBottomLeftRadius: "0px",
              borderBottomRightRadius: "0px",
              padding: "38px 81px",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              boxShadow: "0 10px 40px rgba(0, 0, 0, 0.15)",
              margin: "0 auto",
            }}
          >
            {/* Title */}
            <Typography
              sx={{
                fontFamily: "Onest",
                fontWeight: 700,
                fontSize: { xs: "32px", sm: "36px", md: "42px", lg: "48px" },
                lineHeight: "1.2",
                color: "#000000",
                textAlign: "center",
              }}
            >
              What is Genetic Testing?
            </Typography>

            {/* First Paragraph */}
            <Typography
              sx={{
                fontFamily: "Onest",
                fontWeight: 400,
                fontSize: { xs: "16px", md: "17px", lg: "18px" },
                lineHeight: "1.7",
                color: "#333333",
                textAlign: "center",
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
                fontSize: { xs: "16px", md: "17px", lg: "18px" },
                lineHeight: "1.7",
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
        </Container>
      </Box>
    </>
  );
};

export default GeneticHeroSection;

import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";

const LaboratoryInstruments = () => {
  const nextGenSequencing = [
    {
      id: 1,
      name: "Illumina NextSeq2000",
      image: "/images/labone.png",
      highlighted: false,
    },
    {
      id: 2,
      name: "ION GENESTUDIO S5 PLUS SYSTEM with ION CHEF SYSTEM",
      image: "/images/labtwo.png",
      highlighted: false,
    },
    {
      id: 3,
      name: "GeneChip Scanner 3000 Microarray",
      image: "/images/labthree.png",
      highlighted: false,
    },
    {
      id: 4,
      name: "ABI 3500 Genetic Analyzer",
      image: "/images/labfour.png",
      highlighted: false,
    },
  ];

  const sangerSequencing = [
    {
      id: 5,
      name: "Cepheid Genexpert",
      image: "/images/labfive.png",
    },
    {
      id: 6,
      name: "RT PCR MACHINES",
      image: "/images/labsix.png",
    },
    {
      id: 7,
      name: "DNA Quantitation Nanodrop Spectrophotometer and Qubit Flourometer",
      image: "/images/labseven.png",
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "#ffffff",
        padding: { xs: "40px 0", md: "60px 0", lg: "80px 0" },
      }}
    >
      <Container maxWidth="lg">
        {/* Main Title */}
        <Typography
          sx={{
            fontFamily: "Onest",
            fontWeight: 700,
            fontSize: { xs: "28px", sm: "32px", md: "36px", lg: "40px" },
            lineHeight: "1.2",
            color: "#000000",
            textAlign: "center",
            marginBottom: { xs: "40px", md: "60px" },
            px: { xs: 2, md: 0 },
          }}
        >
          Our Laboratory Instruments
        </Typography>

        {/* Next Generation Sequencing Platforms Section */}
        <Box sx={{ marginBottom: { xs: "50px", md: "80px" } }}>
          {/* Section Title */}
          <Typography
            sx={{
              fontFamily: "Onest",
              fontWeight: 500,
              fontSize: { xs: "20px", md: "24px" },
              lineHeight: "1.4",
              color: "#333333",
              textAlign: "center",
              marginBottom: { xs: "32px", md: "48px" },
              px: { xs: 2, md: 0 },
            }}
          >
            Next Generation Sequencing Platforms
          </Typography>

          {/* Instruments Grid */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
                lg: "repeat(4, 1fr)",
              },
              gap: { xs: "24px", md: "32px" },
              alignItems: "end",
              px: { xs: 2, md: 0 },
            }}
          >
            {nextGenSequencing.map((instrument) => (
              <Box
                key={instrument.id}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "24px",
                }}
              >
                {/* Instrument Image */}
                <Box
                  sx={{
                    width: "100%",
                    height: "280px",
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: instrument.highlighted
                      ? "3px solid #4A90E2"
                      : "none",
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <Image
                      src={instrument.image}
                      alt={instrument.name}
                      fill
                      style={{
                        objectFit: "contain",
                      }}
                    />
                  </Box>
                </Box>

                {/* Instrument Name */}
                <Typography
                  sx={{
                    fontFamily: "Onest",
                    fontWeight: 500,
                    fontSize: { xs: "14px", md: "16px" },
                    lineHeight: "1.4",
                    color: "#333333",
                    textAlign: "center",
                    minHeight: { xs: "auto", md: "44px" },
                  }}
                >
                  {instrument.name}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Sanger Sequencing Section */}
        <Box>
          {/* Section Title */}
          <Typography
            sx={{
              fontFamily: "Onest",
              fontWeight: 500,
              fontSize: { xs: "20px", md: "24px" },
              lineHeight: "1.4",
              color: "#333333",
              textAlign: "center",
              marginBottom: { xs: "32px", md: "48px" },
              px: { xs: 2, md: 0 },
            }}
          >
            Sanger Sequencing
          </Typography>

          {/* Instruments Grid */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
              },
              gap: { xs: "32px", md: "48px" },
              alignItems: "end",
              maxWidth: "1000px",
              margin: "0 auto",
              px: { xs: 2, md: 0 },
            }}
          >
            {sangerSequencing.map((instrument) => (
              <Box
                key={instrument.id}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "24px",
                }}
              >
                {/* Instrument Image */}
                <Box
                  sx={{
                    width: "100%",
                    height: "280px",
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <Image
                      src={instrument.image}
                      alt={instrument.name}
                      fill
                      style={{
                        objectFit: "contain",
                      }}
                    />
                  </Box>
                </Box>

                {/* Instrument Name */}
                <Typography
                  sx={{
                    fontFamily: "Onest",
                    fontWeight: 500,
                    fontSize: { xs: "14px", md: "16px" },
                    lineHeight: "1.4",
                    color: "#333333",
                    textAlign: "center",
                    minHeight: { xs: "auto", md: "44px" },
                  }}
                >
                  {instrument.name}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default LaboratoryInstruments;

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
        padding: "80px 0",
      }}
    >
      <Container maxWidth="lg">
        {/* Main Title */}
        <Typography
          sx={{
            fontFamily: "Onest",
            fontWeight: 700,
            fontSize: "40px",
            lineHeight: "1.2",
            color: "#000000",
            textAlign: "center",
            marginBottom: "60px",
          }}
        >
          Our Laboratory Instruments
        </Typography>

        {/* Next Generation Sequencing Platforms Section */}
        <Box sx={{ marginBottom: "80px" }}>
          {/* Section Title */}
          <Typography
            sx={{
              fontFamily: "Onest",
              fontWeight: 500,
              fontSize: "24px",
              lineHeight: "1.4",
              color: "#333333",
              textAlign: "center",
              marginBottom: "48px",
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
                md: "repeat(4, 1fr)",
              },
              gap: "32px",
              alignItems: "end",
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
                    fontSize: "16px",
                    lineHeight: "1.4",
                    color: "#333333",
                    textAlign: "center",
                    minHeight: "44px",
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
              fontSize: "24px",
              lineHeight: "1.4",
              color: "#333333",
              textAlign: "center",
              marginBottom: "48px",
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
              gap: "48px",
              alignItems: "end",
              maxWidth: "1000px",
              margin: "0 auto",
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
                    fontSize: "16px",
                    lineHeight: "1.4",
                    color: "#333333",
                    textAlign: "center",
                    minHeight: "44px",
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

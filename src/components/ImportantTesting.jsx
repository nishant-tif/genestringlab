import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";

const ImportantTesting = () => {
  const benefits = [
    {
      id: 1,
      icon: "/images/impone.svg",
      description:
        "Detect inherited health conditions before symptoms appear, giving you time to take preventive steps.",
    },
    {
      id: 2,
      icon: "/images/imptwo.svg",
      description:
        "Uncover the cause of medical issues that may not have an obvious explanation.",
    },
    {
      id: 3,
      icon: "/images/impthree.svg",
      description:
        "Receive targeted treatment for conditions such as certain cancers or rare genetic disorders.",
    },
    {
      id: 4,
      icon: "/images/impfour.svg",
      description:
        "Work with your doctor to choose the most effective preventive care strategies.",
    },
    {
      id: 5,
      icon: "/images/impfive.svg",
      description:
        "Gain peace of mind by having clear, science-backed answers for yourself and your family.",
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "#FFFFFF",
        padding: { xs: "40px 0", md: "60px 0", lg: "80px 0" },
      }}
    >
      <Container maxWidth="lg">
        {/* Header Section */}
        <Box
          sx={{
            textAlign: "center",
            marginBottom: { xs: "40px", md: "50px" },
            px: { xs: 2, md: 4 },
          }}
        >
          {/* Title */}
          <Typography
            sx={{
              fontFamily: "Onest",
              fontWeight: 700,
              fontSize: { xs: "24px", sm: "28px", md: "32px", lg: "32px" },
              lineHeight: "1.2",
              color: "#000000",
              marginBottom: { xs: "16px", md: "10px" },
            }}
          >
            Why is Genetic Testing Important?
          </Typography>

          {/* Subtitle */}
          <Typography
            sx={{
              fontFamily: "Onest",
              fontWeight: 400,
              fontSize: { xs: "15px", md: "18px" },
              lineHeight: "1.7",
              color: "#333333",
              maxWidth: "1200px",
              margin: "0 auto",
            }}
          >
            Your genes influence more than your physical traits - they can
            determine your predisposition to certain medical conditions and even
            how your body responds to treatment. Through genetic testing, you
            can:
          </Typography>
        </Box>

        {/* Benefits Grid - 3 cards in first row, 2 in second row */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
            gap: { xs: "16px", md: "20px" },
            marginBottom: { xs: "32px", md: "40px" },
            px: { xs: 1, md: 0 },
            maxWidth: "1500px",
            margin: "0 auto",
            marginBottom: { xs: "32px", md: "40px" },
          }}
        >
          {benefits.map((benefit) => (
            <Box
              key={benefit.id}
              sx={{
                backgroundColor: "#FFFFFF",
                borderRadius: "16px",
                padding: { xs: "18px 20px", md: "20px 28px" },
                display: "flex",
                flexDirection: "row",
                gap: "18px",
                alignItems: "center",
                border: "1px solid #E8E5DE",
                minHeight: { xs: "100px", md: "105px" },
                maxHeight: { xs: "115px", md: "115px" },
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "0 8px 20px rgba(0, 0, 0, 0.08)",
                },
                // Make last 2 items span properly on desktop
                ...(benefit.id === 4 && {
                  gridColumn: { xs: "auto", md: "1 / 2" },
                }),
                ...(benefit.id === 5 && {
                  gridColumn: { xs: "auto", md: "2 / 3" },
                }),
              }}
            >
              {/* Icon */}
              <Box
                sx={{
                  width: "68px",
                  height: "68px",
                  minWidth: "68px",
                  backgroundColor: "#F1FBF7",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    width: "69px",
                    height: "69px",
                  }}
                >
                  <Image
                    src={benefit.icon}
                    alt={`Benefit ${benefit.id}`}
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </Box>
              </Box>

              {/* Description */}
              <Typography
                sx={{
                  fontFamily: "Onest",
                  fontWeight: 400,
                  fontSize: { xs: "15px", md: "14px" },
                  lineHeight: "1.6",
                  color: "#333333",
                  flex: 1,
                }}
              >
                {benefit.description}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Bottom Note */}
        <Box
          sx={{
            textAlign: "center",
            px: { xs: 2, md: 0 },
            maxWidth: "1300px",
            margin: "0 auto",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Onest",
              display: "flex",
              justifyContent: "flex-start",
              fontWeight: 400,
              fontSize: { xs: "14px", md: "14px" },
              lineHeight: "1.7",
              color: "#666666",
              fontStyle: "italic",
              background: "#F8F6F240",
              border: "1.5px dashed #00000014",
              borderRadius: "12px",
              padding: { xs: "8px 10px", md: "10px 12px" },
            }}
          >
            In many cases, early genetic insights mean earlier intervention,
            better treatment outcomes, and a higher chance of avoiding
            complications.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default ImportantTesting;

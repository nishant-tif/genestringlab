import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";

const GetTested = () => {
  const testingStages = [
    {
      id: 1,
      icon: "/images/testone.svg",
      title: "Before pregnancy",
      description:
        "To determine whether you or your partner are carriers of a serious genetic disorder which puts the offspring at risk of inheriting the disease.  Also, a previously affected child with a genetic disorder (e.g. thalassemia, sickle cell disease, spinal muscular dystrophy, or any rare disease) needs genetic evaluation before next pregnancy for prevention of recurrence.",
    },
    {
      id: 2,
      icon: "/images/testtwo.svg",
      title: "During pregnancy",
      description:
        "To screen for Down's syndrome or specific genetic testing in case of fetal malformation, severe growth restriction, or unexplained fetal demise.",
    },
    {
      id: 3,
      icon: "/images/testthree.svg",
      title: "Newborn screening",
      description:
        "To screen infants for a variety of conditions, primarily genetic, metabolic, and endocrine disorder.",
    },
    {
      id: 4,
      icon: "/images/testfour.svg",
      title: "After a clinical diagnosis",
      description:
        "To guide targeted treatment for conditions such as certain cancers or rare genetic disorders.",
    },
    {
      id: 5,
      icon: "/images/testfive.svg",
      title: "Proactively",
      description:
        "At any stage in life if there is reason to suspect a genetic link to your symptoms, or if you wish to better understand your health risks.",
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "#F8F6F2",
        padding: { xs: "40px 0", md: "60px 0", lg: "80px 0" },
      }}
    >
      <Container maxWidth="lg">
        {/* Header Section */}
        <Box
          sx={{
            textAlign: "center",
            marginBottom: { xs: "40px", md: "60px" },
            px: { xs: 2, md: 0 },
          }}
        >
          {/* Title */}
          <Typography
            sx={{
              fontFamily: "Onest",
              fontWeight: 700,
              fontSize: { xs: "28px", sm: "32px", md: "36px", lg: "40px" },
              lineHeight: "1.2",
              color: "#000000",
              marginBottom: { xs: "16px", md: "20px" },
            }}
          >
            When Should You Get Tested?
          </Typography>

          {/* Subtitle */}
          <Typography
            sx={{
              fontFamily: "Onest",
              fontWeight: 400,
              fontSize: { xs: "14px", md: "16px" },
              lineHeight: "1.6",
              color: "#333333",
              maxWidth: "900px",
              margin: "0 auto",
            }}
          >
            The ideal time for genetic testing depends on your goals and
            circumstances:
          </Typography>
        </Box>

        {/* Single Card with All Testing Stages */}
        <Box
          sx={{
            backgroundColor: "#FFFFFF",
            borderRadius: "16px",
            padding: { xs: "32px 24px", sm: "40px 32px", md: "48px 40px" },
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.04)",
            mx: { xs: 2, md: 0 },
          }}
        >
          {testingStages.map((stage, index) => (
            <React.Fragment key={stage.id}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  gap: { xs: "20px", sm: "24px", md: "32px" },
                  alignItems: { xs: "flex-start", sm: "flex-start" },
                  padding: { xs: "20px 0", md: "24px 0" },
                }}
              >
                {/* Icon */}
                <Box
                  sx={{
                    width: "40px",
                    height: "40px",
                    flexShrink: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      width: "64px",
                      height: "64px",
                    }}
                  >
                    <Image
                      src={stage.icon}
                      alt={stage.title}
                      fill
                      style={{ objectFit: "contain" }}
                    />
                  </Box>
                </Box>

                {/* Content */}
                <Box
                  sx={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    gap: { xs: "8px", md: "12px" },
                  }}
                >
                  {/* Title */}
                  <Typography
                    sx={{
                      fontFamily: "Onest",
                      fontWeight: 600,
                      fontSize: { xs: "18px", md: "20px" },
                      lineHeight: "1.3",
                      color: "#15876B",
                    }}
                  >
                    {stage.title}
                  </Typography>

                  {/* Description */}
                  <Typography
                    sx={{
                      fontFamily: "Onest",
                      fontWeight: 400,
                      fontSize: { xs: "14px", md: "16px" },
                      lineHeight: "1.6",
                      color: "#333333",
                    }}
                  >
                    {stage.description}
                  </Typography>
                </Box>
              </Box>

              {/* Horizontal Rule - Don't show after last item */}
              {index < testingStages.length - 1 && (
                <Box
                  component="hr"
                  sx={{
                    border: "none",
                    borderTop: "1px solid #E0E0E0",
                    margin: 0,
                  }}
                />
              )}
            </React.Fragment>
          ))}
        </Box>

        {/* Footer Note */}
        <Box
          sx={{
            textAlign: "center",
            marginTop: { xs: "40px", md: "60px" },
            px: { xs: 2, md: 0 },
          }}
        >
          <Typography
            sx={{
              fontFamily: "Onest",
              fontWeight: 400,
              fontSize: { xs: "13px", md: "14px" },
              lineHeight: "1.6",
              color: "#666666",
              fontStyle: "italic",
              maxWidth: "900px",
              margin: "0 auto",
            }}
          >
            Choosing the right time to test ensures you have more options and
            time to plan your next steps with confidence
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default GetTested;

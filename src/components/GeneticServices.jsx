import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";

const GeneticServices = () => {
  const services = [
    {
      id: 1,
      icon: "/images/geneone.svg",
      title: "Prenatal Genetic",
      description:
        "Evaluate fetal structural defects, severe growth restrictions, or risk of inherited disorders.",
    },
    {
      id: 2,
      icon: "/images/genetwo.svg",
      title: "Reproductive Genetics",
      description:
        "Genetic evaluation of infertility, recurrent pregnancy loss, or previous unexplained baby demise.",
    },
    {
      id: 3,
      icon: "/images/genethree.svg",
      title: "Newborn Screening",
      description:
        "Detects metabolic, endocrine, or genetic disorders in healthy newborns.",
    },
    {
      id: 4,
      icon: "/images/genefour.svg",
      title: "Inherited & Pediatric Disorders",
      description:
        "Testing for Thalassemia, Sickle cell disease, Spinal Muscular Atrophy, Duchenne Muscular Dystrophy, and intractable epilepsy.",
    },
    {
      id: 5,
      icon: "/images/genefive.svg",
      title: "Pre-Conception & Carrier Screening",
      description:
        "Expanded couple carrier screening to check for genetic risks that may affect offspring.",
    },
    {
      id: 6,
      icon: "/images/genesix.svg",
      title: "Adult-Onset Genetic Disorders",
      description:
        "Detects risk for dementia, neurodegenerative disorders, and movement disorders.",
    },
    {
      id: 7,
      icon: "/images/geneseven.svg",
      title: "Hereditary & Somatic Cancer Testing",
      description:
        "Hereditary breast & ovarian cancer testing. Precision therapy for existing cancers.",
    },
    {
      id: 8,
      icon: "/images/geneeight.svg",
      title: "Transplant & personalised Medicine Support",
      description:
        "HLA typing for bone marrow and kidney transplants. Pharmacogenomics to assess drug responses.",
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "#ffffff",
        padding: { xs: "40px 20px", md: "60px 40px", lg: "80px 60px" },
      }}
    >
      <Container maxWidth="xl">
        {/* Header Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", md: "center" },
            marginBottom: { xs: "40px", md: "60px" },
            gap: { xs: "24px", md: "40px" },
            px: { xs: 2, md: 0 },
          }}
        >
          {/* Title */}
          <Typography
            sx={{
              fontFamily: "Onest",
              fontWeight: 700,
              fontSize: { xs: "28px", sm: "32px", md: "32px", lg: "32px" },
              lineHeight: "1.2",
              color: "#000000",
              minWidth: { xs: "auto", md: "300px" },
            }}
          >
            Our Genetic Services
          </Typography>

          {/* Description */}
          <Typography
            sx={{
              fontFamily: "Onest",
              fontWeight: 400,
              fontSize: { xs: "14px", md: "18px" },
              lineHeight: "1.6",
              color: "#333333",
              maxWidth: { xs: "100%", md: "800px" },
            }}
          >
            At Genestrings, we provide{" "}
            <Box component="span" sx={{ fontWeight: 700 }}>
              comprehensive genetic testing and consultation
            </Box>{" "}
            for all stages of life. Our goal is to empower you with insights
            that support{" "}
            <Box component="span" sx={{ fontWeight: 700 }}>
              healthy pregnancies, informed family planning, and personalised
              healthcare.
            </Box>
          </Typography>
        </Box>

        {/* Services Grid - 4 columns, 2 rows */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(4, 1fr)",
            },
            columnGap: { xs: "10px", md: "8px", lg: "8px" },
            rowGap: { xs: "20px", md: "12px" },
            justifyItems: { xs: "center", lg: "stretch" },
            px: { xs: 2, md: 0 },
          }}
        >
          {services.map((service) => (
            <Box
              key={service.id}
              sx={{
                width: { xs: "100%", sm: "310px", md: "350px" },
                maxWidth: "310px",
                // height: "auto",
                minHeight: { xs: "auto", sm: "190px" },
                backgroundColor: "#f8fdfa",
                borderRadius: "16px",
                border: "1px solid #E0E0E0",
                padding: { xs: "20px", sm: "10px 20px 40px 20px" },
                paddingTop: { xs: "24px", sm: "32px" },
                display: "flex",
                flexDirection: "column",
                gap: { xs: "12px", sm: "16px", md: "16px" },
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
                },
              }}
            >
              {/* Icon */}
              <Box
                sx={{
                  width: "56px",
                  height: "56px",
                  backgroundColor: "#15876B",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    width: "36px",
                    height: "36px",
                  }}
                >
                  <Image
                    src={service.icon}
                    alt={service.title}
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </Box>
              </Box>

              {/* Title */}
              <Typography
                sx={{
                  fontFamily: "Onest",
                  fontWeight: 600,
                  fontSize: { xs: "16px", sm: "18px" },
                  lineHeight: "1.3",
                  color: "#000000",
                }}
              >
                {service.title}
              </Typography>

              {/* Description */}
              <Typography
                sx={{
                  fontFamily: "Onest",
                  fontWeight: 400,
                  fontSize: { xs: "14px", sm: "16px" },
                  lineHeight: "1.5",
                  color: "black",
                }}
              >
                {service.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default GeneticServices;

import React from "react";
import { Box, Container, Typography } from "@mui/material";

const Services = () => {
  const services = [
    {
      id: 1,
      number: "01",
      title: "Fertility and reproductive genetics",
    },
    {
      id: 2,
      number: "02",
      title: "Prenatal and postnatal screening",
    },
    {
      id: 3,
      number: "03",
      title: "Inherited disorder testing",
    },
    {
      id: 4,
      number: "04",
      title: "Oncogenetics",
    },
    {
      id: 5,
      number: "05",
      title: "Newborn screening",
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "#FFFFFF",
        padding: { xs: "60px 0", md: "60px 0", lg: "80px 0" },
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            mx: { xs: 2, md: 4 },
          }}
        >
          {/* Title */}
          <Typography
            sx={{
              fontFamily: "Onest",
              fontWeight: 700,
              fontSize: { xs: "32px", sm: "36px", md: "40px" },
              lineHeight: "1.3",
              color: "#000000",
              textAlign: "center",
              marginBottom: { xs: "16px", md: "20px" },
            }}
          >
            Our Services
          </Typography>

          {/* Subtitle */}
          <Typography
            sx={{
              fontFamily: "Onest",
              fontWeight: 400,
              fontSize: { xs: "15px", md: "16px" },
              lineHeight: "1.6",
              color: "#555555",
              textAlign: "center",
              marginBottom: { xs: "30px", md: "32px" },
            }}
          >
            Genestrings Lab offers a comprehensive portfolio of genetic
            diagnostics, including:
          </Typography>

          {/* Services Grid */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: "16px",
              justifyContent: "center",
              marginBottom: { xs: "32px", md: "32px" },
            }}
          >
            {services.map((service) => (
              <Box
                key={service.id}
                sx={{
                  backgroundColor: "#F3EFE8",
                  border: "1px solid #EEEEEE",
                  borderRadius: "8px",
                  padding: { xs: "24px 20px", md: "32px 24px" },
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                  minWidth: { xs: "280px", md: "180px" },
                  minHeight: { xs: "140px", md: "190px" },
                  flex: {
                    xs: "1 1 100%",
                    sm: "1 1 calc(50% - 8px)",
                    md: "0 1 170px",
                  },
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.08)",
                  },
                }}
              >
                {/* Number */}
                <Typography
                  className="onest-400"
                  sx={{
                    fontSize: "14px",
                    lineHeight: "1.3",
                    color: "#888888",
                  }}
                >
                  {service.number}
                </Typography>

                {/* Title */}
                <Typography
                  className="onest-600"
                  sx={{
                    fontSize: { xs: "16px", md: "17px" },
                    lineHeight: "1.5",
                    color: "#355F58",
                  }}
                >
                  {service.title}
                </Typography>
              </Box>
            ))}
          </Box>

          {/* Bottom Description */}
          <Typography
            sx={{
              fontFamily: "Onest",
              fontWeight: 400,
              fontSize: { xs: "15px", md: "16px" },
              lineHeight: "1.7",
              color: "#555555",
              textAlign: "center",
              maxWidth: "1100px",
              margin: "0 auto",
            }}
          >
            Each service is designed with a patient-first approach, ensuring
            accuracy, transparency, and confidentiality. From proactive health
            planning to complex medical decision-making, our services provide
            actionable insights at every stage of life.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Services;

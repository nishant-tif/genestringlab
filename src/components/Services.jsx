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
        padding: { xs: "60px 0", md: "80px 0", lg: "100px 0" },
      }}
    >
      <Container maxWidth="lg">
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
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
                lg: "repeat(5, 1fr)",
              },
              gap: "20px",
              marginBottom: { xs: "30px", md: "32px" },
            }}
          >
            {services.map((service) => (
              <Box
                key={service.id}
                sx={{
                  backgroundColor: "#F3EFE8",
                  border: "1px solid #EEEEEE",
                  borderRadius: "8px",
                  padding: "59px 32px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  width: { xs: "100%", lg: "156px" },
                  height: "116px",
                }}
              >
                {/* Number */}
                <Typography
                  sx={{
                    fontFamily: "Onest",
                    fontWeight: 400,
                    fontSize: { xs: "16px", md: "18px" },
                    lineHeight: "1.3",
                    color: "#666666",
                  }}
                >
                  {service.number}
                </Typography>

                {/* Title */}
                <Typography
                  sx={{
                    fontFamily: "Onest",
                    fontWeight: 600,
                    fontSize: { xs: "18px", md: "20px" },
                    lineHeight: "1.4",
                    color: "#333333",
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

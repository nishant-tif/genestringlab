import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";

const BookConsultation = () => {
  const services = [
    {
      id: 1,
      title: "Clinical evaluation and diagnosis of genetic disorders.",
    },
    {
      id: 2,
      title: "Personalised treatment planning.",
    },
    {
      id: 3,
      title: "Cutting-Edge Research Integration",
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
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: "32px", md: "60px" },
            alignItems: "stretch",
            px: { xs: 2, md: 0 },
          }}
        >
          {/* Left Section - Image */}
          <Box
            sx={{
              flex: "0 0 auto",
              width: { xs: "100%", sm: "90%", md: "680px" },
              height: { xs: "300px", sm: "400px", md: "450px" },
              position: "relative",
              borderRadius: { xs: "16px", md: "24px" },
              overflow: "hidden",
            }}
          >
            <Image
              src="/images/booknow.png"
              alt="Book a Consultation"
              fill
              style={{
                objectFit: "cover",
              }}
            />
          </Box>

          {/* Right Section - Content */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "32px",
            }}
          >
            {/* Title */}
            <Typography
              sx={{
                fontFamily: "Onest",
                fontWeight: 700,
                fontSize: { xs: "24px", sm: "28px", md: "30px", lg: "34px" },
                lineHeight: "1.2",
                color: "#000000",
              }}
            >
              Book a Consultation
            </Typography>

            {/* Service Cards */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: { xs: "16px", md: "24px" },
              }}
            >
              {services.map((service) => (
                <Box
                  key={service.id}
                  sx={{
                    backgroundColor: "#ffffff",
                    border: "1px solid #E0E0E0",
                    borderRadius: { xs: "12px", md: "16px" },
                    padding: { xs: "20px", md: "32px" },
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      backgroundColor: "#F8F6F2",
                      borderColor: "#D0D0D0",
                      transform: "translateY(-2px)",
                      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Onest",
                      fontWeight: 500,
                      fontSize: { xs: "16px", md: "18px", lg: "20px" },
                      lineHeight: "1.4",
                      color: "#333333",
                      flex: 1,
                    }}
                  >
                    {service.title}
                  </Typography>

                  <Box
                    sx={{
                      width: { xs: "32px", md: "40px" },
                      height: { xs: "32px", md: "40px" },
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      marginLeft: { xs: "12px", md: "16px" },
                      position: "relative",
                    }}
                  >
                    <Image
                      src="/images/vectorarrow.png"
                      alt="Arrow"
                      width={28}
                      height={28}
                      style={{ objectFit: "contain" }}
                    />
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default BookConsultation;

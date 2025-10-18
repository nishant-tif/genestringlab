import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";

const TeamDetails = () => {
  const teamMembers = [
    {
      id: 1,
      image: "/images/doctortwo.svg",
      name: "Dr. Alpana Razdan",
      designation: "Director- Genomics and Molecular Biology",
    },
    {
      id: 2,
      image: "/images/doctorthree.svg",
      name: "Dr. Ranjana Mishra",
      designation: "Clinical Geneticist",
    },
    {
      id: 3,
      image: "/images/doctorfouree.svg",
      name: "Dr. (Brig.) Ajay Malik",
      designation:
        "HOD & Senior Consultant/ Lab Director Pathology & Oncopathology",
    },
    {
      id: 4,
      image: "/images/doctorfive.svg",
      name: "Ms. Bimla Gupta",
      designation: "Vice President Lab Operations",
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "#FFFFFF",
        padding: { xs: "40px 0", md: "60px 0", lg: "80px 0" },
      }}
    >
      {/* Hero Section with Beige Strip */}
      <Box
        sx={{
          position: "relative",
          backgroundColor: "#fff8ea",
          height: "280px",

          marginTop: "52px", // Space for image to overlap from top
        }}
      >
        <Container maxWidth="xl">
          <Box
            sx={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              height: "100%",
            }}
          >
            {/* Doctor Image - Overlapping from top */}
            <Box
              sx={{
                position: "absolute",
                top: "-52px",
                left: { xs: "20px", md: "80px", lg: "100px" },
                width: { xs: "90%", md: "573px" },
                height: { xs: "350px", md: "384px" },
                borderRadius: "24px",
                overflow: "hidden",

                zIndex: 2,
              }}
            >
              <Image
                src="/images/doctorone.svg"
                alt="Our Team Leader"
                fill
                style={{ objectFit: "cover" }}
              />
            </Box>

            {/* Text Content Box on Right */}
            <Box
              sx={{
                position: "absolute",
                top: "65.5px",
                left: { xs: "20px", md: "685px", lg: "705px" },
                width: { xs: "calc(100% - 40px)", md: "521px" },
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Onest",
                  fontWeight: 700,
                  fontSize: { xs: "32px", sm: "32px", md: "32px" },
                  lineHeight: "1.2",
                  color: "#000000",
                }}
              >
                Our Team
              </Typography>

              <Typography
                sx={{
                  fontFamily: "Onest",
                  fontWeight: 400,
                  fontSize: { xs: "15px", md: "16px" },
                  lineHeight: "1.6",
                  color: "#565D6D",
                }}
              >
                Led by women pioneers in fertility and diagnostics like Dr.
                Gauri Agarwal, our team brings together expertise and empathy
                because scientific excellence coupled with emotional care makes
                all the difference.
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Team Members Grid */}
      <Box
        sx={{
          backgroundColor: "#FFFFFF",
          padding: { xs: "60px 0", md: "80px 0" },
        }}
      >
        <Container maxWidth="xl">
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                md: "repeat(4, 1fr)",
              },
              gap: { xs: "40px", md: "24px" },
              px: { xs: 2, sm: 4, md: 8, lg: 12 },
              maxWidth: "1400px",
              margin: "0 auto",
            }}
          >
            {teamMembers.map((member) => (
              <Box
                key={member.id}
                sx={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",

                  overflow: "visible",
                }}
              >
                {/* Member Image */}
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    maxWidth: "350px",
                    height: { xs: "320px", md: "350px" },
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </Box>

                {/* Overlayed Name Card - 20% from top on bottom */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: "50%",
                    transform: "translateX(-50%) translateY(80%)",
                    width: "216px",
                    height: "92.29px",
                    backgroundColor: "#F8F6F2",
                    borderTop: "10px solid #137C62",
                    borderTopLeftRadius: "6px",
                    borderTopRightRadius: "6px",
                    padding: "12px 16px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    gap: "4px",
                    boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  {/* Member Name */}
                  <Typography
                    sx={{
                      fontFamily: "Onest",
                      fontWeight: 700,
                      fontSize: { xs: "14px", md: "14px" },
                      lineHeight: "1.3",
                      color: "#000000",
                    }}
                  >
                    {member.name}
                  </Typography>

                  {/* Designation */}
                  <Typography
                    sx={{
                      fontFamily: "Onest",
                      fontWeight: 400,
                      fontSize: { xs: "12px", md: "12px" },
                      lineHeight: "1.4",
                      color: "#666666",
                    }}
                  >
                    {member.designation}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Why It Matters Section */}
      <Box
        sx={{
          backgroundColor: "#FFFFFF",
          padding: { xs: "60px 0 40px 0", md: "80px 0 60px 0" },
        }}
      >
        <Container maxWidth="xl">
          <Box
            sx={{
              backgroundColor: "#137C62",
              borderRadius: "24px",
              padding: { xs: "40px 30px", sm: "50px 60px", md: "60px 80px" },
              textAlign: "center",
              mx: { xs: 2, sm: 4, md: 8, lg: 12 },
              maxWidth: "1400px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Onest",
                fontWeight: 700,
                fontSize: { xs: "24px", sm: "38px", md: "32px" },
                lineHeight: "1.3",
                color: "#FFFFFF",
                marginBottom: { xs: "14px", md: "18px" },
              }}
            >
              Why It Matters?
            </Typography>

            <Typography
              sx={{
                fontFamily: "Onest",
                fontWeight: 400,
                fontSize: { xs: "15px", md: "18px" },
                lineHeight: "1.7",
                color: "#FFFFFF",
                maxWidth: "1100px",
                margin: "0 auto",
              }}
            >
              Genetic testing is not just about identifying risks, it's about
              unlocking knowledge, making proactive choices, and building
              healthier futures. Whether it's guiding a couple through fertility
              challenges, providing answers during pregnancy, or offering
              clarity in complex medical cases, our diagnostics translate
              complex science into meaningful solutions.
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default TeamDetails;

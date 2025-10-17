import React from "react";
import { Box, Container, Typography } from "@mui/material";

const SetApart = () => {
  const features = [
    {
      id: 1,
      number: "01",
      title: "Exclusive Focus on Genetics",
      icon: "setone.svg",
    },
    {
      id: 2,
      number: "02",
      title: "Strategic Location in NCR",
      icon: "settwo.svg",
    },
    {
      id: 3,
      number: "03",
      title: "Global Service Capability",
      icon: "setthree.svg",
    },
    {
      id: 4,
      number: "04",
      title: "Bespoke Testing Solutions",
      icon: "setfour.svg",
    },
    {
      id: 5,
      number: "05",
      title: "Uncompromising Data Privacy",
      icon: "setfive.svg",
    },
    {
      id: 6,
      number: "06",
      title: "End-to-End Genetic Guidance",
      icon: "setsix.svg",
    },
    {
      id: 7,
      number: "07",
      title: "Cutting-Edge Research Integration",
      icon: "setseven.svg",
    },
    {
      id: 8,
      number: "08",
      title: "Collaborative Approach",
      icon: "seteight.svg",
    },
  ];

  // Split features into left and right columns
  const leftFeatures = features.slice(0, 4);
  const rightFeatures = features.slice(4, 8);

  return (
    <Box
      sx={{
        backgroundColor: "#FFFFFF",
        padding: { xs: "60px 0", md: "80px 0", lg: "100px 0" },
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
              fontSize: { xs: "32px", sm: "36px", md: "48px" },
              lineHeight: "1.3",
              color: "#000000",
              textAlign: "center",
              marginBottom: { xs: "40px", md: "60px" },
            }}
          >
            What Sets Us Apart?
          </Typography>

          {/* Main Grid Layout */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                md: "372px 372px 372px",
              },
              gap: { xs: "20px", md: "24px" },
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* Left Column - Features 1-4 */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "30px",
              }}
            >
              {leftFeatures.map((feature) => (
                <Box
                  key={feature.id}
                  sx={{
                    width: { xs: "100%", md: "290px" },
                    height: "90px",
                    backgroundColor: "#FAFAFA",
                    border: "1px solid #EBEBEB",
                    borderRadius: "12px",
                    padding: "20px",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "16px",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.08)",
                    },
                  }}
                >
                  {/* Icon Circle */}
                  <Box
                    sx={{
                      width: "48px",
                      height: "48px",
                      minWidth: "48px",
                      borderRadius: "50%",
                      backgroundColor: "#FFFFFF",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: "1px solid #E0E0E0",
                    }}
                  >
                    <img
                      src={`/images/${feature.icon}`}
                      alt={feature.title}
                      style={{
                        width: "24px",
                        height: "24px",
                        objectFit: "contain",
                      }}
                    />
                  </Box>

                  {/* Content Column */}
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "4px",
                      flex: 1,
                    }}
                  >
                    {/* Number */}
                    <Typography
                      sx={{
                        fontFamily: "Onest",
                        fontWeight: 400,
                        fontSize: "14px",
                        lineHeight: "1.3",
                        color: "#666666",
                      }}
                    >
                      {feature.number}
                    </Typography>

                    {/* Title */}
                    <Typography
                      sx={{
                        fontFamily: "Onest",
                        fontWeight: 600,
                        fontSize: { xs: "18px", md: "20px" },
                        lineHeight: "1.3",
                        color: "#000000",
                      }}
                    >
                      {feature.title}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>

            {/* Center Column - Image */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  width: "372px",
                  height: "584px",
                  borderRadius: "8px",
                  border: "1px solid #EEEEEE",
                  overflow: "hidden",
                }}
              >
                <img
                  src="/images/apart.svg"
                  alt="Doctors collaborating"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Box>
            </Box>

            {/* Right Column - Features 5-8 */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "30px",
              }}
            >
              {rightFeatures.map((feature) => (
                <Box
                  key={feature.id}
                  sx={{
                    width: { xs: "100%", md: "310px" },
                    height: "90px",
                    backgroundColor: "#FAFAFA",
                    border: "1px solid #EBEBEB",
                    borderRadius: "12px",
                    padding: "20px",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "16px",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.08)",
                    },
                  }}
                >
                  {/* Icon Circle */}
                  <Box
                    sx={{
                      width: "48px",
                      height: "48px",
                      minWidth: "48px",
                      borderRadius: "50%",
                      backgroundColor: "#FFFFFF",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: "1px solid #E0E0E0",
                    }}
                  >
                    <img
                      src={`/images/${feature.icon}`}
                      alt={feature.title}
                      style={{
                        width: "24px",
                        height: "24px",
                        objectFit: "contain",
                      }}
                    />
                  </Box>

                  {/* Content Column */}
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "4px",
                      flex: 1,
                    }}
                  >
                    {/* Number */}
                    <Typography
                      sx={{
                        fontFamily: "Onest",
                        fontWeight: 400,
                        fontSize: "14px",
                        lineHeight: "1.3",
                        color: "#666666",
                      }}
                    >
                      {feature.number}
                    </Typography>

                    {/* Title */}
                    <Typography
                      sx={{
                        fontFamily: "Onest",
                        fontWeight: 600,
                        fontSize: { xs: "18px", md: "20px" },
                        lineHeight: "1.3",
                        color: "#000000",
                      }}
                    >
                      {feature.title}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>

          {/* Mobile Image - Shows below features on mobile */}
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              justifyContent: "center",
              marginTop: "32px",
            }}
          >
            <Box
              sx={{
                width: "100%",
                maxWidth: "400px",
                aspectRatio: "1",
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
              }}
            >
              <img
                src="/images/apart.svg"
                alt="Doctors collaborating"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default SetApart;

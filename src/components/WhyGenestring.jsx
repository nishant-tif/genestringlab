import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import Image from "next/image";

const WhyGenestringCards = () => {
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
          Why{" "}
          <Box
            component="span"
            sx={{
              color: "#15876B",
            }}
          >
            Genestring Lab
          </Box>
          ?
        </Typography>

        {/* Features Grid - 2x2 Layout */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "28px 28px",
            marginBottom: "32px",
            justifyContent: "center",
          }}
        >
          {/* Card 1 - Quick Pickup */}
          <Box>
            <Box
              sx={{
                width: "400px",
                height: "117px",
                backgroundColor: "#E8F4F1",
                borderRadius: "18px",
                padding: "18px 24px",
                display: "flex",
                gap: "25px",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  width: "80px",
                  height: "80px",
                  flexShrink: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#D4EDE6",
                  borderRadius: "50%",
                }}
              >
                <Image
                  src="/images/Lightning.svg"
                  alt="Quick Pickup"
                  width={40}
                  height={40}
                  style={{ objectFit: "contain" }}
                />
              </Box>
              <Box
                sx={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Onest",
                    fontWeight: 600,
                    fontSize: "22px",
                    lineHeight: "1.3",
                    color: "#000000",
                    marginBottom: "12px",
                  }}
                >
                  Quick Pickup
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Onest",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "1.5",
                    color: "#666666",
                  }}
                >
                  Safe & Hygenic Home Collection
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Card 2 - Secure Payment */}
          <Box>
            <Box
              sx={{
                width: "400px",
                height: "117px",
                backgroundColor: "#E8F4F1",
                borderRadius: "18px",
                padding: "18px 24px",
                display: "flex",
                gap: "25px",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  width: "80px",
                  height: "80px",
                  flexShrink: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#D4EDE6",
                  borderRadius: "50%",
                }}
              >
                <Image
                  src="/images/sheildcheck.svg"
                  alt="Secure Payment"
                  width={40}
                  height={40}
                  style={{ objectFit: "contain" }}
                />
              </Box>
              <Box
                sx={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Onest",
                    fontWeight: 600,
                    fontSize: "22px",
                    lineHeight: "1.3",
                    color: "#000000",
                    marginBottom: "12px",
                  }}
                >
                  Secure Payment
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Onest",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "1.5",
                    color: "#666666",
                  }}
                >
                  Fast & Secure Online Payment
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Card 3 - State-of-the-art lab */}
          <Box>
            <Box
              sx={{
                width: "400px",
                height: "117px",
                backgroundColor: "#E8F4F1",
                borderRadius: "18px",
                padding: "18px 24px",
                display: "flex",
                gap: "25px",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  width: "80px",
                  height: "80px",
                  flexShrink: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#D4EDE6",
                  borderRadius: "50%",
                }}
              >
                <Image
                  src="/images/target.svg"
                  alt="State-of-the-art lab"
                  width={40}
                  height={40}
                  style={{ objectFit: "contain" }}
                />
              </Box>
              <Box
                sx={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Onest",
                    fontWeight: 600,
                    fontSize: "22px",
                    lineHeight: "1.3",
                    color: "#000000",
                    marginBottom: "12px",
                  }}
                >
                  State-of-the-art in-house lab
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Onest",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "1.5",
                    color: "#666666",
                  }}
                >
                  with expert genetic consultation for fast and accurate results
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Card 4 - Confidential and secure */}
          <Box>
            <Box
              sx={{
                width: "400px",
                height: "117px",
                backgroundColor: "#E8F4F1",
                borderRadius: "18px",
                padding: "18px 24px",
                display: "flex",
                gap: "25px",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  width: "80px",
                  height: "80px",
                  flexShrink: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#D4EDE6",
                  borderRadius: "50%",
                }}
              >
                <Image
                  src="/images/lock.svg"
                  alt="Confidential and secure"
                  width={40}
                  height={40}
                  style={{ objectFit: "contain" }}
                />
              </Box>
              <Box
                sx={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Onest",
                    fontWeight: 600,
                    fontSize: "22px",
                    lineHeight: "1.3",
                    color: "#000000",
                    marginBottom: "12px",
                  }}
                >
                  Confidential and secure
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Onest",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "1.5",
                    color: "#666666",
                  }}
                >
                  handling of all patient information
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Footer Text with Dashed Border */}
        <Box
          sx={{
            textAlign: "center",
            padding: "20px 32px",
            border: "2px dashed #C8C8C8",
            borderRadius: "12px",
            maxWidth: "fit-content",
            margin: "0 auto",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Onest",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "1.5",
              color: "#999999",
              fontStyle: "italic",
            }}
          >
            All genetic testing is conducted in compliance with the{" "}
            <Box
              component="span"
              sx={{
                fontWeight: 600,
                color: "#666666",
              }}
            >
              PCPNDT Act
            </Box>
            .
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default WhyGenestringCards;

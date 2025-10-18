import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";

const ConsiderTesting = () => {
  const audiences = [
    {
      id: 1,
      image: "/images/considerone.svg",
      description: (
        <>
          Individuals with a family history of{" "}
          <Box component="span" sx={{ fontWeight: 700 }}>
            inherited diseases
          </Box>{" "}
          or{" "}
          <Box component="span" sx={{ fontWeight: 700 }}>
            early-onset
          </Box>{" "}
          health conditions.
        </>
      ),
    },
    {
      id: 2,
      image: "/images/considertwo.svg",
      description: (
        <>
          Patients diagnosed with certain cancers or rare,{" "}
          <Box component="span" sx={{ fontWeight: 700 }}>
            unexplained medical conditions
          </Box>
          .
        </>
      ),
    },
    {
      id: 3,
      image: "/images/considerthree.svg",
      description: (
        <>
          Anyone seeking clarity about their{" "}
          <Box component="span" sx={{ fontWeight: 700 }}>
            health risks
          </Box>{" "}
          and{" "}
          <Box component="span" sx={{ fontWeight: 700 }}>
            preventive options
          </Box>
          .
        </>
      ),
    },
    {
      id: 4,
      image: "/images/considerfour.svg",
      description: (
        <>
          Women who have experienced recurrent{" "}
          <Box component="span" sx={{ fontWeight: 700 }}>
            miscarriages
          </Box>
          , where a{" "}
          <Box component="span" sx={{ fontWeight: 700 }}>
            genetic cause
          </Box>{" "}
          may be suspected.
        </>
      ),
    },
    {
      id: 5,
      image: "/images/considerfive.svg",
      description: (
        <>
          Couples planning a{" "}
          <Box component="span" sx={{ fontWeight: 700 }}>
            pregnancy
          </Box>{" "}
          who wish to know if they carry genes linked to specific{" "}
          <Box component="span" sx={{ fontWeight: 700 }}>
            disorders
          </Box>
          .
        </>
      ),
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "#ffffff",
        padding: { xs: "40px 0", md: "60px 0", lg: "80px 0" },
      }}
    >
      <Container maxWidth="xl">
        {/* Header Section */}
        <Box
          sx={{
            textAlign: "center",
            marginBottom: { xs: "40px", md: "60px" },
            px: { xs: 2, md: 4 },
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
            Who Should Consider Genetic Testing?
          </Typography>

          {/* Subtitle */}
          <Typography
            sx={{
              fontFamily: "Onest",
              fontWeight: 400,
              fontSize: { xs: "15px", md: "16px" },
              lineHeight: "1.7",
              color: "#333333",
              maxWidth: "900px",
              margin: "0 auto",
            }}
          >
            While genetic testing is available to anyone, it can be particularly
            beneficial for:
          </Typography>
        </Box>

        {/* Cards Grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
            gap: { xs: "100px 24px", md: "120px 32px" },
            px: { xs: 2, md: 4, lg: 6 },
            marginBottom: { xs: "40px", md: "60px" },
            marginTop: { xs: "100px", md: "120px" },
            maxWidth: "1400px",
            margin: "0 auto",
            marginTop: { xs: "100px", md: "120px" },
            marginBottom: { xs: "40px", md: "60px" },
          }}
        >
          {/* First Card - Text Only with Dashed Border */}
          <Box
            sx={{
              backgroundColor: "#FEFEFD",
              borderRadius: "20px",
              padding: { xs: "40px 32px", md: "40px 36px" },
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              border: "2px dashed #E8E5DE",
              minHeight: { xs: "auto", md: "200px" },
              height: { md: "200px" },
            }}
          >
            <Typography
              sx={{
                fontFamily: "Onest",
                fontWeight: 400,
                fontSize: { xs: "12px", md: "16px", lg: "16px" },
                lineHeight: "1.4",
                color: "#333333",
              }}
            >
              If you are uncertain whether genetic testing is right for you, a
              genetic counselor or healthcare professional can assess your
              personal and family history to provide expert guidance.
            </Typography>
          </Box>

          {/* Cards with Images */}
          {audiences.map((audience) => (
            <Box
              key={audience.id}
              sx={{
                position: "relative",
                backgroundColor: "#F8F6F2",
                borderRadius: "20px",
                paddingTop: { xs: "90px", md: "100px" },
                paddingBottom: { xs: "36px", md: "32px" },
                paddingX: { xs: "28px", md: "32px" },
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                border: "1px solid #E8E5DE",
                height: { md: "200px" },
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-6px)",
                  boxShadow: "0 12px 24px rgba(0, 0, 0, 0.1)",
                },
              }}
            >
              {/* Circular Image - Half Outside the Card */}
              <Box
                sx={{
                  position: "absolute",
                  top: { xs: "-70px", md: "-80px" },
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: { xs: "140px", md: "160px" },
                  height: { xs: "140px", md: "160px" },
                  borderRadius: "50%",
                  overflow: "hidden",
                  border: "2px solid #FFFFFF",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Image
                  src={audience.image}
                  alt={`Audience ${audience.id}`}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </Box>

              {/* Description */}
              <Typography
                sx={{
                  fontFamily: "Onest",
                  fontWeight: 400,
                  fontSize: { xs: "15px", md: "16px" },
                  lineHeight: "1.7",
                  color: "#333333",
                }}
              >
                {audience.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default ConsiderTesting;

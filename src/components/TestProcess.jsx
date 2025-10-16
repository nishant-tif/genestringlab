import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";

const TestProcess = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#FFFFFF",
        padding: { xs: "40px 0", md: "60px 0", lg: "80px 0" },
      }}
    >
      <Container maxWidth="lg">
        {/* Title */}
        <Box
          sx={{
            textAlign: "center",
            marginBottom: { xs: "40px", md: "20px" },
            px: { xs: 2, md: 0 },
          }}
        >
          <Typography
            sx={{
              fontFamily: "Onest",
              fontWeight: 700,
              fontSize: { xs: "28px", sm: "32px", md: "36px", lg: "40px" },
              lineHeight: "1.2",
              color: "#000000",
            }}
          >
            How is Genetic Testing Done?
          </Typography>
        </Box>

        {/* Sample Methods Container */}
        <Box
          sx={{
            backgroundColor: "#F8F6F2",
            borderRadius: "24px",
            // padding: { xs: "40px 24px", sm: "50px 32px", md: "20px 20px" },
            mx: { xs: 2, md: 0 },
          }}
        >
          {/* Test Process Image */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: { xs: "32px", md: "40px" },
              px: { xs: 1, md: 2 },
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: "100%",
                maxWidth: "1200px",
                height: { xs: "150px", sm: "200px", md: "250px" },
              }}
            >
              <Image
                src="/images/testprocess.svg"
                alt="Genetic Testing Process"
                fill
                style={{ objectFit: "contain" }}
              />
            </Box>
          </Box>
        </Box>
        {/* Bottom Description */}
        <Box
          sx={{
            textAlign: "center",
            px: { xs: 1, md: 2 },
          }}
        >
          <Typography
            sx={{
              fontFamily: "Onest",
              fontWeight: 400,
              fontSize: { xs: "14px", md: "15px", lg: "16px" },
              lineHeight: "1.7",
              color: "#555555",
              maxWidth: "1100px",
              margin: "0 auto",
            }}
          >
            Once collected, your sample is analyzed in a specialized laboratory
            using state-of-the-art genetic sequencing technology. The results
            are reviewed by expert scientists and clinicians, then shared with
            your doctor or genetic counselor. They will explain the findings in
            clear, understandable terms and discuss your options for follow-up
            care or treatment.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default TestProcess;

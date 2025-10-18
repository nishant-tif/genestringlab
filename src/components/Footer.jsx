import React from "react";
import Image from "next/image";
import {
  Typography,
  Box,
  Container,
  Grid,
  Button,
  TextField,
  useTheme,
  useMediaQuery,
} from "@mui/material";
// Removed Material-UI icons - using custom icons from images folder

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        backgroundColor: "#F8F6F2",
        padding: { xs: "40px 0 30px 0", md: "60px 0 40px 0" },
      }}
    >
      <Container maxWidth="xl">
        {/* Top Section - Subscription Form */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: { xs: "40px", md: "60px" },
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 3, md: 0 },
            px: { xs: 2, md: 0 },
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", md: "293px" },
              height: "auto",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{
                color: "#333333",
                fontFamily: "Onest",
                fontWeight: 500,
                fontSize: { xs: "24px", sm: "28px", md: "34px" },
                lineHeight: "100%",
                letterSpacing: "0%",
                textTransform: "capitalize",
                margin: 0,
                padding: 0,
              }}
            >
              Subscribe For
              <br />
              Healthy Updates!
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              gap: "8px",
              alignItems: "center",
              width: { xs: "100%", md: "494px" },
              height: { xs: "auto", md: "46px" },
              flexDirection: { xs: "column", sm: "row" },
            }}
          >
            <TextField
              placeholder="Enter Your Email"
              variant="outlined"
              sx={{
                width: { xs: "100%", sm: "360px" },
                height: "46px",
                color: "black",
                "& .MuiOutlinedInput-root": {
                  backgroundColor: "white",
                  height: "46px",
                  borderRadius: "100px",
                  "& fieldset": {
                    borderColor: "#e0e0e0",
                    borderWidth: "1px",
                  },
                  "&:hover fieldset": {
                    borderColor: "#15876B",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#15876B",
                  },
                },
                "& .MuiInputBase-input": {
                  fontSize: { xs: "12px", md: "14px" },
                  padding: { xs: "16px 20px", md: "18px 24px" },
                  height: "auto",
                },
              }}
            />
            <Button
              sx={{
                backgroundColor: "#15876B",
                color: "white",
                fontWeight: 600,
                fontSize: { xs: "12px", md: "14px" },
                width: { xs: "100%", sm: "126px" },
                height: "46px",
                borderRadius: "100px",
                opacity: 1,
                textTransform: "none",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "#0f6b54",
                  transform: "translateY(-1px)",
                  boxShadow: "0 4px 12px rgba(21, 135, 107, 0.3)",
                },
              }}
            >
              Subscribe
            </Button>
          </Box>
        </Box>

        {/* HR Separator */}
        <Box
          sx={{
            borderTop: "1px solid #e0e0e0",
            margin: { xs: "32px 0", md: "40px 0" },
            mx: { xs: 2, md: 0 },
          }}
        />

        {/* Middle Section - Company Info and Navigation */}
        <Grid
          container
          spacing={{ xs: 4, md: 6 }}
          sx={{ px: { xs: 2, md: 0 } }}
        >
          {/* Left Column - Logo and Description */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                width: { xs: "100%", md: "486px" },
                height: "auto",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: { xs: 2, md: 0 },
              }}
            >
              <Box
                sx={{
                  width: { xs: "160px", md: "188px" },
                  height: { xs: "40px", md: "48px" },
                }}
              >
                <Image
                  src="/images/logo.png"
                  alt="GENESTRING LAB"
                  width={188}
                  height={48}
                  style={{
                    maxHeight: "48px",
                    width: "auto",
                    objectFit: "contain",
                  }}
                />
              </Box>
              <Typography
                sx={{
                  color: "black",
                  fontFamily: "Onest",
                  fontWeight: 500,
                  fontSize: { xs: "12px", md: "14px" },
                  lineHeight: "24px",
                  letterSpacing: "0%",
                  textTransform: "capitalize",
                  width: { xs: "100%", md: "486px" },
                  height: "auto",
                }}
              >
                Genestrings Aspires To Be The Company That Best Understands And
                Meets The Needs Of Indian Genetic Testing Services.
              </Typography>
            </Box>
          </Grid>

          {/* Right Column - Navigation Links */}
          <Grid item xs={12} md={6}>
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Box
                sx={{
                  width: "260px",
                  height: "136px",
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gridTemplateRows: "repeat(4, 1fr)",
                  rowGap: "16px",
                  columnGap: "20px",
                  alignContent: "center",
                  paddingLeft: "8px",
                }}
              >
                <Typography
                  component="a"
                  href="#"
                  sx={{
                    color: "#1A1A1ACC",

                    textDecoration: "none",
                    fontSize: "16px",
                    fontWeight: 500,
                    "&:hover": { color: "#15876B" },
                  }}
                >
                  About
                </Typography>
                <Typography
                  component="a"
                  href="#"
                  sx={{
                    color: "#1A1A1ACC",

                    textDecoration: "none",
                    fontSize: "14px",
                    fontWeight: 500,
                    "&:hover": { color: "#15876B" },
                  }}
                >
                  Blog
                </Typography>
                <Typography
                  component="a"
                  href="#"
                  sx={{
                    color: "#1A1A1ACC",

                    textDecoration: "none",
                    fontSize: "14px",
                    fontWeight: 500,
                    "&:hover": { color: "#15876B" },
                  }}
                >
                  Media
                </Typography>
                <Typography
                  component="a"
                  href="#"
                  sx={{
                    color: "#1A1A1ACC",

                    textDecoration: "none",
                    fontSize: "14px",
                    fontWeight: 500,
                    "&:hover": { color: "#15876B" },
                  }}
                >
                  Contact
                </Typography>
                <Typography
                  component="a"
                  href="#"
                  sx={{
                    color: "#1A1A1ACC",

                    textDecoration: "none",
                    fontSize: "14px",
                    fontWeight: 500,
                    "&:hover": { color: "#15876B" },
                  }}
                >
                  Career
                </Typography>
                <Typography
                  component="a"
                  href="#"
                  sx={{
                    color: "#1A1A1ACC",

                    textDecoration: "none",
                    fontSize: "14px",
                    textWrap: "nowrap",
                    fontWeight: 500,
                    "&:hover": { color: "#15876B" },
                  }}
                >
                  Terms & Conditions
                </Typography>
                <Typography
                  component="a"
                  href="#"
                  sx={{
                    color: "#1A1A1ACC",

                    textDecoration: "none",
                    textWrap: "nowrap",
                    fontSize: "14px",
                    fontWeight: 500,
                    "&:hover": { color: "#15876B" },
                  }}
                >
                  Our Networks
                </Typography>
                <Typography
                  component="a"
                  href="#"
                  sx={{
                    color: "#1A1A1ACC",
                    textDecoration: "none",
                    fontSize: "14px",
                    fontWeight: 500,
                    "&:hover": { color: "#15876B" },
                  }}
                >
                  Privacy Policy
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Bottom Section - Copyright and Social Media */}
        <Box
          sx={{
            borderTop: "1px solid #e0e0e0",
            marginTop: { xs: "40px", md: "60px" },
            paddingTop: { xs: "24px", md: "30px" },
            mx: { xs: 2, md: 0 },
          }}
        >
          <Grid
            container
            alignItems="center"
            justifyContent="space-between"
            sx={{
              flexDirection: { xs: "column", md: "row" },
              gap: { xs: 2, md: 0 },
            }}
          >
            <Grid item xs={12} md="auto">
              <Box
                sx={{
                  width: { xs: "100%", md: "398px" },
                  height: "auto",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: { xs: "center", md: "flex-start" },
                }}
              >
                <Typography
                  sx={{
                    color: "#333333",
                    fontFamily: "Onest",
                    fontWeight: 500,
                    fontSize: { xs: "12px", md: "14px" },
                    lineHeight: "24px",
                    letterSpacing: "0%",
                    textTransform: "capitalize",
                    margin: 0,
                    padding: 0,
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  Genestrings Diagnostic Centre - © 2025 All Rights Reserved
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md="auto">
              <Box
                sx={{
                  display: "flex",
                  gap: { xs: 2, md: 1 },
                  justifyContent: { xs: "center", md: "flex-end" },
                }}
              >
                {/* Facebook */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.1)",
                    },
                  }}
                >
                  <Image
                    src="/images/facebook.svg"
                    alt="Facebook"
                    width={32}
                    height={32}
                    style={{ objectFit: "contain" }}
                  />
                </Box>
                {/* YouTube */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.1)",
                    },
                  }}
                >
                  <Image
                    src="/images/youtube.png"
                    alt="YouTube"
                    width={32}
                    height={32}
                    style={{ objectFit: "contain" }}
                  />
                </Box>

                {/* Twitter */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.1)",
                    },
                  }}
                >
                  <Image
                    src="/images/twitter.png"
                    alt="Twitter"
                    width={32}
                    height={32}
                    style={{ objectFit: "contain" }}
                  />
                </Box>

                {/* LinkedIn */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.1)",
                    },
                  }}
                >
                  <Image
                    src="/images/linkedin.png"
                    alt="LinkedIn"
                    width={32}
                    height={32}
                    style={{ objectFit: "contain" }}
                  />
                </Box>

                {/* Instagram */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.1)",
                    },
                  }}
                >
                  <Image
                    src="/images/insta.png"
                    alt="Instagram"
                    width={32}
                    height={32}
                    style={{ objectFit: "contain" }}
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;

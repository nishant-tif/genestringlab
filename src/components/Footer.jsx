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
        padding: "60px 0 40px 0",
      }}
    >
      <Container maxWidth="xl">
        {/* Top Section - Subscription Form */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "60px",
            flexDirection: isMobile ? "column" : "row",
            gap: isMobile ? 3 : 0,
          }}
        >
          <Box
            sx={{
              width: "293px",
              height: "67px",
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
                fontSize: "34px",
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
              width: "494px",
              height: "46px",
            }}
          >
            <TextField
              placeholder="Enter Your Email"
              variant="outlined"
              sx={{
                width: "360px",
                height: "46px",
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
                  fontSize: "14px",
                  padding: "18px 24px",
                  height: "auto",
                },
              }}
            />
            <Button
              sx={{
                backgroundColor: "#15876B",
                color: "white",
                fontWeight: 600,
                fontSize: "14px",
                width: "126px",
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
            margin: "40px 0",
          }}
        />

        {/* Middle Section - Company Info and Navigation */}
        <Grid container spacing={6}>
          {/* Left Column - Logo and Description */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                width: "486px",
                height: "136px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  width: "188px",
                  height: "48px",
                }}
              >
                <Image
                  src="/images/logo.png"
                  alt="GENESTRING LAB"
                  width={188}
                  height={48}
                  style={{
                    maxHeight: "48px",
                    objectFit: "contain",
                  }}
                />
              </Box>
              <Typography
                sx={{
                  color: "black",
                  fontFamily: "Onest",
                  fontWeight: 500,
                  fontSize: "14px",
                  lineHeight: "24px",
                  letterSpacing: "0%",
                  textTransform: "capitalize",
                  width: "486px",
                  height: "34px",
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
                    color: "#333333",
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
                    color: "#333333",
                    textDecoration: "none",
                    fontSize: "16px",
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
                    color: "#333333",
                    textDecoration: "none",
                    fontSize: "16px",
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
                    color: "#333333",
                    textDecoration: "none",
                    fontSize: "16px",
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
                    color: "#333333",
                    textDecoration: "none",
                    fontSize: "16px",
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
                    color: "#333333",
                    textDecoration: "none",
                    fontSize: "16px",
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
                    color: "#333333",
                    textDecoration: "none",
                    textWrap: "nowrap",
                    fontSize: "16px",
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
                    color: "#333333",
                    textDecoration: "none",
                    fontSize: "16px",
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
            marginTop: "60px",
            paddingTop: "30px",
          }}
        >
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item>
              <Box
                sx={{
                  width: "398px",
                  height: "10px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    color: "#333333",
                    fontFamily: "Onest",
                    fontWeight: 500,
                    fontSize: "14px",
                    lineHeight: "24px",
                    letterSpacing: "0%",
                    textTransform: "capitalize",
                    margin: 0,
                    padding: 0,
                  }}
                >
                  Genestrings Diagnostic Centre - © 2025 All Rights Reserved
                </Typography>
              </Box>
            </Grid>
            <Grid item>
              <Box sx={{ display: "flex", gap: 3 }}>
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

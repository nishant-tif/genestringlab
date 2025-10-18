import React from "react";
import Image from "next/image";
import {
  Typography,
  Box,
  Container,
  Grid,
  Button,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { KeyboardArrowDown, Menu as MenuIcon } from "@mui/icons-material";

const MainHeader = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const isSmallMobile = useMediaQuery(theme.breakpoints.down("md"));

  const navItems = [
    { label: "About Us", hasDropdown: false },
    { label: "Popular Packages", hasDropdown: false },
    { label: "Risks", hasDropdown: true },
    { label: "Habits", hasDropdown: true },
    { label: "Genetics", hasDropdown: false },
    { label: "Pathology", hasDropdown: false },
    // { label: "Genetic Testing", hasDropdown: false, isActive: true },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "white",
        borderBottom: "1px solid #e0e0e0",
        padding: { xs: "10px 0", md: "15px 0" },
      }}
    >
      <Container maxWidth="xl">
        <Grid container alignItems="center" justifyContent="space-between">
          {/* Logo Section */}
          <Grid item>
            <Box
              sx={{
                width: { xs: "100px", md: "127px" },
                height: { xs: "30px", md: "37px" },
              }}
            >
              <Image
                src="/images/logo.svg"
                alt="GENESTRING LAB"
                width={127}
                height={37}
                style={{
                  maxHeight: isSmallMobile ? "30px" : "37px",
                  width: "auto",
                  objectFit: "contain",
                }}
                priority
              />
            </Box>
          </Grid>

          {/* Navigation Section */}
          <Grid item>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: { xs: 1, md: 2, lg: 5 },
              }}
            >
              {/* Desktop Navigation */}
              <Box
                sx={{
                  display: { xs: "none", lg: "flex" },
                  alignItems: "center",
                  gap: { lg: 2, xl: 4 },
                }}
              >
                {navItems.map((item, index) => (
                  <Typography
                    key={index}
                    component="a"
                    href="#"
                    sx={{
                      color: item.isActive ? "#000000" : "#333333",
                      textDecoration: "none",
                      fontWeight: item.isActive ? 600 : 500,
                      fontSize: "15px",
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      width: item.isActive ? "120px" : "auto",
                      height: "36px",
                      padding: item.isActive ? "8px 20px" : "8px 0",
                      backgroundColor: item.isActive
                        ? "transparent"
                        : "transparent",
                      borderRadius: item.isActive ? "37.5px" : 0,
                      border: item.isActive ? "2px solid #ffd700" : "none",
                      opacity: 1,
                      transition: "all 0.3s ease",
                      "&:hover": {
                        color: item.isActive ? "#000000" : "#2c5aa0",
                        backgroundColor: item.isActive
                          ? "transparent"
                          : "transparent",
                        border: item.isActive ? "2px solid #ffd700" : "none",
                      },
                    }}
                  >
                    {item.label}
                    {item.hasDropdown && (
                      <KeyboardArrowDown sx={{ fontSize: "12px" }} />
                    )}
                  </Typography>
                ))}
              </Box>

              {/* Mobile Menu Button */}
              {isSmallMobile && (
                <IconButton
                  sx={{
                    display: { xs: "flex", lg: "none" },
                    marginLeft: "auto",
                  }}
                >
                  <MenuIcon sx={{ color: "#333333" }} />
                </IconButton>
              )}

              <Button
                component="a"
                href="#"
                sx={{
                  display: { xs: "none", sm: "inline-flex" },
                  backgroundColor: "transparent",
                  color: "#000000",
                  fontWeight: 600,
                  fontSize: { sm: "13px", md: "14px", lg: "15px" },
                  textWrap: "nowrap",
                  width: { sm: "auto", lg: "143px" },
                  height: { xs: "32px", lg: "36px" },
                  gap: "10px",
                  padding: { sm: "6px 16px", lg: "8px 20px" },
                  borderRadius: "37.5px",
                  border: "2px solid #ffd700",
                  opacity: 1,
                  textTransform: "none",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "transparent",
                    border: "2px solid #ffd700",
                  },
                }}
              >
                Genetic Testing
              </Button>
              {/* Login Button */}
              <Button
                component="a"
                href="#"
                sx={{
                  backgroundColor: "#ffd700",
                  color: "#000000",
                  fontWeight: 600,
                  fontSize: { xs: "13px", md: "14px", lg: "15px" },
                  width: { xs: "auto", lg: "77px" },
                  height: { xs: "32px", lg: "36px" },
                  gap: "10px",
                  padding: { xs: "6px 16px", lg: "8px 20px" },
                  borderRadius: "37.5px",
                  opacity: 1,
                  textTransform: "none",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "#ffc107",
                    transform: "translateY(-1px)",
                    boxShadow: "0 2px 8px rgba(255, 215, 0, 0.3)",
                  },
                }}
              >
                Login
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default MainHeader;

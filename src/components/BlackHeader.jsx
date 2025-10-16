import React from "react";
import {
  Typography,
  Box,
  Container,
  Grid,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Phone, KeyboardArrowDown } from "@mui/icons-material";

const BlackHeader = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        backgroundColor: "black",
        borderBottom: "1px solid #444444",
        minHeight: "30px",
        display: { xs: "none", md: "flex" },
        alignItems: "center",
        py: { xs: 1, md: 0 },
      }}
    >
      <Container maxWidth="xl">
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: { xs: 1.5, md: 2.5 },
                flexWrap: "wrap",
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  color: "white",
                  fontSize: { xs: "12px", md: "14px" },
                  fontWeight: 400,
                }}
              >
                Blood Sample collection at doorstep
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <Phone
                  sx={{
                    color: "#FFD500",
                    fontSize: { xs: "14px", md: "16px" },
                  }}
                />
                <Typography
                  variant="body2"
                  sx={{
                    color: "#FFD500",
                    fontWeight: 600,
                    fontSize: { xs: "12px", md: "14px" },
                  }}
                >
                  9717300900
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: { xs: 1.5, md: 3 },
                justifyContent: { xs: "flex-start", md: "flex-end" },
                flexWrap: "wrap",
              }}
            >
              <Typography
                component="a"
                href="#"
                sx={{
                  color: "white",
                  textDecoration: "none",
                  fontSize: { xs: "12px", md: "14px" },
                  fontWeight: 400,
                  "&:hover": { color: "#ffd700" },
                }}
              >
                Partners
              </Typography>
              <Typography
                component="a"
                href="#"
                sx={{
                  color: "white",
                  textDecoration: "none",
                  fontSize: { xs: "12px", md: "14px" },
                  fontWeight: 400,
                  display: "flex",
                  alignItems: "center",
                  gap: 0.5,
                  "&:hover": { color: "#ffd700" },
                }}
              >
                Company
                <KeyboardArrowDown sx={{ fontSize: "12px" }} />
              </Typography>
              <Typography
                component="a"
                href="#"
                sx={{
                  color: "white",
                  textDecoration: "none",
                  fontSize: { xs: "12px", md: "14px" },
                  fontWeight: 400,
                  display: "flex",
                  alignItems: "center",
                  gap: 0.5,
                  "&:hover": { color: "#ffd700" },
                }}
              >
                Login
                <KeyboardArrowDown sx={{ fontSize: "12px" }} />
              </Typography>
              <Typography
                component="a"
                href="#"
                sx={{
                  color: "white",
                  textDecoration: "none",
                  fontSize: { xs: "12px", md: "14px" },
                  fontWeight: 400,
                  display: "flex",
                  alignItems: "center",
                  gap: 0.5,
                  "&:hover": { color: "#ffd700" },
                }}
              >
                EN
                <KeyboardArrowDown sx={{ fontSize: "12px" }} />
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default BlackHeader;

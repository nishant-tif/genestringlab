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
        height: "30px",
        minHeight: "30px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container maxWidth="xl">
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2.5,
                flexDirection: isMobile ? "column" : "row",
                gap: isMobile ? 1 : 2.5,
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  color: "white",
                  fontSize: "14px",
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
                <Phone sx={{ color: "#FFD500", fontSize: "16px" }} />
                <Typography
                  variant="body2"
                  sx={{
                    color: "#FFD500",
                    fontWeight: 600,
                    fontSize: "14px",
                  }}
                >
                  9717300900
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: isMobile ? 1.5 : 3,
              }}
            >
              <Typography
                component="a"
                href="#"
                sx={{
                  color: "white",
                  textDecoration: "none",
                  fontSize: "14px",
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
                  fontSize: "14px",
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
                  fontSize: "14px",
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
                  fontSize: "14px",
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

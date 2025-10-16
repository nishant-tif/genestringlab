import React from "react";
import Image from "next/image";
import {
  Typography,
  Box,
  Container,
  Grid,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { KeyboardArrowRight } from "@mui/icons-material";

const BlogsSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const blogPosts = [
    {
      id: 1,
      image: "/images/blogone.png",
      title: "How Genetic Testing Shapes the Future of Healthcare",
      readNowText: "Read Now",
    },
    {
      id: 2,
      image: "/images/blogtwo.png",
      title: "5 Ways Genetic Testing Impacts Everyday Life",
      readNowText: "Read Now",
    },
    {
      id: 3,
      image: "/images/blogthree.png",
      title: "What Modern Genetic Testing Can Reveal",
      readNowText: "Read Now",
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "#F4F1EB",
        padding: "80px 0",
      }}
    >
      <Container maxWidth="xl">
        {/* Header Section */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: "40px",
            flexDirection: isMobile ? "column" : "row",
            gap: isMobile ? 3 : 0,
          }}
        >
          {/* Title */}
          <Typography
            sx={{
              color: "#333333",
              fontFamily: "Onest",
              fontWeight: 700,
              fontSize: "34px",
              lineHeight: "32px",
              letterSpacing: "0%",
              margin: 0,
              padding: 0,
            }}
          >
            Blogs & Updates
          </Typography>

          {/* All Articles Button */}
          <Button
            sx={{
              width: "120px",
              height: "40px",
              gap: "8px",
              borderRadius: "8px",
              border: "1.5px solid #333333",
              padding: "8px 12px",
              backgroundColor: "#F4F1EB",
              color: "#333333",
              textTransform: "none",
              fontSize: "14px",
              fontWeight: 500,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              lineHeight: 1.2,
              "&:hover": {
                backgroundColor: "#333333",
                color: "white",
                "& .MuiSvgIcon-root": {
                  color: "white",
                },
              },
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <Typography sx={{ fontSize: "14px", lineHeight: 1 }}>
                All
              </Typography>
              <Typography sx={{ fontSize: "14px", lineHeight: 1 }}>
                Articles
              </Typography>
              <Typography sx={{ fontSize: "12px", lineHeight: 1 }}>
                ›
              </Typography>
            </Box>
          </Button>
        </Box>

        {/* Blog Cards Section */}
        <Box
          sx={{
            position: "relative",
            marginTop: "50px",
          }}
        >
          <Grid container spacing={4} justifyContent="center">
            {blogPosts.map((post, index) => (
              <Grid item xs={12} md={4} key={post.id}>
                <Box
                  sx={{
                    backgroundColor: "white",
                    borderRadius: "12px",
                    overflow: "hidden",
                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                    position: "relative",
                    zIndex: 1,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    border: "2px solid white",
                  }}
                >
                  {/* Blog Image */}
                  <Box
                    sx={{
                      position: "relative",
                      width: "100%",
                      height: "250px",
                      overflow: "hidden",
                      borderRadius: "10px 10px 0 0",
                    }}
                  >
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      style={{
                        objectFit: "cover",
                      }}
                    />
                  </Box>

                  {/* Blog Content */}
                  <Box
                    sx={{
                      padding: "24px",
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                      backgroundColor: "#F4F1EB",
                      position: "relative",
                      minHeight: "100px",
                    }}
                  >
                    {/* Title */}
                    <Box
                      sx={{
                        minHeight: "64px",
                        display: "flex",
                        alignItems: "flex-start",
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#333333",
                          fontFamily: "Onest",
                          fontWeight: 600,
                          fontSize: "20px",
                          lineHeight: "32px",
                          letterSpacing: "0%",
                          margin: 0,
                          padding: 0,
                        }}
                      >
                        {post.title}
                      </Typography>
                    </Box>

                    {/* HR Separator - Fixed Position */}
                    <Box
                      sx={{
                        position: "absolute",
                        top: "88px",
                        left: "24px",
                        right: "24px",
                        height: "1px",
                        backgroundColor: "#e0e0e0",
                      }}
                    />

                    {/* Read Now Link */}
                    <Box
                      sx={{
                        position: "absolute",
                        top: "100px",
                        left: "24px",
                        right: "24px",
                        height: "20px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        component="a"
                        href="#"
                        sx={{
                          color: "#FD9C00",
                          fontFamily: "Onest",
                          fontWeight: 500,
                          fontSize: "16px",
                          lineHeight: "100%",
                          letterSpacing: "0%",
                          textDecoration: "none",
                          display: "flex",
                          alignItems: "center",
                          gap: 0.5,
                          "&:hover": {
                            color: "#e88a00",
                          },
                        }}
                      >
                        {post.readNowText} →
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default BlogsSection;

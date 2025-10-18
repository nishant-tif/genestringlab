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
        backgroundColor: "#ffffff",
        padding: { xs: "40px 20px", md: "60px 40px", lg: "80px 60px" },
        position: "relative",
      }}
    >
      {/* Beige Background Layer - covers header and 80% of cards */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "calc(100% - 27%)",
          backgroundColor: "#F4F1EB",
          zIndex: 0,
        }}
      />

      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
        {/* Header Section */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: { xs: "28px", md: "30px" },
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 3, md: 0 },
            px: { xs: 2, md: 0 },
          }}
        >
          {/* Title */}
          <Typography
            sx={{
              color: "#333333",
              fontFamily: "Onest",
              fontWeight: 700,
              fontSize: { xs: "28px", md: "34px" },
              lineHeight: { xs: "1.2", md: "32px" },
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
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.75 }}>
              <Typography
                sx={{ fontSize: "16px", lineHeight: 1, fontWeight: 500 }}
              >
                All
              </Typography>
              <Typography
                sx={{ fontSize: "16px", lineHeight: 1, fontWeight: 500 }}
              >
                Articles
              </Typography>
              <Box
                sx={{
                  position: "relative",
                  width: "16px",
                  height: "16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  src="/images/right.svg"
                  alt="Arrow"
                  width={16}
                  height={16}
                  style={{ objectFit: "contain" }}
                />
              </Box>
            </Box>
          </Button>
        </Box>

        {/* Blog Cards Section */}
        <Box
          sx={{
            position: "relative",
            marginTop: { xs: "40px", md: "50px" },
            px: { xs: 2, md: 0 },
          }}
        >
          <Grid container spacing={{ xs: 3, md: 4 }} justifyContent="center">
            {blogPosts.map((post, index) => (
              <Grid item xs={12} sm={6} md={4} key={post.id}>
                <Box
                  sx={{
                    backgroundColor: "white",
                    borderRadius: { xs: "8px", md: "14px" },
                    overflow: "hidden",
                    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    border: "3px solid white",
                  }}
                >
                  {/* Blog Image */}
                  <Box
                    sx={{
                      position: "relative",

                      height: { xs: "200px", md: "240px" },
                      overflow: "hidden",
                      borderRadius: {
                        xs: "6px 6px 0 0",
                        md: "10px 10px 0 0",
                      },
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
                      padding: { xs: "20px", md: "24px" },
                      paddingBottom: { xs: "50px", md: "60px" },
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                      backgroundColor: "#F4F1EB",
                      position: "relative",
                      minHeight: { xs: "120px", md: "140px" },
                    }}
                  >
                    {/* Title */}
                    <Box
                      sx={{
                        minHeight: { xs: "auto", md: "64px" },
                        display: "flex",
                        alignItems: "flex-start",
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#333333",
                          fontFamily: "Onest",
                          fontWeight: 600,
                          fontSize: { xs: "18px", md: "20px" },
                          lineHeight: { xs: "1.4", md: "32px" },

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
                        top: { xs: "75px", md: "88px" },
                        left: { xs: "20px", md: "24px" },
                        right: { xs: "20px", md: "24px" },
                        height: "1px",
                        backgroundColor: "#e0e0e0",
                      }}
                    />

                    {/* Read Now Link */}
                    <Box
                      sx={{
                        position: "absolute",
                        top: { xs: "85px", md: "100px" },
                        left: { xs: "20px", md: "24px" },
                        right: { xs: "20px", md: "24px" },
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
                          fontSize: { xs: "14px", md: "16px" },
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

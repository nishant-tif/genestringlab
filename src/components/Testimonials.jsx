import React, { useState } from "react";
import { Box, Container, Typography, IconButton } from "@mui/material";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      text: "This doctor provides an in-depth explanation of the disease and the various treatment options available. Their thorough understanding and clear communication make it easy for patients to grasp complex medical information. Highly recommended!",
      rating: 4,
      name: "Ravinder Saraswat",
      age: "32",
      location: "Goa",
      image: "/images/Imageone.png",
    },
    {
      id: 2,
      text: "This doctor provides an in-depth explanation of the disease and the various treatment options available. Their thorough understanding and clear communication make it easy for patients to grasp complex medical information. Highly recommended!",
      rating: 4,
      name: "Ravinder Saraswat",
      age: "32",
      location: "Goa",
      image: "/images/Imageone.png",
    },
    {
      id: 3,
      text: "This doctor provides an in-depth explanation of the disease and the various treatment options available. Their thorough understanding and clear communication make it easy for patients to grasp complex medical information. Highly recommended!",
      rating: 4,
      name: "Ravinder Saraswat",
      age: "32",
      location: "Goa",
      image: "/images/Imageone.png",
    },
    {
      id: 4,
      text: "This doctor provides an in-depth explanation of the disease and the various treatment options available. Their thorough understanding and clear communication make it easy for patients to grasp complex medical information. Highly recommended!",
      rating: 4,
      name: "Ravinder Saraswat",
      age: "32",
      location: "Goa",
      image: "/images/Imageone.png",
    },
  ];

  const handlePrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <Box
      sx={{
        backgroundColor: "#ffffff",
        padding: { xs: "40px ", md: "80px 40px" },
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            backgroundColor: "#FCF2EB",
            borderRadius: { xs: "12px", md: "12px" },
            padding: { xs: "30px 20px", md: "50px 40px" },
            position: "relative",
            mx: { xs: 2, md: 0 },
          }}
        >
          {/* Navigation Controls */}
          <Box
            sx={{
              position: "absolute",
              top: { xs: "20px", md: "40px" },
              right: { xs: "20px", md: "40px" },
              display: "flex",
              alignItems: "center",
              gap: { xs: "12px", md: "12px" },
            }}
          >
            <IconButton
              onClick={handlePrevious}
              sx={{
                width: { xs: "32px", md: "40px" },
                height: { xs: "32px", md: "40px" },

                borderRadius: "8px",
                backgroundColor: "transparent",
                "&:hover": {
                  backgroundColor: "#e0e0e0",
                },
              }}
            >
              <ChevronLeft
                sx={{ color: "#333333", fontSize: { xs: "18px", md: "24px" } }}
              />
            </IconButton>

            <Typography
              sx={{
                fontFamily: "Onest",
                fontWeight: 500,
                fontSize: { xs: "14px", md: "16px" },
                color: "#333333",
              }}
            >
              {currentIndex + 1}/{testimonials.length}
            </Typography>

            <IconButton
              onClick={handleNext}
              sx={{
                width: { xs: "32px", md: "40px" },
                height: { xs: "32px", md: "40px" },

                borderRadius: "8px",
                backgroundColor: "transparent",
                "&:hover": {
                  backgroundColor: "#e0e0e0",
                },
              }}
            >
              <ChevronRight
                sx={{ color: "#333333", fontSize: { xs: "18px", md: "24px" } }}
              />
            </IconButton>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: { xs: "40px", md: "80px" },
              alignItems: "flex-start",
              justifyContent: "space-between",
            }}
          >
            {/* Left Section - Title and Description */}
            <Box
              sx={{
                width: { xs: "100%", md: "487px" },
                height: "auto",
                minHeight: { xs: "auto", md: "300px" },
                gap: { xs: "16px", md: "24px" },
                paddingTop: { xs: "20px", md: "40px" },
                paddingBottom: { xs: "20px", md: "40px" },
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Onest",
                  fontWeight: 700,
                  fontSize: { xs: "24px", sm: "32px", md: "34px" },
                  lineHeight: "1.2",
                  color: "#333333",
                  marginBottom: { xs: "12px", md: "18px", lg: "18px" },
                }}
              >
                What Our Customers Are Saying About Us
              </Typography>

              <Typography
                sx={{
                  fontFamily: "Onest",
                  fontWeight: 400,
                  fontSize: { xs: "14px", md: "20px" },
                  lineHeight: "1.3",
                  color: "#1A1A1A",
                }}
              >
                Want to know more about what our customers love about us.
                Discover testimonials and their experiences. Don't just take our
                word for it...
              </Typography>
            </Box>

            {/* Right Section - Testimonial Card */}
            <Box
              sx={{
                width: { xs: "100%", md: "578px" },
                height: "auto",
                minHeight: { xs: "auto", md: "350px" },
                gap: "10px",
                paddingTop: { xs: "10px", md: "20px" },
                position: "relative",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Quote Icon */}
              <Box
                sx={{
                  marginBottom: { xs: "8px", md: "12px" },
                  position: "relative",
                  width: { xs: "30px", md: "40px" },
                  height: { xs: "30px", md: "40px" },
                }}
              >
                <Image
                  src="/images/quote.svg"
                  alt="Quote"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </Box>

              {/* Testimonial Text */}
              <Typography
                sx={{
                  fontFamily: "Onest",
                  fontWeight: 500,
                  fontSize: { xs: "14px", md: "16px" },
                  lineHeight: "1.6",
                  color: "#333333",
                  marginBottom: { xs: "12px", md: "20px" },
                }}
              >
                {currentTestimonial.text}
              </Typography>

              {/* Star Rating */}
              <Box
                sx={{
                  display: "flex",
                  gap: { xs: "6px", md: "8px" },
                  marginBottom: { xs: "12px", md: "20px" },
                }}
              >
                {[1, 2, 3, 4, 5].map((star) => (
                  <Box
                    key={star}
                    sx={{
                      fontSize: { xs: "20px", md: "24px" },
                      color:
                        star <= currentTestimonial.rating
                          ? "#FFA500"
                          : "#E0E0E0",
                    }}
                  >
                    {star <= currentTestimonial.rating ? "★" : "☆"}
                  </Box>
                ))}
              </Box>

              {/* HR Separator */}
              <Box
                sx={{
                  borderTop: "1px solid #D0D0D0",
                  marginBottom: "16px",
                }}
              />

              {/* User Info */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                }}
              >
                {/* User Image */}
                <Box
                  sx={{
                    width: { xs: "44px", md: "48px" },
                    height: { xs: "44px", md: "48px" },
                    borderRadius: "50%",
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <Image
                    src={currentTestimonial.image}
                    alt={currentTestimonial.name}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </Box>

                {/* Name and Location */}
                <Box>
                  <Typography
                    sx={{
                      fontFamily: "Onest",
                      fontWeight: 600,
                      fontSize: { xs: "14px", md: "16px" },
                      color: "#333333",
                      lineHeight: 1.4,
                    }}
                  >
                    {currentTestimonial.name}, {currentTestimonial.age}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Onest",
                      fontWeight: 400,
                      fontSize: { xs: "12px", md: "14px" },
                      color: "#666666",
                      lineHeight: 1.4,
                    }}
                  >
                    {currentTestimonial.location}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Testimonials;

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
        padding: "80px 0",
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            backgroundColor: "#F8F6F2",
            borderRadius: "24px",
            padding: { xs: "40px 20px", md: "60px 80px" },
            position: "relative",
          }}
        >
          {/* Navigation Controls */}
          <Box
            sx={{
              position: "absolute",
              top: "40px",
              right: "40px",
              display: "flex",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <IconButton
              onClick={handlePrevious}
              sx={{
                width: "40px",
                height: "40px",
                border: "1px solid #333333",
                borderRadius: "8px",
                backgroundColor: "transparent",
                "&:hover": {
                  backgroundColor: "#e0e0e0",
                },
              }}
            >
              <ChevronLeft sx={{ color: "#333333" }} />
            </IconButton>

            <Typography
              sx={{
                fontFamily: "Onest",
                fontWeight: 500,
                fontSize: "16px",
                color: "#333333",
              }}
            >
              {currentIndex + 1}/{testimonials.length}
            </Typography>

            <IconButton
              onClick={handleNext}
              sx={{
                width: "40px",
                height: "40px",
                border: "1px solid #333333",
                borderRadius: "8px",
                backgroundColor: "transparent",
                "&:hover": {
                  backgroundColor: "#e0e0e0",
                },
              }}
            >
              <ChevronRight sx={{ color: "#333333" }} />
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
                width: "487px",
                height: "372px",
                gap: "38px",
                paddingTop: "85px",
                paddingBottom: "85px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Onest",
                  fontWeight: 700,
                  fontSize: "40px",
                  lineHeight: "1.2",
                  color: "#333333",
                  marginBottom: "24px",
                }}
              >
                What Our Customers Are Saying About Us
              </Typography>

              <Typography
                sx={{
                  fontFamily: "Onest",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "1.6",
                  color: "#666666",
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
                width: "578px",
                height: "429px",
                gap: "10px",
                paddingTop: "32px",
                position: "relative",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Quote Icon */}
              <Box
                sx={{
                  marginBottom: "24px",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Georgia, serif",
                    fontSize: "64px",
                    color: "#D4AF37",
                    lineHeight: 1,
                    fontWeight: 700,
                  }}
                >
                  "
                </Typography>
              </Box>

              {/* Testimonial Text */}
              <Typography
                sx={{
                  fontFamily: "Onest",
                  fontWeight: 400,
                  fontSize: "18px",
                  lineHeight: "1.8",
                  color: "#333333",
                  marginBottom: "32px",
                }}
              >
                {currentTestimonial.text}
              </Typography>

              {/* Star Rating */}
              <Box
                sx={{
                  display: "flex",
                  gap: "8px",
                  marginBottom: "32px",
                }}
              >
                {[1, 2, 3, 4, 5].map((star) => (
                  <Box
                    key={star}
                    sx={{
                      fontSize: "24px",
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
                  marginBottom: "24px",
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
                    width: "56px",
                    height: "56px",
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
                      fontSize: "18px",
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
                      fontSize: "14px",
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

import React from "react";
import Image from "next/image";
import { Box, Container, Typography, Button } from "@mui/material";

const HeroSection = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: { xs: "400px", sm: "500px", md: "600px", lg: "700px" },
        overflow: "hidden",
      }}
    >
      {/* Background Images */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
        }}
      >
        {/* Banner Image */}
        <Image
          src="/images/banner.svg"
          alt="Genetic Testing Hero Banner"
          fill
          style={{
            objectFit: "cover",
          }}
          priority
        />

        {/* Green Background Image */}
        {/* <Image
          src="/images/greentwo.png"
          alt="Green Background"
          fill
          style={{
            objectFit: "cover",
          }}
        /> */}
      </Box>

      {/* Content Overlay */}
    </Box>
  );
};

export default HeroSection;

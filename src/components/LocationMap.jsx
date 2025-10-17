import React, { useState } from "react";
import { Box, Container, Typography, MenuItem, Select } from "@mui/material";
import dynamic from "next/dynamic";

// Create a Map component wrapper to handle all map logic
const MapComponent = dynamic(() => import("./MapComponent"), {
  ssr: false,
  loading: () => (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "1280px",
        height: "450px",
      }}
    >
      <Typography
        sx={{
          fontFamily: "Onest",
          fontWeight: 500,
          fontSize: "16px",
          color: "#666666",
        }}
      >
        Loading map...
      </Typography>
    </Box>
  ),
});

const LocationMap = () => {
  const [selectedCity, setSelectedCity] = useState("Delhi");

  // Lab locations data
  const locations = {
    Delhi: [
      {
        id: 1,
        name: "Genestring Lab - Malviya Nagar Delhi",
        address: "Malviya Nagar, Delhi",
        coordinates: [28.5355, 77.2097], // Malviya Nagar, Delhi coordinates
      },
      {
        id: 2,
        name: "MMTC Colony",
        address: "MMTC Colony, Delhi",
        coordinates: [28.549, 77.215],
      },
    ],
    Mumbai: [
      {
        id: 3,
        name: "Genestring Lab - Mumbai",
        address: "Andheri, Mumbai",
        coordinates: [19.076, 72.8777],
      },
    ],
    Bangalore: [
      {
        id: 4,
        name: "Genestring Lab - Bangalore",
        address: "Koramangala, Bangalore",
        coordinates: [12.9352, 77.6245],
      },
    ],
  };

  const cities = Object.keys(locations);
  const currentLocations = locations[selectedCity];
  const centerCoordinates = currentLocations[0].coordinates;

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#FAFAFA",
        padding: { xs: "60px 0", md: "80px 0", lg: "100px 0" },
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            mx: { xs: 2, md: 4 },
          }}
        >
          {/* Header Section */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: { xs: "flex-start", md: "center" },
              flexDirection: { xs: "column", md: "row" },
              marginBottom: { xs: "24px", md: "32px" },
              gap: { xs: "20px", md: "0" },
            }}
          >
            {/* Left - Title and Description */}
            <Box sx={{ flex: 1 }}>
              <Typography
                sx={{
                  fontFamily: "Onest",
                  fontWeight: 700,
                  fontSize: { xs: "28px", md: "36px", lg: "40px" },
                  lineHeight: "1.3",
                  color: "#000000",
                  marginBottom: { xs: "12px", md: "16px" },
                }}
              >
                Where to find us?
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Onest",
                  fontWeight: 400,
                  fontSize: { xs: "15px", md: "16px" },
                  lineHeight: "1.6",
                  color: "#555555",
                  maxWidth: "800px",
                }}
              >
                Discover lab locations we have across the country, each equipped
                with state-of-the-art technology and staffed by skilled
                professionals.
              </Typography>
            </Box>

            {/* Right - City Dropdown */}
            <Box>
              <Select
                value={selectedCity}
                onChange={handleCityChange}
                sx={{
                  fontFamily: "Onest",
                  fontWeight: 500,
                  fontSize: "16px",
                  backgroundColor: "#FFFFFF",
                  borderRadius: "8px",
                  minWidth: "150px",
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#E0E0E0",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#333333",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#000000",
                  },
                }}
              >
                {cities.map((city) => (
                  <MenuItem
                    key={city}
                    value={city}
                    sx={{
                      fontFamily: "Onest",
                      fontWeight: 500,
                    }}
                  >
                    {city}
                  </MenuItem>
                ))}
              </Select>
            </Box>
          </Box>

          {/* Map Container */}
          <Box
            sx={{
              width: "100%",
              height: { xs: "400px", md: "500px", lg: "600px" },
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
              "& .leaflet-container": {
                width: "100%",
                height: "100%",
                borderRadius: "12px",
              },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#f5f5f5",
            }}
          >
            <MapComponent
              selectedCity={selectedCity}
              locations={currentLocations}
              centerCoordinates={centerCoordinates}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default LocationMap;

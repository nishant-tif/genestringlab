import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Skeleton,
  Stack,
} from "@mui/material";
import React from "react";

export const CategoryNewsSkeleton = () => {
  return (
    <Container maxWidth="lg" maxWidth="xl" sx={{ my: { xs: 1.5, sm: 3 } }}>
      <Grid container spacing={2}>
        {/* First Row with 2 Columns */}
        <Grid container item xs={12} spacing={2} mb={2}>
          {/* Column 1: Left Side Image, Right Side Text */}
          <Grid item lg={6} xs={6} sm={6}>
            <Card variant="outlined">
              <CardContent sx={{ display: "flex" }}>
                <Box sx={{ flex: 1, mr: 2 }}>
                  <Skeleton variant="rectangular" height={150} width="100%" />
                </Box>
                <Box sx={{ flex: 2 }}>
                  <Skeleton variant="text" width="20%" sx={{ mb: 1 }} />
                  <Skeleton variant="text" width="100%" sx={{ mb: 1 }} />
                  <Skeleton variant="text" width="40%" sx={{ mb: 1 }} />
                  <Skeleton variant="text" width="100%" sx={{ mb: 1 }} />
                  <Skeleton variant="text" width="100%" sx={{ mb: 1 }} />
                  <Skeleton variant="text" width="40%" sx={{ mb: 1 }} />
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item lg={3} xs={3} sm={4}>
            <Card variant="outlined">
              <CardContent sx={{ display: "flex" }}>
                <Box sx={{ flex: 2 }}>
                  <Skeleton variant="text" width="80%" sx={{ mb: 1 }} />
                  <Skeleton variant="text" width="60%" sx={{ mb: 1 }} />
                  <Skeleton variant="text" width="90%" sx={{ mb: 1 }} />
                  <Skeleton variant="text" width="80%" sx={{ mb: 1 }} />
                  <Skeleton variant="text" width="60%" sx={{ mb: 1 }} />
                  <Skeleton variant="text" width="90%" sx={{ mb: 1 }} />
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item lg={3} xs={3} sm={4}>
            <Card variant="outlined">
              <CardContent>
                <Stack spacing={2}>
                  <Skeleton variant="rectangular" height={70} width="100%" />
                  <Stack spacing={1} sx={{ width: "100%" }}>
                    <Skeleton variant="text" width="40%" />
                    <Skeleton variant="text" width="100%" />
                    <Skeleton variant="text" width="50%" />
                  </Stack>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Second Row with 3 Columns */}
        <Grid container item xs={12} spacing={2}>
          {/* Column 1: Left Side Image, Right Side Text */}
          <Grid lg={5} item xs={12} sm={4}>
            <Card variant="outlined">
              <CardContent sx={{ display: "flex" }}>
                <Box sx={{ flex: 1, mr: 2 }}>
                  <Skeleton variant="rectangular" height={150} width="100%" />
                </Box>
                <Box sx={{ flex: 2 }}>
                  <Skeleton variant="text" width="20%" sx={{ mb: 1 }} />
                  <Skeleton variant="text" width="100%" sx={{ mb: 1 }} />
                  <Skeleton variant="text" width="40%" sx={{ mb: 1 }} />
                  <Skeleton variant="text" width="100%" sx={{ mb: 1 }} />
                  <Skeleton variant="text" width="100%" sx={{ mb: 1 }} />
                  <Skeleton variant="text" width="40%" sx={{ mb: 1 }} />
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Column 2: Multiple Text Lines Only */}
          <Grid lg={3.5} item xs={12} sm={4}>
            <Card variant="outlined">
              <CardContent>
                <Box sx={{ flex: 2 }}>
                  <Skeleton variant="text" width="80%" sx={{ mb: 1 }} />
                  <Skeleton variant="text" width="60%" sx={{ mb: 1 }} />
                  <Skeleton variant="text" width="90%" sx={{ mb: 1 }} />
                  <Skeleton variant="text" width="80%" sx={{ mb: 1 }} />
                  <Skeleton variant="text" width="60%" sx={{ mb: 1 }} />
                  <Skeleton variant="text" width="90%" sx={{ mb: 1 }} />
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Column 3: Single Block Image */}
          <Grid lg={3.5} item xs={12} sm={4}>
            <Card variant="outlined">
              <CardContent>
                <Skeleton variant="rectangular" height={160} width="100%" />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

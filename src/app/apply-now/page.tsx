"use client";

import ScrollReveal from "@/components/ScrollReveal";
import EmailIcon from "@mui/icons-material/Email";
import {
  Alert,
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  InputAdornment,
  MenuItem,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

interface Hub {
  _id: string;
  locationName: string;
}

const countries: { label: string; value: string }[] = [
  { label: "United States", value: "USD" },
  { label: "Eurozone", value: "EUR" },
  { label: "Bangladesh", value: "BDT" },
  { label: "South Africa", value: "ZAR" },
  { label: "West Africa (CFA)", value: "XOF" },
  { label: "Guinea", value: "GNF" },
  { label: "Liberia", value: "LRD" },
];

const productTypes = [
  { value: "cpp", label: "Cost Plus Profit (CPP) - Household" },
  { value: "ttp", label: "Trust-Based Trade Partnership (TTP)" },
  { value: "gep", label: "Group Empowerment Program (GEP)" },
];

const inputStyles = {
  "& .MuiOutlinedInput-root": {
    backgroundColor: "#F7F8FA",
    borderRadius: "4px",
    "& fieldset": {
      border: "none",
    },
    "&:hover fieldset": {
      border: "none",
    },
    "&.Mui-focused fieldset": {
      border: "2px solid rgba(13, 36, 77, 0.1)",
    },
    "& input::placeholder": {
      color: "#A0AEC0",
      opacity: 1,
    },
    "& .MuiSelect-select": {
      color: "#A0AEC0",
    },
  },
};

const ApplyNow = () => {
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState<{
    firstName: string;
    middleName: string;
    lastName: string;
    country: string;
    cityName: string;
    homeAddress: string;
    phone: string;
    email: string;
    productType: string;
    hub: string;
    purpose: string;
    confirmed: boolean;
  }>({
    firstName: "",
    middleName: "",
    lastName: "",
    country: "",
    cityName: "",
    homeAddress: "",
    phone: "",
    email: "",
    productType: "cpp",
    hub: "",
    purpose: "",
    confirmed: false,
  });

  const [hubs, setHubs] = useState<Hub[]>([]);

  useEffect(() => {
    let active = true;
    const loadHubs = async () => {
      if (formData.country && formData.country !== "all") {
        try {
          const res = await axios.get(
            `${process.env.NEXT_PUBLIC_BASE_URL}/location_profile/currency/${formData.country}`,
          );
          if (active && res.data.success) {
            setHubs(res.data.data);
          }
        } catch (error) {
          console.error("Error fetching hubs:", error);
        }
      } else {
        if (active) {
          // Use timeout to avoid synchronous setState warning
          setTimeout(() => setHubs([]), 0);
        }
      }
    };
    loadHubs();
    return () => {
      active = false;
    };
  }, [formData.country]);

  const [loading, setLoading] = useState<boolean>(false);
  const [snackbar, setSnackbar] = useState<{
    open: boolean;
    message: string;
    severity: "success" | "error";
  }>({
    open: false,
    message: "",
    severity: "success",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/leads_and_clients/from_website`,
        formData,
      );
      if (res.data.success) {
        setSubmitted(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error("Error submitting form:", error);
      setSnackbar({
        open: true,
        message:
          error.response?.data?.message ||
          "Something went wrong. Please try again.",
        severity: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  if (submitted) {
    return (
      <Box
        sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <Container
          maxWidth="md"
          sx={{ py: 20, flexGrow: 1, textAlign: "center" }}
        >
          <ScrollReveal variant="fade">
            <Alert
              severity="success"
              sx={{ borderRadius: 2, p: 3, fontSize: "1.1rem", mb: 4 }}
            >
              Thank you for your application! Our team will review your
              submission and reach out to you shortly.
            </Alert>
            <Button
              variant="contained"
              color="primary"
              href="/"
              sx={{ borderRadius: 2 }}
            >
              Return to Home
            </Button>
          </ScrollReveal>
        </Container>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        bgcolor: "white",
      }}
    >
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
      <main style={{ flexGrow: 1 }}>
        <Container maxWidth="lg" sx={{ pt: { xs: 15, md: 20 }, pb: 10 }}>
          <ScrollReveal variant="fade" duration={1.2}>
            <Typography
              variant="h1"
              sx={{
                mb: 3,
                fontSize: { xs: "2.5rem", md: "3.5rem" },
                color: "primary.main",
                fontWeight: 700,
              }}
            >
              Apply for an Ethical, Interest-Free Trade Arrangement
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 8,
                maxWidth: "900px",
                color: "text.secondary",
                fontSize: "1.1rem",
                lineHeight: 1.8,
              }}
            >
              Fill out the form below to request a Sharia-guided trade
              opportunity with TND Kapital. Once submitted, our team will review
              it and reach out to guide you through the next steps. Your
              information is safe with us, and will be used only to process your
              request.
            </Typography>
          </ScrollReveal>

          <ScrollReveal variant="slideUp" distance={40} delay={0.2}>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                p: { xs: 3, md: 6 },
                borderRadius: 4,
                bgcolor: "white",
                boxShadow: "0 20px 50px rgba(13, 36, 77, 0.08)",
                border: "1px solid rgba(13, 36, 77, 0.05)",
              }}
            >
              <Grid container spacing={4}>
                {/* Name Section */}
                <Grid size={{ xs: 12 }}>
                  <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: 700, mb: 1.5, color: "text.primary" }}
                  >
                    Full Name <span style={{ color: "#E53E3E" }}>*</span>
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid size={{ xs: 12, sm: 4 }}>
                      <TextField
                        fullWidth
                        placeholder="First Name *"
                        required
                        sx={inputStyles}
                        value={formData.firstName}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            firstName: e.target.value,
                          })
                        }
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 4 }}>
                      <TextField
                        fullWidth
                        placeholder="Middle Name"
                        sx={inputStyles}
                        value={formData.middleName}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            middleName: e.target.value,
                          })
                        }
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 4 }}>
                      <TextField
                        fullWidth
                        placeholder="Last Name *"
                        required
                        sx={inputStyles}
                        value={formData.lastName}
                        onChange={(e) =>
                          setFormData({ ...formData, lastName: e.target.value })
                        }
                      />
                    </Grid>
                  </Grid>
                </Grid>

                {/* Country and Hub Section */}
                <Grid container spacing={4} size={{ xs: 12 }}>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <Typography
                      variant="subtitle1"
                      sx={{ fontWeight: 700, mb: 1.5, color: "text.primary" }}
                    >
                      Select Country <span style={{ color: "#E53E3E" }}>*</span>
                    </Typography>
                    <TextField
                      fullWidth
                      select
                      required
                      sx={inputStyles}
                      value={formData.country}
                      onChange={(e) =>
                        setFormData({ ...formData, country: e.target.value })
                      }
                    >
                      {countries.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>

                  <Grid size={{ xs: 12, md: 6 }}>
                    <Typography
                      variant="subtitle1"
                      sx={{ fontWeight: 700, mb: 1.5, color: "text.primary" }}
                    >
                      Select Hub <span style={{ color: "#E53E3E" }}>*</span>
                    </Typography>
                    <TextField
                      fullWidth
                      select
                      required
                      disabled={hubs?.length === 0}
                      sx={inputStyles}
                      value={formData.hub}
                      onChange={(e) =>
                        setFormData({ ...formData, hub: e.target.value })
                      }
                    >
                      {hubs.map((hub) => (
                        <MenuItem key={hub._id} value={hub._id}>
                          {hub.locationName}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                </Grid>

                {/* City and Address Section */}
                <Grid container spacing={4} size={{ xs: 12 }}>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <Typography
                      variant="subtitle1"
                      sx={{ fontWeight: 700, mb: 1.5, color: "text.primary" }}
                    >
                      City Name <span style={{ color: "#E53E3E" }}>*</span>
                    </Typography>
                    <TextField
                      fullWidth
                      placeholder="Type City Name"
                      required
                      sx={inputStyles}
                      value={formData.cityName}
                      onChange={(e) =>
                        setFormData({ ...formData, cityName: e.target.value })
                      }
                    />
                  </Grid>

                  <Grid size={{ xs: 12, md: 6 }}>
                    <Typography
                      variant="subtitle1"
                      sx={{ fontWeight: 700, mb: 1.5, color: "text.primary" }}
                    >
                      Home Address <span style={{ color: "#E53E3E" }}>*</span>
                    </Typography>
                    <TextField
                      fullWidth
                      placeholder="Type Home Address"
                      required
                      sx={inputStyles}
                      value={formData.homeAddress}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          homeAddress: e.target.value,
                        })
                      }
                    />
                  </Grid>
                </Grid>

                {/* Contact Information Section */}
                <Grid container spacing={4} size={{ xs: 12 }}>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <Typography
                      variant="subtitle1"
                      sx={{ fontWeight: 700, mb: 1.5, color: "text.primary" }}
                    >
                      WhatsApp Phone Number{" "}
                      <span style={{ color: "#E53E3E" }}>*</span>
                    </Typography>
                    <TextField
                      fullWidth
                      placeholder="Country Code + Number"
                      required
                      sx={inputStyles}
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                    />
                  </Grid>

                  <Grid size={{ xs: 12, md: 6 }}>
                    <Typography
                      variant="subtitle1"
                      sx={{ fontWeight: 700, mb: 1.5, color: "text.primary" }}
                    >
                      Your Email Address{" "}
                      <span style={{ color: "#E53E3E" }}>*</span>
                    </Typography>
                    <TextField
                      fullWidth
                      placeholder="Type Your Email Address"
                      required
                      type="email"
                      sx={inputStyles}
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <EmailIcon sx={{ color: "#4FD1C5" }} />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                </Grid>

                {/* Product Type Requested */}
                <Grid size={{ xs: 12 }}>
                  <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: 700, mb: 1.5, color: "text.primary" }}
                  >
                    Type of Product Requested{" "}
                    <span style={{ color: "#E53E3E" }}>*</span>
                  </Typography>
                  <TextField
                    fullWidth
                    select
                    required
                    sx={inputStyles}
                    value={formData.productType}
                    onChange={(e) =>
                      setFormData({ ...formData, productType: e.target.value })
                    }
                  >
                    {productTypes.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>

                {/* Purpose of Goods Section */}
                <Grid size={{ xs: 12 }}>
                  <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: 700, mb: 1.5, color: "text.primary" }}
                  >
                    Describe in detail the Purpose of the Asset of Goods{" "}
                    <span style={{ color: "#E53E3E" }}>*</span>
                  </Typography>
                  <TextField
                    fullWidth
                    multiline
                    rows={6}
                    required
                    sx={inputStyles}
                    value={formData.purpose}
                    onChange={(e) =>
                      setFormData({ ...formData, purpose: e.target.value })
                    }
                  />
                </Grid>

                {/* Confirmation Section */}
                <Grid size={{ xs: 12 }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        required
                        checked={formData.confirmed}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            confirmed: e.target.checked,
                          })
                        }
                        sx={{
                          color: "#CBD5E0",
                          "&.Mui-checked": {
                            color: "primary.main",
                          },
                        }}
                      />
                    }
                    label={
                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary", fontWeight: 500 }}
                      >
                        I confirm that the information provided is accurate and
                        agree to be contacted by TND Kapital
                      </Typography>
                    }
                  />
                </Grid>

                {/* Submit button with micro-animation */}
                <Grid size={{ xs: 12 }}>
                  <Button
                    type="submit"
                    variant="contained"
                    disabled={loading}
                    sx={{
                      bgcolor: "primary.main",
                      color: "white",
                      py: 2,
                      px: 8,
                      fontSize: "1.1rem",
                      fontWeight: 700,
                      borderRadius: 2,
                      transition:
                        "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                      "&:hover": {
                        bgcolor: "primary.dark",
                        transform: "translateY(-4px)",
                        boxShadow: "0 10px 25px rgba(13, 36, 77, 0.25)",
                      },
                      "&:disabled": {
                        bgcolor: "grey.400",
                      },
                      mt: 2,
                    }}
                  >
                    {loading
                      ? "Submitting Application..."
                      : "Submit Application"}
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </ScrollReveal>
        </Container>
      </main>
    </Box>
  );
};

export default ApplyNow;

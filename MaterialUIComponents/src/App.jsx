import { useState } from "react";
import {
  Container,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Box,
  Divider
} from "@mui/material";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Box width="100%">
        {/* FORM CARD */}
        <Card
          elevation={6}
          sx={{
            borderRadius: 4,
            mb: 3
          }}
        >
          <CardContent>
            <Typography variant="h5" align="center" gutterBottom>
              Material UI Form
            </Typography>

            <Typography
              variant="body2"
              align="center"
              color="text.secondary"
              sx={{ mb: 3 }}
            >
            </Typography>

            <Box
              component="form"
              onSubmit={handleSubmit}
              display="flex"
              flexDirection="column"
              gap={2}
            >
              <TextField
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                fullWidth
                required
              />

              <TextField
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                fullWidth
                required
              />

              <TextField
                label="Password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                fullWidth
                required
              />

              <Button
                type="submit"
                variant="contained"
                size="large"
                sx={{ borderRadius: 3 }}
              >
                Submit
              </Button>
            </Box>
          </CardContent>
        </Card>

        {/* SUBMITTED DATA CARD */}
        {submittedData && (
          <Card
            elevation={4}
            sx={{
              borderRadius: 4
            }}
          >
            <CardContent>
              <Typography variant="h6" gutterBottom align="center">
                Submitted Information
              </Typography>

              <Divider sx={{ mb: 2 }} />

              <Typography><b>Name:</b> {submittedData.name}</Typography>
              <Typography><b>Email:</b> {submittedData.email}</Typography>
              <Typography><b>Password:</b> {submittedData.password}</Typography>
            </CardContent>
          </Card>
        )}
      </Box>
    </Container>
  );
}

export default App;

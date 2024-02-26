import React, { useState } from "react";
import {
  TextField,
  Button,
  Grid,
  ButtonBase,
  IconButton,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Typography,
} from "@mui/material";
import { Close } from "@mui/icons-material";

//firebase
import storage from "../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    authType: "User",
    firstName: "",
    lastName: "",
    image: null,
    email: "",
    phone: "",
    password: "",
  });
  const [imagePreview, setImagePreview] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [image, setImage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
    const imageUrl = URL.createObjectURL(file);
    setImagePreview(imageUrl);
  };

  const handleRemoveImage = () => {
    setImagePreview(null);
    resetFileInput(); // Add this line to reset the file input
  };

  const resetFileInput = () => {
    const fileInput = document.getElementById("image-upload");
    if (fileInput) {
      fileInput.value = ""; // Clear the selected file
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  const handleUploadImage = async () => {
    try {
      if (!image) {
        alert("Please select an image");
        return;
      }
      // Create a reference to the storage location
      const storageRef = ref(storage, `images/${image.name}`);

      // Upload image file to Firebase Storage
      const snapshot = await uploadBytes(storageRef, image);

      // Get the download URL for the uploaded image
      const downloadURL = await getDownloadURL(snapshot.ref);

      // Now you can use downloadURL to display the image or store it in your database
      console.log("Image uploaded successfully. Download URL:", downloadURL);
    //   setImageUrl(downloadURL);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <div style={{ position: "relative" }}>
              {imagePreview && (
                <IconButton
                  sx={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    color: "black",
                    zIndex: 1, // Ensure the close button is above the image
                  }}
                  onClick={handleRemoveImage}
                >
                  <Close />
                </IconButton>
              )}
              <label
                htmlFor="image-upload"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <ButtonBase component="span" sx={{ width: 128, height: 128 }}>
                  {imagePreview ? (
                    <img
                      alt="complex"
                      src={imagePreview}
                      style={{ width: "100%", height: "100%" }}
                    />
                  ) : (
                    <span>Upload Image</span>
                  )}
                </ButtonBase>
              </label>
              <input
                id="image-upload"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                style={{ display: "none" }}
              />
            </div>

            {imagePreview && (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Button onClick={handleUploadImage} variant="contained">
                  Upload
                </Button>
              </div>
            )}
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl fullWidth sx={{ marginBottom: 2 }}>
              <InputLabel>Authentication Type</InputLabel>
              <Select
                name="authType"
                value={formData.authType}
                onChange={handleChange}
              >
                <MenuItem value="Admin">Admin</MenuItem>
                <MenuItem value="User">User</MenuItem>
                <MenuItem value="Emp">Employee</MenuItem>
              </Select>
            </FormControl>

            <TextField
              name="firstName"
              label="First Name"
              value={formData.firstName}
              onChange={handleChange}
              fullWidth
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              name="lastName"
              label="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              fullWidth
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              name="email"
              type="email"
              label="Email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              name="phone"
              type="tel"
              label="Phone"
              value={formData.phone}
              onChange={handleChange}
              fullWidth
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              name="password"
              type="password"
              label="Password"
              value={formData.password}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Register
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};
export default RegistrationForm;

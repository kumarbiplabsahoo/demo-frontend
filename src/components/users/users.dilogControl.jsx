import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import ProfileDilog from "./profile.dilog";
import LogoutDilog from "./logout.dilog";

const UsersModal = (props) => {
  const { dialogName, openDialog, handleCloseDialog } = props;

  let dialogContent;

  switch (dialogName) {
    case "Profile":
      dialogContent = (
        <>
          <DialogTitle>Profile Dialog</DialogTitle>
          <DialogContent>
            <ProfileDilog />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog}>Close</Button>
          </DialogActions>
        </>
      );
      break;
    case "Logout":
      dialogContent = (
        <>
          <DialogTitle>Logout Dialog</DialogTitle>
          <DialogContent>
            <LogoutDilog />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog}>Close</Button>
          </DialogActions>
        </>
      );
      break;
    // Add more cases for other dialog names if needed

    default:
      dialogContent = null; // Default content if dialogName doesn't match any case
  }

  return (
    <Dialog open={openDialog} onClose={handleCloseDialog}>
      {dialogContent}
    </Dialog>
  );
};

export default UsersModal;

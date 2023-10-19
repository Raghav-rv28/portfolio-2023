import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import Typography from "@mui/material/Typography";
import React from "react";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";

type Props = {};

export default function ContactSection({}: Props) {
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState("Enter Message Here....");
  const [email, setEmail] = React.useState("");
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    //   SEND API REQUEST
    setOpen(false);
  };
  return (
    <div>
      <Box
        width="100%"
        display="flex"
        p="3rem"
        alignItems="center"
        justifyContent="center"
      >
        <Button onClick={handleOpen} sx={{ fontSize: 32 }}>
          CONTACT ME
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <DialogTitle>Send A Message</DialogTitle>
          <DialogContent>
            <FormControl>
              <TextField
                margin="dense"
                label="Email Address"
                type="email"
                value={email}
                required
                fullWidth
                variant="standard"
              />
              <TextField
                label="message"
                type="message"
                value={message}
                required
                fullWidth
                variant="filled"
              />
            </FormControl>
          </DialogContent>

          <DialogActions>
            <Button onClick={handleClose}>Close</Button>
            <Button onClick={handleSubmit}>Submit</Button>
          </DialogActions>
        </Dialog>
      </Box>
    </div>
  );
}

import React from "react";
import {
  Box,
  Dialog,
  Grid,
  TextField,
  DialogTitle,
  DialogContent,
  Chip,
  Button,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  Paper,
  DialogActions,
  TableBody,
  Typography,
  IconButton,
} from "@mui/material";
import { ToggleOnOutlined, CloseSharp } from "@mui/icons-material";
import { styled } from "@mui/system";
import { DatePicker, LocalizationProvider } from "@mui/lab";
import DateAdapter from "@mui/lab/AdapterDateFns";
import { bg } from "date-fns/locale";

const FeatureDialog = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <Grid
        border={"1px solid rgba(0, 0, 0, 0.1)"}
        width={"100%"}
        top={77}
        left={8}
      >
        <DialogTitle
          style={{
            color: "#283B54",
            fontSize: "normal",
            fontSize: 24,
            width: 91,
            left: 24,
            top: 24,
            fontWeight: 400,
          }}
        >
          Features
        </DialogTitle>
        <DialogContent>
          <Grid width={"100%"} >
            <div>
          <ToggleOnOutlined style={{marginRight:10,marginTop:10}}/>Plate To VIN (CBC)
            
            </div>
            <TextField
              style={{ marginTop: 10 ,marginBottom:10,marginRight:50 }}
              id="outlined-helperText"
              label="Standard Fee"
              value="$"
              helperText="Per Month"
            />
            <TextField
            style={{ marginTop: 10 ,marginBottom:10,marginRight:50 }}
              id="outlined-helperText"
              label="Standard Fee"
              value="$"
              helperText="Per Month"
            />
            <TextField
            style={{ marginTop: 10 ,marginBottom:10,marginRight:50 }}
              id="outlined-helperText"
              label="Standard Fee"
              value="$"
              helperText="Per Month"
            />
            <TextField
            style={{ marginTop: 10 ,marginBottom:10,marginRight:50 }}
              id="outlined-helperText"
              label="Override Fee"
              value="$"
              helperText="Per Month"
            />
            <TextField
            style={{ marginTop: 10 ,marginBottom:10,marginRight:50 }}
              id="outlined-helperText"
              label="Override Fee"
              value="$"
              helperText="Per Month"
            />
            <TextField
            style={{ marginTop: 10 ,marginBottom:10,marginRight:50 }}
              id="outlined-helperText"
              label="Override Fee"
              value="$"
              helperText="Per Month"
            />
          </Grid>
        </DialogContent>
      </Grid>
    </Dialog>
  );
};

export default FeatureDialog;

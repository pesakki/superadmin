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
} from "@mui/material";
import { Done } from "@mui/icons-material";
import { styled } from "@mui/system";
import { DatePicker, LocalizationProvider } from "@mui/lab";
import DateAdapter from "@mui/lab/AdapterDateFns";
import { bg } from "date-fns/locale";

const CountDialog = ({ open, onClose }) => {
  const data = [
    {
      name: " Plate To Vin",
      Provider: "CBC",
      standard_fee: "N/A",
      override_fee: "$400",
      count: "$40",
    },
    {
      name: "PreQual",
      Provider: "CBC",
      standard_fee: "$0",
      override_fee: "$120",
      count: "$15",
    },
    {
      name: "VehVals",
      Provider: "TraadePending",
      standard_fee: "$0",
      override_fee: "$0",
      count: "$0",
    },
  ];

 
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle
        border={"1px solid rgba(0, 0, 0, 0.1)"}
        fontSize={18}
        marginLeft={-1}
        marginTop={1}
        marginBottom={3}
        color={"#283B54"}
      >
        API Counts
      </DialogTitle>
      <DialogContent>
        <Grid
          boxSizing={"border-box"}
          
          top={101}
          left={24}
          right={5}
          height={300}
          width={"100%"}
          bgcolor={"#FFFFFF"}
          border={"1px solid rgba(0, 0, 0, 0.12)"}
          borderRadius={6}
        >
          <Grid container>
            <Grid item xs={6} sx={{ display: "flex", alignItems: "center" }}>
              <Box sx={{ display: "flex", alignItems: "center",border:"1px solid #DDDDDD" }}>
                <Chip
                  style={{
                    minWidth: "30%",
                    fontSize: 10,
                   
                    marginTop: 10,
                    backgroundColor: "white",
                    borderRadius: 0,
                    textOverflow: "none",
                  }}
                  label="Current Month"
                  
                />
                <Chip
                  style={{
                    minWidth: "30%",
                    fontSize: 10,
                    marginTop: 10,
                    backgroundColor: "white",
                    borderRadius: 0,
                    textOverflow: "none",
                  }}
                  label="Previous Month"
                />
              </Box>
            </Grid>
            
              <Grid item xs={12}>
                <LocalizationProvider dateAdapter={DateAdapter}>
                  <DatePicker
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    label="Start Date"
                    style={{ marginTop: "20px" }}
                    value={null}
                    onChange={() => {}}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </Grid>

             
              <TableContainer style={{ marginTop: 15, maxWidth: "100%", paddingRight: 7, width: "auto", overflowX: "auto" }}>
  <TableHead style={{ backgroundColor: "#283B54", color: "white", fontSize: 10, left: 10 }}>
    <TableRow style={{ paddingTop: 1, height: 4 }}>
      <TableCell style={{ fontSize: 10, color: "white", paddingRight: 15 }}> {/* Added paddingRight */}
        Feature Name
      </TableCell>
      <TableCell align="center" style={{ fontSize: 10, color: "white",paddingRight: 40,height:4 }}>
        Provider Name
      </TableCell>
      <TableCell align="center" style={{ fontSize: 10, color: "white",paddingRight: 40 }}>
        Standard Fee
      </TableCell>
      <TableCell align="center" style={{ fontSize: 10, color: "white" ,paddingRight: 30}}>
        Override Fee
      </TableCell>
      <TableCell align="center" style={{ fontSize: 10, color: "white" ,paddingRight: 30}}>
        API Count
      </TableCell>
    </TableRow>
  </TableHead>
  <TableBody style={{height:"100%"}}>
    {data.map((item, index) => (
      <TableRow key={index} style={{height:"0%"}}>
        <TableCell style={{ fontSize: 10, color: "#283B54", paddingRight: 10 }}> 
          {item.name}
        </TableCell>
        <TableCell align="center" style={{ fontSize: 10, color: "#283B54" }}>
          {item.Provider}
        </TableCell>
        <TableCell align="center" style={{ fontSize: 10, color: "#283B54" }}>
          {item.standard_fee}
        </TableCell>
        <TableCell align="center" style={{ fontSize: 10, color: "#283B54" }}>
          {item.override_fee}
        </TableCell>
        <TableCell align="center" style={{ fontSize: 10, color: "#283B54" }}>
          {item.count}
        </TableCell>
      </TableRow>
    ))}
  </TableBody>
</TableContainer>

               
          </Grid>
          
        </Grid>
      </DialogContent>
       <DialogActions style={{ justifyContent: "flex-end" ,border:"1px solid #DDDDDD "}}>
        <Button style={{border:"1px solid #0EBBF7" ,width:"20%" ,borderRadius:15 ,height:25,fontSize:10  }} onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CountDialog;

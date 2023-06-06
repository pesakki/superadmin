import React, { Fragment } from "react";
import {
  Box,
  Table,
  TableCell,
  Paper,
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
  Button,
} from "@mui/material";
import { styled } from "@mui/system";
import { CreateOutlined } from "@mui/icons-material";

const StyledTable = styled(Table)({
  boxSizing: "border-box",
  height: 50,
  width: "92%",
  position: "absolute",
  background: "#FFFFFF",
  border: "1px solid rgba(0, 0, 0, 0.12)",
  borderRadius: 6,
  left: 110,
  top: 205,
  paddingLeft: -12,
});

const StyledTableCell = styled(TableCell)({
  color: "white",
});

const StyledButton = styled(Button)({
  position: "absolute",
  top: "calc(66.5% - 40px/2 - 368px)",
 left: "calc(53.5% - 200px/2 + 621px)",
 background:"#0EBBF7",
 borderRadius:"100px",
 padding:"10px 24px",
 gap:10,
 height:40,
 color:"white"


 
});

function Dashboard() {
  const dummyData = [
    {
      dealerId: 1,
      dealerName: "forzo Labs",
      dealerEmail: "admin@forzo.com",
      dealerPhone: "(401)255-2555",
      dealerState: "MI",
      dealerNotes: "Notes about dealership",
    },
    {
      dealerId: 2,
      dealerName: "Jones Toyota",
      dealerEmail: "admin@jones.com",
      dealerPhone: "(401)255-5555",
      dealerState: "MD",
      dealerNotes: "Notes about dealership",
    },
    {
      dealerId: 3,
      dealerName: "Mark Mazda",
      dealerEmail: "mark@mazda.com",
      dealerPhone: "(401)255-5555",
      dealerState: "NY",
      dealerNotes: "Notes about dealership",
    },
  ];

  return (
    <Fragment>
      <StyledButton style={{justifyContent:"flex-end", }}>Add Dealership</StyledButton>
      <Box
        boxSizing={"border-box"}
        width={"100%"}
        height={604}
        border={"1px solid rgba(0, 0, 0, 0.12)"}
        borderRadius={4}
        overflow="auto"
      >
        <TableContainer component={Paper}>
          <StyledTable aria-label="customized table">
            <TableHead style={{ backgroundColor: "#283B54" }}>
              <TableRow style={{ color: "white" ,height:5}}>
                <StyledTableCell align="center">Name</StyledTableCell>
                <StyledTableCell align="center">Email</StyledTableCell>
                <StyledTableCell align="center">Phone</StyledTableCell>
                <StyledTableCell align="center">State</StyledTableCell>
                <StyledTableCell align="center">Notes</StyledTableCell>
                <StyledTableCell align="center"></StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {dummyData.map((data) => (
                <TableRow key={data.dealerId}>
                  <TableCell
                    align="center"
                    style={{ color: "#0EBBF7" }}
                    onClick={() => {}}
                  >
                    {data.dealerName}
                  </TableCell>
                  <TableCell align="center">{data.dealerEmail}</TableCell>
                  <TableCell align="center">{data.dealerPhone}</TableCell>
                  <TableCell align="center">{data.dealerState}</TableCell>
                  <TableCell align="center">{data.dealerNotes}</TableCell>
                  <TableCell align="center">
                    <CreateOutlined style={{ color: "#0EBBF7" }} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </StyledTable>
        </TableContainer>
      </Box>
    </Fragment>
  );
}

export default Dashboard;

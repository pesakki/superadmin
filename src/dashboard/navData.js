import React from "react";
import { styled, Box, IconButton } from "@mui/material";
import {
  Home,
  ViewCozyOutlined,
  AccountTreeOutlined,
  GridViewOutlined,
} from "@mui/icons-material";

const IconContainer = styled("div")({
 
  margin: "20px",
});

const DensityIconButton = styled(IconButton)({
  color: "#283B54",
  fontSize: "38px",
  
});

const RotateIcon = styled(ViewCozyOutlined)({
  transform: "rotate(90deg)",
});

const NavBar = styled("div")({
  position: "absolute",
  width: 88,
  height: "89.6%", 

  justifySelf: "center",
  background: "#FFFFFF",
  boxShadow:
    "0px 0px 2px rgba(0, 0, 0, 0.2), 0px 0px 24px -4px rgba(145, 158, 171, 0.12)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

const IconBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  "& > *": {
    margin: "15px",
  },
});

function NavBarComponent() {
  return (
    <NavBar>
      <IconBox>
        <IconContainer>
          <DensityIconButton>
            <Home />
          </DensityIconButton>
        </IconContainer>
        <IconContainer>
          <DensityIconButton>
            <RotateIcon />
          </DensityIconButton>
        </IconContainer>
        <IconContainer>
          <DensityIconButton>
            <AccountTreeOutlined />
          </DensityIconButton>
        </IconContainer>
        <IconContainer>
          <DensityIconButton>
            <GridViewOutlined />
          </DensityIconButton>
        </IconContainer>
      </IconBox>
    </NavBar>
  );
}

export default NavBarComponent;

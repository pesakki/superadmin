import React from "react";
import { Box, IconButton } from "@mui/material";
import { DensityMediumOutlined } from "@mui/icons-material";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import { type } from "@testing-library/user-event/dist/type";

function Home1() {
  return (
    <div>
      <Box>
        <div style={{ backgroundColor: "#283B54", padding: 17 }}>
          <Box
            margin={"auto"}
            display={"flex"}
            flexDirection={"row"}
            color={"white"}
            justifyContent="space-between"
            alignItems="center"
            flexWrap="wrap"
          >
            <IconButton>
              <DensityMediumOutlined
                style={{
                  color: "#FFFFFF",
                  fontSize: 25,
                }}
              />
            </IconButton>
            <span
              style={{
                marginLeft: 20,
                marginBottom: 5,
                marginTop: 0,
                fontSize: 25,
              }}
            >
              Dashboard
            </span>
            <IconButton
              sx={{
                marginLeft: "auto", // Added to push the icon to the right
              }}
            >
              <PowerSettingsNewIcon style={{ color: "white" }} />
            </IconButton>
          </Box>
        </div>
        <div
          style={{
            justifyContent: "space-between",
            position: "absolute",
            width: "93%",

            border: "1px solid #DDDDDD",

            backgroundColor: "white",
            padding: 50,
            boxShadow: 55,
          }}
        >
          <Box
            margin={"auto"}
            marginRight={70}
            position={"absolute"}
            width={250}
            left={110}
            fontWeight={"normal"}
            display={"inline-flex"}
            flexDirection={"column"}
            color={"#283B54"}
            alignItems="center"
          >
            <span
              style={{
                marginLeft: -130,
                marginBottom: 5,
                marginTop: -25,
                fontSize: 29,
              }}
            >
              Dealership
            </span>
            <div>
              <p
                style={{
                  marginLeft: -120,
                  marginTop: -2.5,
                  fontSize: 12,
                  color: "#283B54",
                  
                }}
              >
                
                Dashboard 
                <ul style={{marginTop:-15 ,marginLeft:44,color: "#283B54"}}>
                  <li>Dealership</li>
                </ul>
              </p>
            </div>
          </Box>
        </div>
      </Box>
    </div>
  );
}

export default Home1;

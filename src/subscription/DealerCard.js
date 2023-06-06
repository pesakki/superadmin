import React, { Fragment, useRef, useState, useEffect, useLayoutEffect } from "react";
import {
  Box,
  Card,
  Grid,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import CountDialog from "./CountDialog";
import FeatureDialog from "./FeatureDialog";
const useDimensions = (targetRef) => {
  const getDimensions = () => {
    return {
      width: window.innerWidth,
    };
  };

  const [dimensions, setDimensions] = useState(getDimensions);

  const handleResize = () => {
    setDimensions(getDimensions());
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useLayoutEffect(() => {
    handleResize();
  }, []);

  return dimensions;
};

const Cards = (props) => {
  const [featureopen, setFeatureOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  function featureClose() {
    setFeatureOpen(false);
  }

  const featureOpenHandler = () => {
    setFeatureOpen(true);
  };

  const targetRef = useRef();
  const size = useDimensions(targetRef);

  const tableData = [
    { Group: "Ford - MI", State: "MI", Email: "mic@gmail.com" },
  ];

  let letter = "FO";
  return (
    <Fragment>
      <Card
        style={{
          marginTop: 40,
          width: "100%",
          maxWidth: 660,
          height: "auto",
          background: "#FFFFFF",
          boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.2), 0px 12px 24px -4px rgba(145, 158, 171, 0.12)",
        }}
      >
        <CardContent style={{ paddingBottom: "100px", margin: "3px" }}>
          <Grid container spacing={1}>
            <Grid item xs={4}>
              <Box
                justifyContent="center"
                marginTop={2}
                bgcolor="aliceblue"
                opacity={0.08}
                padding={8}
                borderRadius={5}
                style={{
                  height: 20,
                  width: 20,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Typography
                  variant="h2"
                  color="black"
                  fontFamily="Product Sans"
                  fontWeight={400}
                  fontSize={7}
                  fontStyle="normal"
                  lineHeight={1}
                  textAlign="center"
                  style={{ fontSize: 35, paddingRight: 10, fontWeight: "normal" }}
                >
                  {letter}
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={8}>
              <Grid container spacing={1}>
                {tableData.map((row, index) => (
                  <Fragment key={index}>
                    <Grid item xs={12}>
                      <Typography
                        variant="body1"
                        component="div"
                        noWrap
                        fontSize={20}
                        fontStyle={"bold"}
                        letterSpacing={0}
                        textAlign="center"
                        style={{ fontStyle: "normal", color: "#283B54", textAlign: "left", marginTop: 5 }}
                      >
                        Group: {row.Group}
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography
                        variant="body1"
                        noWrap
                        component="div"
                        fontSize={20}
                        fontStyle={400}
                        letterSpacing={0}
                        textAlign="center"
                        style={{ color: "#283B54", textAlign: "left" }}
                      >
                        State: {row.State}
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography
                        variant="body1"
                        noWrap
                        component="div"
                        fontSize={20}
                        fontStyle={400}
                        letterSpacing={0}
                        textAlign="center"
                        style={{ color: "#283B54", textAlign: "left" }}
                      >
                        Email: {row.Email}
                      </Typography>
                    </Grid>
                  </Fragment>
                ))}
              </Grid>
            </Grid>
          </Grid>
          <Grid container style={{ marginBottom: "-50px", marginTop: "-32px" }} justifyContent="flex-end">
            <FeatureDialog open={featureopen} onClose={featureClose}/>
            <Box mr={9} mb={2} style={{ boxShadow: "none" }}>
              <Button
                onClick={featureOpenHandler}
                style={{
                  marginRight: 30,
                  backgroundColor: "#e0e0e0",
                  color: "#212a38",
                  textTransform: "none",
                  borderRadius: 30,
                  width: "100%",
                  maxWidth: 180,
                  height: 30,
                }}
              >
                View Features
              </Button>
            </Box>
            <CountDialog open={dialogOpen} onclose={handleDialogClose} />
            <Box mr={2} mb={2}>
              <Button
                onClick={handleDialogOpen}
                color="primary"
                style={{
                  marginRight: 30,
                  textTransform: "none",
                  backgroundColor: "#0EBBF7",
                  color: "white",
                  borderRadius: 30,
                  width: "100%",
                  maxWidth: 180,
                  height: 30,
                }}
              >
                API Counts
              </Button>
            </Box>
          </Grid>
        </CardContent>
      </Card>
    </Fragment>
  );
};

function DealerCards() {
  return (
    <>
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
    </>
  );
}

export default DealerCards;

import { React, Fragment } from "react";
import { Box, Typography, Grid } from "@mui/material";
import DataList from "./DataList";
import DealerCards from "./DealerCard";
const MainComponent = (props) => {
  let title, dataList, dealerCards, datadealer;

  title = (
    <Typography
      variant="h6"
   
      fontWeight={"normal"}
      fontSize={30}
      color={"#283B54"}
    >
      Dealer Search
    </Typography>
  );
  dataList = <DataList />;
  dealerCards = <DealerCards />;

  return (
    <div style={{ marginLeft: 110, marginTop: 150, textJustify: "auto" }}>
      <Fragment>
        {title}
        <Box mb={2}>
          <Grid container spacing={2}>
            {dataList}
          </Grid>
        </Box>
        <Grid container spacing={2}>
          {dealerCards}
        </Grid>
      </Fragment>
      
    </div>
  );
};
export default MainComponent;

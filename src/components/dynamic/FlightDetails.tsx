/**
 * Title: FlightDetails
 * Description:
 * Filename: FlightDetails.tsx
 * Path: /src/components/FlightDetails.tsx
 * Author: Mrh Rifat (Programmer)
 * Date: Jul 16, 2023
 *
 */

import Grid from "@mui/material/Grid";
import { BoeingInfo, FlightInfo, Info } from ".";
import { FC } from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { connectingFlight, kwi, kwiTimes } from "../../utils/data";
import { FlightDetailsType } from "../../utils/types";

const FlightDetails: FC<FlightDetailsType> = ({ destination, times }) => {
  // Render Boeing Info
  const renderBoingInfo = (
    <Grid item md={3} sm={12}>
      <BoeingInfo fontSize={16} />
      <Info
        texts={{ first: "Operated By: BG", last: "Economy: G" }}
        direction={"column"}
        variant={"body2"}
      />
    </Grid>
  );

  // Render Connecting Flight
  const renderConnectingFlight = (
    <Grid item md={3} sm={12}>
      <FlightInfo destination={kwi} times={kwiTimes.to} ab_variant={"h4"} />
    </Grid>
  );

  // Render From Flight
  const renderFromFlight = (
    <Grid item md={3} sm={12}>
      <FlightInfo
        destination={destination.from}
        times={times.from}
        ab_variant={"h4"}
      />
    </Grid>
  );

  // Render To Flight
  const renderToFlight = (
    <Grid item md={3} sm={12}>
      <FlightInfo
        destination={destination.to}
        times={times.to}
        ab_variant={"h4"}
      />
    </Grid>
  );

  // Render Arrow
  const renderArrow = (
    <Grid item md={3} sm={12} textAlign={"center"} alignSelf={"center"}>
      <ArrowRightAltIcon sx={{ fontSize: 75 }} />
    </Grid>
  );

  return (
    <>
      <Grid container my={2}>
        {renderBoingInfo}
        {renderFromFlight}
        {renderArrow}
        {connectingFlight === true ? renderConnectingFlight : renderToFlight}
      </Grid>

      <Grid container my={2}>
        {connectingFlight === true ? renderBoingInfo : <></>}
        {connectingFlight === true ? renderConnectingFlight : <></>}
        {connectingFlight === true ? renderArrow : <></>}
        {connectingFlight === true ? renderToFlight : <></>}
      </Grid>
    </>
  );
};

export default FlightDetails;

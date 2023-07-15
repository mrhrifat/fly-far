/**
 * Title: ToogleFlight
 * Description:
 * Filename: ToogleFlight.tsx
 * Path: /src/components/ToogleFlight.tsx
 * Author: Mrh Rifat (Programmer)
 * Date: Jul 16, 2023
 *
 */

import Grid from "@mui/material/Grid";
import CustomToogle from "./dynamic/CustomToogle";
import { FC } from "react";
import { Info, FlightInfo } from "./dynamic";
import { Boeing } from "./";
import { ToogleFlightInterface } from "../utils/interfaces";
import { chooseFlight } from "../utils/theme";

const ToogleFlight: FC<ToogleFlightInterface> = ({
  destination,
  times,
  value,
  handleToogle,
}) => {
  // Render From Flight
  const renderFromFlight = (
    <>
      <FlightInfo
        destination={destination.from}
        times={times.from}
        alignItems={"first"}
        ab_variant={"h3"}
      />
      <Info
        direction="row"
        texts={{ first: "Refundable", last: "Class- W" }}
        variant={"subtitle1"}
        justifyContent="space-between"
      />
    </>
  );

  // Render To Flight
  const renderToFlight = (
    <>
      <FlightInfo
        destination={destination.to}
        times={times.to}
        alignItems={"end"}
        ab_variant={"h3"}
      />
      <Info
        direction="row"
        texts={{ first: "Baggage: 45 KG" }}
        variant={"subtitle1"}
        justifyContent={"end"}
      />
    </>
  );

  // Render Custom Toogle
  const renderCustomToogle = (
    <CustomToogle value={value} handleToogle={handleToogle} />
  );

  return (
    <Grid container>
      <Grid item md={3} sm={12} xs={12} p={2} sx={chooseFlight}>
        <Boeing />
      </Grid>

      <Grid item md={3.5} sm={5} xs={12} p={2}>
        {renderFromFlight}
      </Grid>

      <Grid
        item
        md={2}
        sm={2}
        xs={12}
        p={2}
        alignSelf={"center"}
        textAlign={"center"}
      >
        {renderCustomToogle}
      </Grid>

      <Grid item md={3.5} sm={5} xs={12} p={2}>
        {renderToFlight}
      </Grid>
    </Grid>
  );
};
export default ToogleFlight;

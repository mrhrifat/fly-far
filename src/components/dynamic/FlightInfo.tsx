/**
 * Title: FlightInfo
 * Description:
 * Filename: FlightInfo.tsx
 * Path: /src/components/dynamic/FlightInfo.tsx
 * Author: Mrh Rifat (Programmer)
 * Date: Jul 16, 2023
 *
 */

import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { FC } from "react";
import { FlightInfoType } from "../../utils/types";

const FlightInfo: FC<FlightInfoType> = ({
  destination,
  times,
  alignItems,
  ab_variant,
}) => {
  return (
    <Stack alignItems={alignItems} direction={"column"} pb={4}>
      <Typography variant={ab_variant}>{destination.ab_name}</Typography>
      <Typography variant="body1">{destination.airport}</Typography>
      <Typography variant="h6" color={(theme) => theme.palette.primary.main}>
        {times.time}
      </Typography>
      <Typography variant="subtitle2">{times.date.toUpperCase()}</Typography>
    </Stack>
  );
};

export default FlightInfo;

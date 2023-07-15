/**
 * Title: BookFlight
 * Description:
 * Filename: BookFlight.tsx
 * Path: /src/components/BookFlight.tsx
 * Author: Mrh Rifat (Programmer)
 * Date: Jul 16, 2023
 *
 */

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { FC } from "react";
import { BookFlightType } from "../utils/types";

const BookFlight: FC<BookFlightType> = ({ handlgeShowTab, showTab }) => {
  return (
    <Stack direction={"column"} spacing={3} alignItems={"center"} pt={2}>
      <Typography variant="h3">8,400</Typography>
      <Button variant="contained" sx={{ borderRadius: 25, color: "#FFF" }}>
        Book Now
      </Button>
      <Button variant="text" onClick={handlgeShowTab}>
        {showTab === true ? "Hide Details" : "Flight Details"}
      </Button>
    </Stack>
  );
};

export default BookFlight;

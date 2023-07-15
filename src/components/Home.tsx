/**
 * Title: Home
 * Description:
 * Filename: Home.tsx
 * Path: /src/components/Home.tsx
 * Author: Mrh Rifat (Programmer)
 * Date: Jul 16, 2023
 *
 */

import Grid from "@mui/material/Grid";
import { BookFlight, ChooseFlight } from "./";
import { useState } from "react";
import { bookFlight, chooseFlight } from "../utils/theme";

const Home = () => {
  const [showTab, setShowTab] = useState<false | true>(false);

  const handlgeShowTab = () => {
    showTab === false ? setShowTab(true) : setShowTab(false);
  };

  return (
    <Grid container my={10}>
      <Grid item xs={12} sm={12} md={10} p={2} sx={chooseFlight}>
        <ChooseFlight showTab={showTab} />
      </Grid>

      <Grid item xs={12} sm={12} md={2} p={2} sx={bookFlight}>
        <BookFlight handlgeShowTab={handlgeShowTab} showTab={showTab} />
      </Grid>
    </Grid>
  );
};

export default Home;

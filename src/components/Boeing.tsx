/**
 * Title: Boeing
 * Description:
 * Filename: Boeing.tsx
 * Path: /src/components/Boeing.tsx
 * Author: Mrh Rifat (Programmer)
 * Date: Jul 16, 2023
 *
 */

import Slider from "@mui/material/Slider";
import { marks } from "../utils/data";
import { BoeingInfo } from "./dynamic";

const Boeing = () => {
  return (
    <div>
      <BoeingInfo />

      <div style={{ position: "relative", width: "88%", marginTop: "18px" }}>
        <Slider
          track="inverted"
          disableSwap
          disabled
          defaultValue={[40, 60]}
          marks={marks}
          sx={{
            padding: 0,

            "& .MuiSlider-thumb": {
              height: 0,
              width: 0,
            },
            "& .MuiSlider-mark": {
              backgroundColor: "#bfbfbf",
              height: 15,
              width: 15,
              borderRadius: 25,
            },
          }}
        />
      </div>
    </div>
  );
};

export default Boeing;

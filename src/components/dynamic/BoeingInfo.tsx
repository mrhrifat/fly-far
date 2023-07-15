/**
 * Title: BoeingInfo
 * Description:
 * Filename: BoeingInfo.tsx
 * Path: /src/components/dynamic/BoeingInfo.tsx
 * Author: Mrh Rifat (Programmer)
 * Date: Jul 16, 2023
 *
 */

import Typography from "@mui/material/Typography";
import { airline } from "../../utils/data";
import { FC } from "react";
import { BoeingInfoType } from "../../utils/types";

const BoeingInfo: FC<BoeingInfoType> = ({ fontSize }) => {
  return (
    <div>
      <img src={airline.logo} />
      <Typography variant="h6" fontSize={fontSize}>
        {airline.name}
      </Typography>
      <Typography
        variant="subtitle2"
        color={(theme) => theme.palette.primary.main}
      >
        {`${airline.coach} | ${airline.boeing}`}
      </Typography>
    </div>
  );
};

export default BoeingInfo;

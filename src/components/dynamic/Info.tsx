/**
 * Title: Info
 * Description:
 * Filename: Info.tsx
 * Path: /src/components/dynamic/Info.tsx
 * Author: Mrh Rifat (Programmer)
 * Date: Jul 16, 2023
 *
 */

import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { FC } from "react";
import { InfoType } from "../../utils/types";

const Info: FC<InfoType> = ({
  direction,
  variant,
  spacing,
  justifyContent,
  texts,
}) => {
  // Render Text First
  const renderTextFirst = (
    <Typography
      variant={variant}
      color={
        justifyContent === "space-between"
          ? (theme) => theme.palette.primary.main
          : "currentcolor"
      }
    >
      {texts.first}
    </Typography>
  );

  // Render Text Last
  const renderTextLast = (
    <Typography
      variant={variant}
      color={
        justifyContent === "space-between"
          ? (theme) => theme.palette.primary.main
          : "#444"
      }
    >
      {texts.last}
    </Typography>
  );

  return (
    <Stack
      direction={direction}
      spacing={spacing}
      justifyContent={justifyContent}
      mt={direction === "column" ? 1 : 0}
    >
      {renderTextFirst}
      {renderTextLast}
    </Stack>
  );
};

export default Info;

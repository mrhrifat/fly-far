/**
 * Title: CustomToogle
 * Description:
 * Filename: CustomToogle.tsx
 * Path: /src/components/dynamic/CustomToogle.tsx
 * Author: Mrh Rifat (Programmer)
 * Date: Jul 16, 2023
 *
 */

import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import FlightIcon from "@mui/icons-material/Flight";
import { FC } from "react";
import { styled } from "@mui/material";
import { CustomToogleInterface } from "../../utils/interfaces";

// Create Styled Toogle Button
const StyledToogleButton = styled(ToggleButton)(() => ({
  border: "none ",
  padding: 0,

  "& .MuiSvgIcon-root": {
    width: "4rem",
    height: "4rem",
  },
  "&:not(:first-of-type)": {
    transform: "rotate(-90deg)",
  },
  "&:first-of-type": {
    transform: "rotate(90deg)",
  },
}));

const CustomToogle: FC<CustomToogleInterface> = ({ value, handleToogle }) => {
  return (
    <ToggleButtonGroup
      value={value}
      exclusive
      orientation="vertical"
      size="large"
      onChange={handleToogle}
      aria-label="fight toggle"
    >
      <StyledToogleButton value="ltr" aria-label="ltr">
        <FlightIcon />
      </StyledToogleButton>
      <StyledToogleButton value="rtl" aria-label="rtl">
        <FlightIcon />
      </StyledToogleButton>
    </ToggleButtonGroup>
  );
};

export default CustomToogle;

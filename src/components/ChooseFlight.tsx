/**
 * Title: ChooseFlight
 * Description:
 * Filename: ChooseFlight.tsx
 * Path: /src/components/ChooseFlight.tsx
 * Author: Mrh Rifat (Programmer)
 * Date: Jul 16, 2023
 *
 */

import { FC, useReducer, useState } from "react";
import { dac, initialState, jfk, times } from "../utils/data";
import { CustomTabPanel, ToogleFlight } from "./";
import { ChooseFlightType, FlightInfoDataType } from "../utils/types";

// Reducer State for (RTL,LTR) & (FROM,TO) Handle
const reducer = (
  state: { from: FlightInfoDataType; to: FlightInfoDataType },
  action: { type: string | null }
) => {
  switch (action.type) {
    case "ltr":
      return { ...state, from: dac, to: jfk };
    case "rtl":
      return { ...state, from: jfk, to: dac };
    default:
      return state;
  }
};

const ChooseFlight: FC<ChooseFlightType> = ({ showTab }) => {
  const [value, setValue] = useState<string | null>("ltr");
  const [destination, dispatch] = useReducer(reducer, initialState);

  // Handle (RTL,LTR) & (FROM,TO)
  const handleToogle = (
    _event: React.MouseEvent<HTMLElement>,
    newValue: string | null
  ) => {
    setValue(newValue);
    dispatch({ type: newValue });
  };

  return (
    <div>
      <ToogleFlight
        destination={destination}
        times={times}
        value={value}
        handleToogle={handleToogle}
      />

      <div style={{ display: showTab === true ? "block" : "none" }}>
        <CustomTabPanel destination={destination} times={times} />
      </div>
    </div>
  );
};

export default ChooseFlight;

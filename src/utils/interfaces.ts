/**
 * Title: interfaces
 * Description:
 * Filename: interfaces.ts
 * Path: /src/utils/interfaces.ts
 * Author: Mrh Rifat (Programmer)
 * Date: Jul 16, 2023
 *
 */

import { DestinationType, TimesType } from "./types";

export interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
export interface ToogleFlightInterface {
  destination: DestinationType;
  times: TimesType;
  value: string | null;
  handleToogle: (
    _event: React.MouseEvent<HTMLElement>,
    newValue: string | null
  ) => void;
}
export interface CustomToogleInterface {
  value: string | null;
  handleToogle: (
    event: React.MouseEvent<HTMLElement>,
    newValue: string | null
  ) => void;
}

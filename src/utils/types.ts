/**
 * Title: types
 * Description:
 * Filename: types.ts
 * Path: /src/utils/types.ts
 * Author: Mrh Rifat (Programmer)
 * Date: Jul 16, 2023
 *
 */

import { SyntheticEvent } from "react";

export type InfoType = {
  direction: "row" | "row-reverse" | "column" | "column-reverse";
  variant: "subtitle1" | "subtitle2" | "body1" | "body2";
  spacing?: number;
  justifyContent?: "space-between" | "center" | "around" | "end";
  texts: {
    first: string;
    last?: string;
  };
};
export type DestinationType = {
  from: FlightInfoDataType;
  to: FlightInfoDataType;
};

export type TimesType = {
  from: FlightInfoTimesType;
  to: FlightInfoTimesType;
};
export type CustomTabPanelType = {
  destination: DestinationType;
  times: TimesType;
};
export type BookFlightType = {
  showTab: boolean;
  handlgeShowTab: () => void;
};
export type ChooseFlightType = {
  showTab: boolean;
};
export type BoeingInfoType = {
  fontSize?: number;
};
export type CustomTabType = {
  value: number;
  handleChange: (
    _event: SyntheticEvent<Element, Event>,
    newValue: number
  ) => void;
};
export type FlightInfoDataType = {
  ab_name: string;
  airport: string;
};

export type FlightInfoTimesType = {
  time: string;
  date: string;
};

export type FlightInfoType = {
  destination: FlightInfoDataType;
  times: FlightInfoTimesType;
  alignItems?: "first" | "end";
  ab_variant?: "h3" | "h4" | "h5";
};
export type FlightDetailsType = {
  destination: DestinationType;
  times: TimesType;
};

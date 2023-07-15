/**
 * Title: data
 * Description:
 * Filename: data.ts
 * Path: /src/utils/data.ts
 * Author: Mrh Rifat (Programmer)
 * Date: Jul 16, 2023
 *
 */

/*=============Data============*/
// Theme
export const theme = "LIGHT";

// Single
export const dac = {
  ab_name: "DAC",
  airport: "Hazrat Shajalal Int Airport",
};
export const jfk = {
  ab_name: "JFK",
  airport: "JF Kennedy Intl Airport",
};
export const kwi = {
  ab_name: "KWI",
  airport: "Kwuait International Airport",
};

// Airline Details
export const airline = {
  name: "Biman Bangladesh Airlines",
  boeing: "W & BG 671 | E",
  coach: "BG 178",
  logo: "/bba.png",
};

// Fare
export const fare = [
  {
    type: "adult",
    base_fare: 4090,
    tax: 275,
    pax_count: 1,
  },
  {
    type: "child",
    base_fare: 4090,
    tax: 275,
    pax_count: 1,
  },
  {
    type: "infant",
    base_fare: 4090,
    tax: 275,
    pax_count: 1,
  },
];

// Baggage
export const baggage = [
  {
    type: "adult",
    check_in: 20,
    cabin: "M",
  },
  {
    type: "child",
    check_in: 20,
    cabin: "M",
  },
  {
    type: "infant",
    check_in: 20,
    cabin: "M",
  },
];

// Range Marks
export const marks = [
  {
    value: 0,
  },
  {
    value: 40,
  },
  {
    value: 60,
  },
  {
    value: 100,
  },
];

// Tabs
export const tabs = [
  {
    id: 0,
    title: "Flight Details",
  },
  {
    id: 1,
    title: "Fare Summery",
  },
  {
    id: 2,
    title: "Fare Policy",
  },
  {
    id: 3,
    title: "Baggage",
  },
];

// Times
export const times = {
  from: {
    time: "19:05",
    date: "SUN 4th Jul 2022",
  },
  to: {
    time: "12:05",
    date: "MON 5th Jul 2022",
  },
};

export const kwiTimes = {
  from: {
    time: "5:00",
    date: "SUN 5th Jul 2022",
  },
  to: {
    time: "5:00",
    date: "SUN 5th Jul 2022",
  },
};

export const initialState = {
  from: dac,
  to: jfk,
};

// Connecting Flight
export const connectingFlight = true;

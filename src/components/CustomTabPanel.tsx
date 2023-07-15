/**
 * Title: CustomTabPanel
 * Description:
 * Filename: CustomTabPanel.tsx
 * Path: /src/components/CustomTabPanel.tsx
 * Author: Mrh Rifat (Programmer)
 * Date: Jul 16, 2023
 *
 */

import Box from "@mui/material/Box";
import { FC, useState } from "react";
import { CustomTab, FlightDetails } from "./dynamic";
import { TabPanelProps } from "../utils/interfaces";
import { CustomTabPanelType } from "../utils/types";

// Custom Tab Panel For Each Panel
const TabPanel = (props: TabPanelProps) => {
  const { children, value, index } = props;

  return (
    <div role="tabpanel" hidden={value !== index} style={{ margin: "10px 0" }}>
      {value === index && <Box sx={{ p: 2 }}>{children}</Box>}
    </div>
  );
};

const CustomTabPanel: FC<CustomTabPanelType> = ({ destination, times }) => {
  const [value, setValue] = useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box>
      <CustomTab value={value} handleChange={handleChange} />

      <TabPanel value={value} index={0}>
        <FlightDetails destination={destination} times={times} />
      </TabPanel>

      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>

      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>

      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
    </Box>
  );
};
export default CustomTabPanel;

/**
 * Title: CustomTab
 * Description:
 * Filename: CustomTab.tsx
 * Path: /src/components/dynamic/CustomTab.tsx
 * Author: Mrh Rifat (Programmer)
 * Date: Jul 16, 2023
 *
 */

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { tabs } from "../../utils/data";
import Box from "@mui/material/Box";
import { FC } from "react";
import { CustomTabType } from "../../utils/types";

const CustomTab: FC<CustomTabType> = ({ value, handleChange }) => {
  return (
    <Box>
      <Tabs
        value={value}
        onChange={handleChange}
        scrollButtons="auto"
        variant="scrollable"
        sx={{
          "& .MuiTabs-flexContainer": {
            justifyContent: "space-between",
            borderBottom: "none",
          },
          "& .MuiTabs-indicator": { display: "none" },
        }}
      >
        {tabs.map((tab) => (
          <Tab
            key={tab.id}
            label={tab.title}
            sx={{
              "&.Mui-selected": {
                backgroundColor: (theme) => theme.palette.primary.main,
                color: "#FFF",
                borderRadius: 2,
              },
            }}
          />
        ))}
      </Tabs>
    </Box>
  );
};

export default CustomTab;

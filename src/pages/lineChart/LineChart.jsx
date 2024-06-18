import { Box, useTheme } from "@mui/material";
import React from "react";
import { ResponsiveLine } from "@nivo/line";
import Header from "../../components/Header";
import Line from "./Line";

const LineChart = () => {
  const theme = useTheme();
  return (
    <Box>
      <Header title="Line Chart" subTitle="Simple Line Chart" />
      <Line />
    </Box>
  );
};

export default LineChart;
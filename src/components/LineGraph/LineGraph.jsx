import { ChartsGrid, ChartsTooltip, ChartsXAxis, ChartsYAxis, LinePlot, ResponsiveChartContainer } from "@mui/x-charts";
import React from "react";
import Button from "../Button/Button";
import ArrowDownSVG from "../../assets/arrowDown.svg";


const dataset = [
    { clicks: 0, ctr: -4, views: 9, day: "Sunday" },
    { clicks: 5, ctr: -3, views: 6, day: "Monday" },
    { clicks: 7, ctr: 2, views: 7, day: "Tuesday" },
    { clicks: 3, ctr: 9, views: 16, day: "Wednesday" },
    { clicks: 18, ctr: 17, views: 15, day: "Thursday" },
    { clicks: 5, ctr: 24, views: 4, day: "Friday" },
    { clicks: 28, ctr: 26, views: 16, day: "Saturday" },
  ];

  const series = [
    { type: "line", label: "Clicks", dataKey: "clicks", color: "#FF6422" },
    { type: "line", label: "Avg CTR", dataKey: "ctr", color: "#4A4DE6" },
    { type: "line", label: "Views", dataKey: "views", color: "#F0D961" },
  ];

  const LineGraph = (props) => {
    return (
      <div className="rounded-lg bg-white text-center my-3 lg:p-3">
        <div className="flex justify-between md:px-10 pt-1 graph-key">
          <div>
            <p className="font-medium font-semibold">Live Report</p>
            <p className="font-light">Past 7 days</p>
          </div>
          <div>
            <div className="color bg-[#F0D961]" />
            <p className="text-gray-500">Views</p>
            <p className="font-medium">{props.views}</p>
          </div>
          <div>
            <div className="color bg-[#4A4DE6]" />
            <p className="text-gray-500">Average CTR</p>
            <p className="font-medium">{props.ctr}%</p>
          </div>
          <div>
            <div className="color bg-[#FF6422]" />
            <p className="text-gray-500">Clicks</p>
            <p className="font-medium">{props.clicks}</p>
          </div>
        </div>
        <ResponsiveChartContainer
          className="chart"
          series={series}
          xAxis={[
            {
              scaleType: "band",
              dataKey: "day",
            },
          ]}
          dataset={props.graph || dataset}
          height={300}
        >
          <ChartsGrid horizontal />
          <LinePlot />
          <ChartsXAxis />
          <ChartsYAxis />
          <ChartsTooltip />
        </ResponsiveChartContainer>
      </div>
    );
  };
  

export default LineGraph;

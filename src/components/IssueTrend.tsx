import React, { useEffect, useState } from "react";
import { Bar, Line } from "react-chartjs-2";
import { Chart, ChartData, registerables, ScatterDataPoint } from "chart.js";
import { Card, CardContent, CardHeader, Grid, Skeleton } from "@mui/material";
import { GithubData, ListCommitsResponse } from "../types";
import { prepIssues } from "../util";

// Enables the chart on the page
Chart.register(...registerables);
// removes the grid from the background of charts
Chart.defaults.scale.grid.display = false;

// type for properties passed into component
type IssueTrendProps = {
  // props required to have data of type GitHubData which
  // consists of issues, commits, pulls, and releases
  data: GithubData;
};

// Defining functional component with destructured data props
const IssueTrend = ({ data }: IssueTrendProps) => {
  // destructuring issues from data props
  const { issues } = data;

  // useState is a hook for managing state within a component
  // chartConfig is the value, setChartConfig is a function to set the value
  // the useStates type is of ChartData props from ChartJS
  const [chartConfig, setChartConfig] = useState<
    // type for bar chart
    ChartData<"bar", (number | ScatterDataPoint | null)[], unknown>
  >({
        // default values
        labels: [],
        datasets: [
          {
            label: "Issues",
            data: [],
            backgroundColor: "rgba(255, 99, 132, 0.5)"
          },
        ],
      });

  // useEffect is a hook to run functionality
  // when a certain dependency changes
  useEffect(() => {
    // checks if issues exist
    if (issues) {
      // destructures the dates, openIssues, and closedIssues
      // from executing the prepIssues util method
      const { dates, openIssues, closedIssues } = prepIssues(issues);
      // uses the useState function to set the data in the chartConfig state
      setChartConfig({
        // chart labels are by date
        labels: dates,
        datasets: [
          {
            // Plots open issues from openIssues count array by date
            label: "Open",
            data: openIssues,
            backgroundColor: "rgb(173,216,230, 0.5)"
          },
          {
            // Plots closed issues from closedIssues count array by date
            label: "Closed",
            data: closedIssues,
            backgroundColor: "rgb(255, 99, 132, 0.5)"
          },
        ],
      });
    }
    // issues in the dependency array make it so that
    // this function is run everytime the value of issues changes
  }, [issues]);

  return (
    // xs is for the smallest sized screens, so on a small screen it fills 12/12 of the grid 
    // md is for medium sized screens, so on a medium sized screen and upward it fills 6/12 of the grid
    // sx applies additional styles to the grid
    <Grid item xs={12} md={6} sx={{ marginTop: 2 }}>
      {/* MUI Card is for displaying content and actions */}
      <Card>
        {/* Header with Title */}
        <CardHeader title="Issues" />
        {/* Content */}
        <CardContent>
          {/* if issues is null render Skeleton component else the actual Bar chart */}
          {!issues ? <Skeleton variant="rectangular" height={375} /> : <Bar data={chartConfig} />}
        </CardContent>
      </Card>
    </Grid>
  );
};

// exports it as the default for the file making it accessible to other components
export default IssueTrend;

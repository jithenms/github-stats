import React, { useEffect, useState } from "react";
import { Bar, Line } from "react-chartjs-2";
import { Chart, ChartData, registerables, ScatterDataPoint } from "chart.js";
import { Card, CardContent, CardHeader, Grid, Skeleton } from "@mui/material";
import { GithubData } from "../types";
import { prepCommits } from "../util";

// Enables the chart on the page
Chart.register(...registerables);
// removes the grid from the background of charts
Chart.defaults.scale.grid.display = false;

// type for properties passed into component
type CommitTrendProps = {
  // props required to have data of type GitHubData which
  // consists of issues, commits, pulls, and releases
  data: GithubData;
};

// Defining functional component with destructured data props
const CommitTrend = ({ data }: CommitTrendProps) => {
  // destructuring commits from data props
  const { commits } = data;

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
            label: "Commits",
            data: [],
            backgroundColor: "rgba(255, 99, 132, 0.5)"
          },
        ],
      });

  // useEffect is a hook to run functionality when a certain dependency changes
  // and is built-in to React
  useEffect(() => {
    // checks if commits exist
    if (commits) {
      // destructures the result of preparing the commits from the util method
      const { dates, commitData } = prepCommits(commits);
      // uses the useState function to set the data in the chartConfig state
      setChartConfig({
        // chart labels are by date
        labels: dates,
        // only one dataset for commits
        datasets: [
          {
            label: "Commits",
            // array with commit count by date
            data: commitData,
            backgroundColor: "rgba(255, 99, 132, 0.5)"
          },
        ],
      });
    }
    // commits in the dependency array make it so that
    // this function is run everytime the value of commits changes
  }, [commits]);

  return (
    // xs is for the smallest sized screens, so on a small screen it fills 12/12 of the grid 
    // md is for medium sized screens, so on a medium sized screen and upward it fills 6/12 of the grid
    // sx applies additional styles to the grid
    <Grid item xs={12} md={6} sx={{ marginTop: 2 }}>
      {/* MUI Card is for displaying content and actions */}
      <Card>
        {/* Header with Title */}
        <CardHeader title="Commits" />
        {/* Content */}
        <CardContent>
          {/* if commits is null render Skeleton component else the actual Bar chart */}
          {!commits ? <Skeleton variant="rectangular" height={375} /> :  
            // data is loaded from chartConfig which is set in state and updated in useEffect function
            <Bar data={chartConfig} />
          }
        </CardContent>
      </Card>
    </Grid>
  );
};

// exports it as the default for the file making it accessible to other components
export default CommitTrend;

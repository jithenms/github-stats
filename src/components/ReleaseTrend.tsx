import React, { useEffect, useState } from "react";
import { Bar, Line } from "react-chartjs-2";
import { Chart, ChartData, registerables, ScatterDataPoint } from "chart.js";
import { Card, CardContent, CardHeader, Grid, Skeleton } from "@mui/material";
import { GithubData, ListCommitsResponse } from "../types";
import { prepPulls, prepReleases } from "../util";

// Enables the chart on the page
Chart.register(...registerables);
// removes the grid from the background of charts
Chart.defaults.scale.grid.display = false;

// type for properties passed into component
type ReleaseProps = {
  // props required to have data of type GitHubData which
  // consists of issues, commits, pulls, and releases
  data: GithubData;
};

// Defining functional component with destructured data props
const ReleaseTrend = ({ data }: ReleaseProps) => {
  // destructuring releases from data props
  const { releases } = data;

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
        label: "Releases",
        data: [],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  });

  // useEffect is a hook to run functionality
  // when a certain dependency changes
  useEffect(() => {
    // checks if releases exist
    if (releases) {
      // destructures the dates, draftReleases, preReleases, and publishedReleases
      // from executing the prepReleases util method
      const { dates, draftReleases, preReleases, publishedReleases } =
        prepReleases(releases);
      // uses the useState function to set the data in the chartConfig state
      setChartConfig({
        // chart labels are by date
        labels: dates,
        datasets: [
          {
            // Plots draft releases from draftReleases count array by date
            label: "Drafts",
            data: draftReleases,
            backgroundColor: "rgb(144,238,144, 0.5)",
          },
          {
            // Plots pre releases from draftReleases count array by date
            label: "Pre Releases",
            data: preReleases,
            backgroundColor: "rgb(173,216,230, 0.5)",
          },
          {
            // Plots published releases from draftReleases count array by date
            label: "Published",
            data: publishedReleases,
            backgroundColor: "rgba(255, 99, 132, 0.5)",
          },
        ],
      });
    }    
    // releases in the dependency array make it so that
    // this function is run everytime the value of releases changes
  }, [releases]);

  return (
    // xs is for the smallest sized screens, so on a small screen it fills 12/12 of the grid 
    // md is for medium sized screens, so on a medium sized screen and upward it fills 6/12 of the grid
    // sx applies additional styles to the grid
    <Grid item xs={12} md={6} sx={{ marginTop: 2 }}>
      {/* Card is for displaying content and actions */}
      <Card>
        {/* Header with Title */}
        <CardHeader title="Releases" />
        {/* Content */}
        <CardContent>
          {/* if releases is null render Skeleton component else the actual Bar chart */}
          {!releases ? (
            <Skeleton variant="rectangular" height={375} />
          ) : (
            <Bar data={chartConfig} />
          )}
        </CardContent>
      </Card>
    </Grid>
  );
};

// exports it as the default for the file making it accessible to other components
export default ReleaseTrend;

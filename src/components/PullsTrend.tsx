import React, { useEffect, useState } from "react";
import { Bar, Line } from "react-chartjs-2";
import { Chart, ChartData, registerables, ScatterDataPoint } from "chart.js";
import { Card, CardContent, CardHeader, Grid, Skeleton } from "@mui/material";
import { GithubData, ListCommitsResponse } from "../types";
import { prepPulls } from "../util";

Chart.register(...registerables);
Chart.defaults.scale.grid.display = false;

type PullsProps = {
  data: GithubData;
};

const PullsTrend = ({ data }: PullsProps) => {
  const { pulls } = data;

  const [chartConfig, setChartConfig] = useState<
    ChartData<"bar", (number | ScatterDataPoint | null)[], unknown>
  >({
        labels: [],
        datasets: [
          {
            label: "Pull Requests",
            data: [],
            backgroundColor: "rgba(255, 99, 132, 0.5)"
          },
        ],
      });

  useEffect(() => {
    if (pulls) {
      const { dates, openPulls, closedPulls } = prepPulls(pulls);
      setChartConfig({
        labels: dates,
        datasets: [
          {
            label: "Open",
            data: openPulls,
            backgroundColor: "rgb(173,216,230, 0.5)"
          },
          {
            label: "Closed",
            data: closedPulls,
            backgroundColor: "rgba(255, 99, 132, 0.5)"
          },
        ],
      });
    }
  }, [pulls]);

  return (
    <Grid item xs={12} md={6} sx={{ marginTop: 2 }}>
      <Card>
        <CardHeader title="Pull Requests" />
        <CardContent>
          {!pulls ? <Skeleton variant="rectangular" height={375} /> : <Bar data={chartConfig} />}
        </CardContent>
      </Card>
    </Grid>
  );
};

export default PullsTrend;

import React, { useEffect, useState } from "react";
import { Bar, Line } from "react-chartjs-2";
import { Chart, ChartData, registerables, ScatterDataPoint } from "chart.js";
import { Card, CardContent, CardHeader, Grid, Skeleton } from "@mui/material";
import { GithubData, ListCommitsResponse } from "../types";
import { prepIssues } from "../util";

Chart.register(...registerables);
Chart.defaults.scale.grid.display = false;

type IssueTrendProps = {
  data: GithubData;
};

const IssueTrend = ({ data }: IssueTrendProps) => {
  const { issues } = data;

  const [chartConfig, setChartConfig] = useState<
    ChartData<"bar", (number | ScatterDataPoint | null)[], unknown>
  >({
        labels: [],
        datasets: [
          {
            label: "Issues",
            data: [],
            backgroundColor: "rgba(255, 99, 132, 0.5)"
          },
        ],
      });

  useEffect(() => {
    if (issues) {
      const { dates, openIssues, closedIssues } = prepIssues(issues);
      setChartConfig({
        labels: dates,
        datasets: [
          {
            label: "Open",
            data: openIssues,
            backgroundColor: "rgb(173,216,230, 0.5)"
          },
          {
            label: "Closed",
            data: closedIssues,
            backgroundColor: "rgb(255, 99, 132, 0.5)"
          },
        ],
      });
    }
  }, [issues]);

  return (
    <Grid item xs={12} md={6} sx={{ marginTop: 2 }}>
      <Card>
        <CardHeader title="Issues" />
        <CardContent>
          {!issues ? <Skeleton variant="rectangular" height={375} /> : <Bar data={chartConfig} />}
        </CardContent>
      </Card>
    </Grid>
  );
};

export default IssueTrend;

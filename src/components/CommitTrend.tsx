import React, { useEffect, useState } from "react";
import { Bar, Line } from "react-chartjs-2";
import { Chart, ChartData, registerables, ScatterDataPoint } from "chart.js";
import { Card, CardContent, CardHeader, Grid, Skeleton } from "@mui/material";
import { GithubData, ListCommitsResponse } from "../types";
import { prepCommits } from "../util";

Chart.register(...registerables);

type CommitTrendProps = {
  data: GithubData;
};

const CommitTrend = ({ data }: CommitTrendProps) => {
  const { commits } = data;

  const [chartConfig, setChartConfig] = useState<
    ChartData<"line", (number | ScatterDataPoint | null)[], unknown>
  >();

  useEffect(() => {
    if (commits) {
      const { dates, commitData } = prepCommits(commits);
      setChartConfig({
        labels: dates,
        datasets: [
          {
            label: "Commits",
            data: commitData,
            borderColor: "rgb(255, 99, 132)",
            backgroundColor: "rgba(255, 99, 132, 0.5)",
          },
        ],
      });
    }
  }, [commits]);

  return (
    <Grid item xs={12} md={6} sx={{ marginTop: 2 }}>
      <Card>
        <CardHeader title="Commits" />
        <CardContent>
          {!commits || !chartConfig ? <Skeleton variant="rectangular" height={375} /> : <Bar data={chartConfig} />}
        </CardContent>
      </Card>
    </Grid>
  );
};

export default CommitTrend;

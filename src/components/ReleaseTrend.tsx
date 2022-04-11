import React, { useEffect, useState } from "react";
import { Bar, Line } from "react-chartjs-2";
import { Chart, ChartData, registerables, ScatterDataPoint } from "chart.js";
import { Card, CardContent, CardHeader, Grid, Skeleton } from "@mui/material";
import { GithubData, ListCommitsResponse } from "../types";
import { prepPulls, prepReleases } from "../util";

Chart.register(...registerables);

type ReleaseProps = {
  data: GithubData;
};

const ReleaseTrend = ({ data }: ReleaseProps) => {
  const { releases } = data;

  const [chartConfig, setChartConfig] = useState<
    ChartData<"bar", (number | ScatterDataPoint | null)[], unknown>
  >({
    labels: [],
    datasets: [
      {
        label: "Releases",
        data: [],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  });

  useEffect(() => {
    if (releases) {
      const { dates, releaseData } = prepReleases(releases);
      setChartConfig({
        labels: dates,
        datasets: [
          {
            label: "Releases",
            data: releaseData,
            borderColor: "rgb(255, 99, 132)",
            backgroundColor: "rgba(255, 99, 132, 0.5)",
          },
        ],
      });
    }
  }, [releases]);

  return (
    <Grid item xs={12} md={6} sx={{ marginTop: 2 }}>
      <Card>
        <CardHeader title="Releases" />
        <CardContent>
          {!releases ? <Skeleton variant="rectangular" height={375} /> : <Bar data={chartConfig} />}
        </CardContent>
      </Card>
    </Grid>
  );
};

export default ReleaseTrend;

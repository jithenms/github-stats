import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
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
    ChartData<"line", (number | ScatterDataPoint | null)[], unknown>
  >();

  useEffect(() => {
    if (releases) {
      const { dates, draftReleases, preReleases, publishedReleases } = prepReleases(releases);
      setChartConfig({
        labels: dates,
        datasets: [
          {
            label: "Drafts",
            data: draftReleases,
            borderColor: "rgb(255, 99, 132)",
            backgroundColor: "rgba(255, 99, 132, 0.5)",
          },
          {
            label: "Pre Releases",
            data: preReleases,
            borderColor: "rgb(255, 99, 132)",
            backgroundColor: "rgba(255, 99, 132, 0.5)",
          },
          {
            label: "Published",
            data: publishedReleases,
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
          {!releases || !chartConfig ? <Skeleton variant="rectangular" height={375} /> : <Line data={chartConfig} />}
        </CardContent>
      </Card>
    </Grid>
  );
};

export default ReleaseTrend;

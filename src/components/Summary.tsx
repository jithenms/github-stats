import React from "react";
import { Grid, Paper, Typography, Skeleton } from "@mui/material";
import { Box } from "@mui/system";
import { GithubData } from "../types";

type SummaryProps = {
  since: string;
  until: string;
  data: GithubData;
};

const Summary = ({ since, until, data }: SummaryProps) => {
  const { commits, pulls, issues, releases } = data;
  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={12} md={3}>
        <Paper sx={{ p: 3 }}>
          <Typography component="h2" variant="h6" color="primary">
            Issues
          </Typography>
          {!issues ? <Skeleton variant="rectangular" height={50} /> : <>
            <Typography component="p" variant="h4">
              {issues?.length}
            </Typography>
            <Typography color="text.secondary" sx={{ flex: 1 }}>
              {since} to {until}
            </Typography>
          </>}
        </Paper>
      </Grid>
      <Grid item xs={12} md={3}>
        <Paper sx={{ p: 3 }}>
          <Typography component="h2" variant="h6" color="primary">
            Commits
          </Typography>
          {!commits ? <Skeleton variant="rectangular" height={50} /> : <>
            <Typography component="p" variant="h4">
              {commits?.length}
            </Typography>
            <Typography color="text.secondary" sx={{ flex: 1 }}>
              {since} to {until}
            </Typography>
          </>}
        </Paper>
      </Grid>
      <Grid item xs={12} md={3}>
        <Paper sx={{ p: 3 }}>
          <Typography component="h2" variant="h6" color="primary">
            Pull Requests
          </Typography>
          {!pulls ? <Skeleton variant="rectangular" height={50} /> : <>
            <Typography component="p" variant="h4">
              {pulls?.length}
            </Typography>
            <Typography color="text.secondary" sx={{ flex: 1 }}>
              {since} to {until}
            </Typography>
          </>}
        </Paper>
      </Grid>
      <Grid item xs={12} md={3}>
        <Paper sx={{ p: 3 }}>
          <Typography component="h2" variant="h6" color="primary">
            Releases
          </Typography>
          {!releases ? <Skeleton variant="rectangular" height={50} /> : <>
            <Typography component="p" variant="h4">
              {releases?.length}
            </Typography>
            <Typography color="text.secondary" sx={{ flex: 1 }}>
              {since} to {until}
            </Typography>
          </>}
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Summary;

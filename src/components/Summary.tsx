import React from "react";
import { Grid, Paper, Typography, Skeleton } from "@mui/material";
import { Box } from "@mui/system";
import { GithubData } from "../types";

// type for properties passed into component
type SummaryProps = {
  // since date is string
  since: string;
  // until date is string
  until: string;
  // data is of type GithubData which contains issues, commits, pulls, and releases
  data: GithubData;
};

// Defining functional component with destructured since, until, and data props
const Summary = ({ since, until, data }: SummaryProps) => {
  // destructuring commits, pulls, issues, and releases from data props
  const { commits, pulls, issues, releases } = data;
  return (
    // Grid container has child Grid items with row and column spacing according to screen size xs, sm, md
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      {/* Grid item on extra small screen has size of 12/12 and on a medium and above a 3/12 */}
      <Grid item xs={12} md={3}>
        {/* Paper gives flat paper like texture background*/}
        {/* Additional style with padding of 3 has been applied */}
        <Paper sx={{ p: 3 }}>
          {/* Typography is a component from MUI for rendering text */}
          {/* Here it is an h6 with a primary color */}
          <Typography component="h2" variant="h6" color="primary">
            Issues
          </Typography>
          {/* If issues null render Skeleton with height of 50 */}
          {!issues ? <Skeleton variant="rectangular" height={50} /> : <>
            {/* Executed if issues present */}
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

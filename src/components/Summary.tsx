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
      {/* On md screen, four of these will be in a row */}
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
              {/* Gets total amount of issues from array if present */}
              {issues?.length}
            </Typography>
            {/* Normal text with secondary color with flex 1 style */}
            <Typography color="text.secondary" sx={{ flex: 1 }}>
              {/* Neatly formats the Since and Until input */}
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
          {/* If commits null render Skeleton with height of 50 */}
          {!commits ? <Skeleton variant="rectangular" height={50} /> : <>
            {/* Executed if commits present */}
            <Typography component="p" variant="h4">
              {/* Gets total amount of commits from array if present */}
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
          {/* If pulls null render Skeleton with height of 50 */}
          {!pulls ? <Skeleton variant="rectangular" height={50} /> : <>
            {/* Executed if pulls present */}
            <Typography component="p" variant="h4">
              {/* Gets total amount of pull requests from array if present */}
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
          {/* If releases null render Skeleton with height of 50 */}
          {!releases ? <Skeleton variant="rectangular" height={50} /> : <>
            {/* Executed if releases present */}
            <Typography component="p" variant="h4">
              {/* Gets total amount of releases from array if present */}
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

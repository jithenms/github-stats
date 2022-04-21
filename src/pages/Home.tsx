import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import Summary from "../components/Summary";
import useData from "../hooks/useData";
import useInput from "../hooks/useInput";
import IssueTrend from "../components/IssueTrend";
import CommitTrend from "../components/CommitTrend";
import PullsTrend from "../components/PullsTrend";
import ReleaseTrend from "../components/ReleaseTrend";
import UserInput from "../components/UserInput";

const Home = () => {
  const input = useInput();
  // destructures the data returned from the input hook
  const { owner, repo, since, until, open, setOpen, setInput } = input;
  // uses the useData hook to fetch the data from the GitHub API
  const data = useData({
    owner: owner,
    repo: repo,
    since: since,
    until: until,
    open: open
  });

  // if open is true return the dashboard page
  if (open)
    return (
      <div>
        <Grid item xs={12}>
          {/* Button within dashboard to go back to input page on click by setting open to false*/}
          <Button variant="outlined" onClick={() => setOpen(false)}>
            Change Repo
          </Button>
          {/* Displays the owner and repo input in the dashboard*/}
          <Typography marginTop={2} marginBottom={2} variant="h5">
            {owner}/{repo}
          </Typography>
        </Grid>
        {/* Uses Summary Component with props of since and until from useInput hook and data from useData hook */}
        <Summary since={since} until={until} data={data} />
        {/* MUI Grid container with basic row and column spacing */}
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {/* Issues Component Chart with props of data from useData hook */}
          <IssueTrend data={data} />
          {/* Commits Component Chart with props of data from useData hook */}
          <CommitTrend data={data} />
          {/* Pull Request Component Chart with props of data from useData hook */}
          <PullsTrend data={data} />
          {/* Release Component Chart with props of data from useData hook */}
          <ReleaseTrend data={data} />
        </Grid>
      </div>
    );

  // if open is false return the user input page
  if (!open) return <UserInput input={input} setOpen={setOpen} setInput={setInput} />;

  // if no conditions above are true return an error message
  return <div>Unknown Error Occured</div>;
};

export default Home;

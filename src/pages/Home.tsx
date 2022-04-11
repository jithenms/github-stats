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
  const { owner, repo, since, until, open, setOpen, setInput } = input;
  const data = useData({
    owner: owner,
    repo: repo,
    since: since,
    until: until,
    open: open
  });

  if (open)
    return (
      <div>
        <Grid item xs={12}>
          <Button variant="outlined" onClick={() => setOpen(false)}>
            Change Repo
          </Button>
          <Typography marginTop={2} marginBottom={2} variant="h5">
            {owner}/{repo}
          </Typography>
        </Grid>
        <Summary since={since} until={until} data={data} />
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <IssueTrend data={data} />
          <CommitTrend data={data} />
          <PullsTrend data={data} />
          <ReleaseTrend data={data} />
        </Grid>
      </div>
    );

  if (!open) return <UserInput input={input} setOpen={setOpen} setInput={setInput} />;

  return <div>Unknown Error Occured</div>;
};

export default Home;

import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  FormControl,
  Grid,
  TextField,
} from "@mui/material";
import { Input } from "../types";

type UserInputProps = {
  input: Input
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setInput: React.Dispatch<React.SetStateAction<Input>>;
};

const UserInput = (props: UserInputProps) => {
  const { input, setOpen, setInput } = props;

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      sx={{ minHeight: 100 }}
    >
      <Card>
        <CardHeader title="Enter Repository" />
        <CardContent>
          <Grid item xs={12} sx={{ m: 2 }}>
            <TextField
              sx={{ m: 1 }}
              label="Owner"
              variant="outlined"
              value={input.owner}
              onChange={(e) =>
                setInput((state) => ({ ...state, owner: e.target.value }))
              }
            />
            <TextField
              sx={{ m: 1 }}
              label="Repo"
              variant="outlined"
              value={input.repo}
              onChange={(e) =>
                setInput((state) => ({ ...state, repo: e.target.value }))
              }
            />
          </Grid>
          <Grid item xs={12} sx={{ m: 2 }}>
            <TextField
              sx={{ m: 1 }}
              label="Start"
              variant="outlined"
              value={input.since}
              onChange={(e) =>
                setInput((state) => ({
                  ...state,
                  since: e.target.value,
                }))
              }
            />
            <TextField
              sx={{ m: 1 }}
              label="End"
              variant="outlined"
              value={input.until}
              onChange={(e) =>
                setInput((state) => ({
                  ...state,
                  until: e.target.value,
                }))
              }
            />
          </Grid>
          <Button
            onClick={() => {
              setInput({
                owner: input.owner,
                repo: input.repo,
                since: input.since,
                until: input.until,
              });
              setOpen(true);
            }}
          >
            Submit
          </Button>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default UserInput;

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

// type for properties passed into component
type UserInputProps = {
    // props required to have data of type GitHubData which
  input: Input; // type Input which contains owner, repo, since and until
  setOpen: React.Dispatch<React.SetStateAction<boolean>>; // Set Boolean State type from React
  setInput: React.Dispatch<React.SetStateAction<Input>>; // Set Input State type from React
};

// Defining functional component with props interface defined above
const UserInput = (props: UserInputProps) => {
  // destructuring input, setOpen, and setInput from props
  const { input, setOpen, setInput } = props;

  return (
    // Grid column, align center, and minHeight of 100
    // Aligns the whole container to the middle center of the screen
    <Grid
      container
      direction="column"
      alignItems="center"
      sx={{ minHeight: 100 }}
    >
      {/* MUI Card is for displaying content and actions */}
      <Card>
        {/* Header with Title */}
        <CardHeader title="Enter Repository" />
        {/* Content */}
        <CardContent>
          {/* Grid item of 12 should align two text fields in a single row */}
          <Grid item xs={12} sx={{ m: 2 }}>
            {/* MUI User Input */}
            <TextField
              sx={{ m: 1 }}
              label="Owner"
              variant="outlined"
              // Value comes from input props
              value={input.owner}
              // executed when input changes
              onChange={(e) =>
                // e.target.value contains the value of the input
                // when setting input, since it's in an object, we want to
                // apply the previous states and only change the one we desire
                // to the input value, in this case owner
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
          {/* Second Grid item should be another row with two text fields */}
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
          {/* MUI Button*/}
          <Button
            // When clicked, function is executed
            onClick={() => {
              // Setting the input state using the function passed as props
              setInput({
                owner: input.owner,
                repo: input.repo,
                since: input.since,
                until: input.until,
              });

              // Setting Open true will open dashboard and close input
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

import React, { useEffect, useState } from 'react'
import { Input } from '../types';

const useInput = () => {
  // Stores input in local state with type Input
  // first pos is value, second is function to set value
  const [input, setInput] = useState<Input>({
    owner: "facebook",
    repo: "react",
    since: "2022-03-01",
    // removes the time from the date by splitting T and getting left side
    until: new Date().toISOString().split("T")[0],
  });

  // Stores whether dashboard is open or closed and is type boolean
  // first pos is value, second is function to set value
  const [open, setOpen] = useState<boolean>(false);

  // Returns object of owner, repo, since, until, open, setOpen, and setInput
  return {
    owner: input.owner,
    repo: input.repo,
    since: input.since,
    until: input.until,
    open: open,
    setOpen: setOpen,
    setInput: setInput,
  }
}

export default useInput
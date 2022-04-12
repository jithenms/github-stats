import React, { useEffect, useState } from 'react'
import { Input } from '../types';

const useInput = () => {
  const [input, setInput] = useState<Input>({
    owner: "facebook",
    repo: "react",
    since: "2022-03-01",
    until: new Date().toISOString().split("T")[0],
  });
  const [open, setOpen] = useState<boolean>(false);

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
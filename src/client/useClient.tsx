import React from 'react'
import { Octokit } from 'octokit';


const useClient = () => {
  return new Octokit({
    auth: process.env.REACT_APP_GITHUB_TOKEN
  });
}

export default useClient
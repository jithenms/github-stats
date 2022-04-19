import React from 'react'
import { Octokit } from 'octokit';

// hook for using the Ocktokit GitHub API Client
const useClient = () => {
  // Instanties and returns a new Ocktokit Client
  return new Octokit({
    // Auth from Environment Variable
    auth: process.env.REACT_APP_GITHUB_TOKEN
  });
}

// exports it as the default for the file making it accessible to other components
export default useClient
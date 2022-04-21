import React, { useEffect, useState } from "react";
import { Octokit } from "octokit";
import useClient from "../client/useClient";
import { GithubData, Input } from "../types";

// Type includes Input Type plus additional prop
type UserDataProps = Input & {
  // open boolean prop determines whether to run API calls
  open: boolean;
};

// Defining functional component with destructured owner, repo, since, until, open props from Type
const useData = ({ owner, repo, since, until, open }: UserDataProps) => {
  // Uses hook for the Ocktokit Github API Client
  const client = useClient();
  // Use state from React to store and set data with interface of GithubData 
  // which contains issues, commits, pull requests, and releases
  const [data, setData] = useState<GithubData>();

  const listCommits = async () => {
    // Ocktokit pagination automatically
    // paginates data until done or until data
    // doesn't have a next page
    return await client.paginate(
      // fetching the list of commits from the REST API
      client.rest.repos.listCommits,
      {
        // query and path params to API
        owner: owner,
        repo: repo,
        since: since,
        until: until,
      },
      (response, done) => {
        // handler function for each 
        // iteration of a page
        // returning response.data combines the data with
        // the previous pages to finally return a combined response
        return response.data;
      }
    );
  };

  const listPulls = async () => {
    // Ocktokit pagination automatically
    // paginates data until done or until data
    // doesn't have a next page
    let pulls = await client.paginate(
      client.rest.pulls.list,
      {
        // Query and path params to API
        owner: owner,
        repo: repo,
        // Gets all pull requests including closed and open
        state: "all",
        // Efficient way to loop through as starting with newest data
        direction: "desc",
      },
      (response, done) => {
        response.data.map((res) => {
          // Efficient way to stop paginating
          // If the created at date is less than the since date
          // Since we are starting from the newest and moving to the oldest
          if (res.created_at < since) done();
        });
        return response.data;
      }
    );
    return pulls.filter(
      // returns pulls only where the created at is within range of since and until
      (pull) => pull.created_at < until && pull.created_at > since
    );
  };

  const listIssues = async () => {
    // Ocktokit pagination automatically
    // paginates data until done or until data
    // doesn't have a next page
    let issues = await client.paginate(
      // lists issues for repo
      client.rest.issues.listForRepo,
      {
        // query and path params
        owner: owner,
        repo: repo,
        since: since,
        // Gets all issues including closed and open
        state: "all",
        // Efficient way to loop through as starting with newest data
        direction: "desc",
      },
      (response, done) => {
        response.data.map((res) => {
          // Efficient way to stop paginating
          // If the created at date is less than the since date
          // Since we are starting from the newest and moving to the oldest
          if (res.created_at < since) done();
        });
        return response.data;
      }
    );
    return issues.filter(
      // returns issues only where the created at is within range of since and until
      (issue) => issue.created_at < until && issue.created_at > since
    );
  };

  const listReleases = async () => {
    let releases = await client.paginate(
      // lists releases for a repo
      client.rest.repos.listReleases,
      {
        // query and path params
        owner: owner,
        repo: repo,
      },
      (response, done) => {
        return response.data;
      }
    );
    releases = releases.filter(
      // returns releases only where the created at is within range of since and until
      (release) => release.created_at > since && release.created_at < until
    );
    return releases;
  };

  useEffect(() => {
    // checks if open is true
    if (open) {
      setData({});
      listIssues().then((res) => {
        setData((state) => ({ ...state, issues: res }));
      });
      listCommits().then((res) => {
        setData((state) => ({ ...state, commits: res }));
      });
      listPulls().then((res) => {
        setData((state) => ({ ...state, pulls: res }));
      });
      listReleases().then((res) => {
        setData((state) => ({ ...state, releases: res }));
      });
    }
    // open in the dependency array make it so that
    // this function is run everytime the value of open changes
  }, [open]);

  // returns object of commits, pulls, issues, and releases
  return {
    commits: data?.commits,
    pulls: data?.pulls,
    issues: data?.issues,
    releases: data?.releases,
  };
};

export default useData;

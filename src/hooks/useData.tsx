import React, { useEffect, useState } from "react";
import { Octokit } from "octokit";
import useClient from "../client/useClient";
import { GithubData, Input } from "../types";

type UserDataProps = Input & {
  open: boolean;
};

const useData = ({ owner, repo, since, until, open }: UserDataProps) => {
  const client = useClient();
  const [data, setData] = useState<GithubData>();

  // TODO: Test
  const listCommits = async () => {
    return await client.paginate(
      client.rest.repos.listCommits,
      {
        owner: owner,
        repo: repo,
        since: since,
        until: until,
      },
      (response, done) => {
        return response.data;
      }
    );
  };

  // TODO: Test the Date Filtering Here
  const listPulls = async () => {
    let pulls = await client.paginate(
      client.rest.pulls.list,
      {
        owner: owner,
        repo: repo,
        state: "all",
        direction: "desc",
      },
      (response, done) => {
        response.data.map((res) => {
          if (res.created_at < since) done();
        });
        return response.data;
      }
    );
    return pulls.filter(
      (pull) => pull.created_at < until && pull.created_at > since
    );
  };

  // TODO: Test the Date Filtering Here
  const listIssues = async () => {
    let issues = await client.paginate(
      client.rest.issues.listForRepo,
      {
        owner: owner,
        repo: repo,
        since: since,
        state: "all",
        direction: "desc",
      },
      (response, done) => {
        response.data.map((res) => {
          if (res.created_at < since) done();
        });
        return response.data;
      }
    );
    return issues.filter(
      (issue) => issue.created_at < until && issue.created_at > since
    );
  };

  // TODO: Test the Date Filtering Here
  const listReleases = async () => {
    let releases = await client.paginate(
      client.rest.repos.listReleases,
      {
        owner: owner,
        repo: repo,
      },
      (response, done) => {
        return response.data;
      }
    );
    releases = releases.filter(
      (release) => release.created_at > since && release.created_at < until
    );
    return releases;
  };

  useEffect(() => {
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
  }, [open]);

  return {
    commits: data?.commits,
    pulls: data?.pulls,
    issues: data?.issues,
    releases: data?.releases,
  };
};

export default useData;

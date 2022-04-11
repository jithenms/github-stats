import {
  ListCommitsResponse,
  ListIssuesResponse,
  ListPullsResponse,
  ListReleasesResponse,
} from "../types";

export const prepIssues = (
  issues: ListIssuesResponse
): {
  dates: string[];
  issueData: number[];
} => {
  const dates = issues
    ?.map((item) => item.created_at.split("T")[0])
    .filter((value, index, self) => self.indexOf(value) === index)
    .sort();
  const issueData: number[] = [];
  if (dates)
    for (let i = 0; i < dates.length; i++) {
      issues?.map((issue) => {
        if (issue.created_at.split("T")[0] === dates[i]) {
          if (issueData[i] == null) issueData[i] = 1;
          else issueData[i] = issueData[i] + 1;
        }
      });
    }
  return {
    dates: dates,
    issueData: issueData,
  };
};

export const prepCommits = (
  commits: ListCommitsResponse
): {
  dates: string[];
  commitData: number[];
} => {
  const dates = commits
    ?.map((commit) =>
      commit.commit.author?.date
        ? commit.commit.author.date.split("T")[0]
        : "Unknown"
    )
    .filter((value, index, self) => self.indexOf(value) === index)
    .sort();
  const commitData: number[] = [];
  if (dates)
    for (let i = 0; i < dates.length; i++) {
      commits?.map((commit) => {
        if (commit.commit.author?.date) {
          if (commit.commit.author.date.split("T")[0] === dates[i]) {
            if (commitData[i] == null) commitData[i] = 1;
            else commitData[i] = commitData[i] + 1;
          }
        }
      });
    }
  return {
    dates: dates,
    commitData: commitData,
  };
};

export const prepPulls = (
  pulls: ListPullsResponse
): {
  dates: string[];
  pullData: number[];
} => {
  const dates = pulls
    ?.map((pull) => pull.created_at.split("T")[0])
    .filter((value, index, self) => self.indexOf(value) === index)
    .sort();
  const pullData: number[] = [];
  if (dates)
    for (let i = 0; i < dates.length; i++) {
      pulls?.map((pull) => {
        if (pull.created_at.split("T")[0] === dates[i]) {
          if (pullData[i] == null) pullData[i] = 1;
          else pullData[i] = pullData[i] + 1;
        }
      });
    }
  return {
    dates: dates,
    pullData: pullData,
  };
};

export const prepReleases = (
  releases: ListReleasesResponse
): {
  dates: string[];
  releaseData: number[];
} => {
  const dates = releases
    ?.map((release) => release.created_at.split("T")[0])
    .filter((value, index, self) => self.indexOf(value) === index)
    .sort();
  const releaseData: number[] = [];
  if (dates)
    for (let i = 0; i < dates.length; i++) {
      releases?.map((release) => {
        if (release.created_at.split("T")[0] === dates[i]) {
          if (releaseData[i] == null) releaseData[i] = 1;
          else releaseData[i] = releaseData[i] + 1;
        }
      });
    }
  return {
    dates: dates,
    releaseData: releaseData,
  };
};

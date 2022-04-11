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
  openIssues: number[];
  closedIssues: number[];
} => {
  const dates = issues
    ?.map((item) => item.created_at.split("T")[0])
    .filter((value, index, self) => self.indexOf(value) === index)
    .sort();
  const openIssues: number[] = [];
  const closedIssues: number[] = [];
  if (dates)
    for (let i = 0; i < dates.length; i++) {
      issues?.map((issue) => {
        if (issue.created_at.split("T")[0] === dates[i]) {
          if (issue.state === "open") {
            if (openIssues[i] == null) openIssues[i] = 1;
            else openIssues[i] = openIssues[i] + 1;
          } else {
            if (closedIssues[i] == null) closedIssues[i] = 1;
            else closedIssues[i] = closedIssues[i] + 1;
          }
        }
      });
    }
  return {
    dates: dates,
    openIssues: openIssues,
    closedIssues: closedIssues
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
  openPulls: number[];
  closedPulls: number[];
} => {
  const dates = pulls
    ?.map((pull) => pull.created_at.split("T")[0])
    .filter((value, index, self) => self.indexOf(value) === index)
    .sort();
  const closedPulls: number[] = [];
  const openPulls: number[] = [];
  if (dates)
    for (let i = 0; i < dates.length; i++) {
      pulls?.map((pull) => {
        if (pull.created_at.split("T")[0] === dates[i]) {
          if (pull.state === "closed") {
            if (closedPulls[i] == null) closedPulls[i] = 1;
            else closedPulls[i] = closedPulls[i] + 1;
          } else {
            if (openPulls[i] == null) openPulls[i] = 1;
            else openPulls[i] = openPulls[i] + 1;
          }
        }
      });
    }
  return {
    dates: dates,
    openPulls: openPulls,
    closedPulls: closedPulls
  };
};

export const prepReleases = (
  releases: ListReleasesResponse
): {
  dates: string[];
  draftReleases: number[];
  preReleases: number[];
  publishedReleases: number[];
} => {
  const dates = releases
    ?.map((release) => release.created_at.split("T")[0])
    .filter((value, index, self) => self.indexOf(value) === index)
    .sort();
  const draftReleases: number[] = [];
  const preReleases: number[] = [];
  const publishedReleases: number[] = [];
  if (dates)
    for (let i = 0; i < dates.length; i++) {
      releases?.map((release) => {
        if (release.created_at.split("T")[0] === dates[i]) {
          if (release.draft === true) {
            if (draftReleases[i] == null) draftReleases[i] = 1;
            else draftReleases[i] = draftReleases[i] + 1;
          } else if (release.prerelease === true) {
            if (draftReleases[i] == null) draftReleases[i] = 1;
            else draftReleases[i] = draftReleases[i] + 1;
          } else {
            if (publishedReleases[i] == null) publishedReleases[i] = 1;
            else publishedReleases[i] = publishedReleases[i] + 1;
          }
        }
      });
    }
  return {
    dates: dates,
    draftReleases: draftReleases,
    preReleases: preReleases,
    publishedReleases: publishedReleases
  };
};

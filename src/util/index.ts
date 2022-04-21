import {
  ListCommitsResponse,
  ListIssuesResponse,
  ListPullsResponse,
  ListReleasesResponse,
} from "../types";

// returns an array of issue count by date and an array of unique dates
export const prepIssues = (
  // parameter of issue data from API response
  issues: ListIssuesResponse
): {
  // return type
  dates: string[];
  openIssues: number[];
  closedIssues: number[];
} => {
  const dates = issues
    // maps through each of the issues dates without time using split on T with first index
    ?.map((item) => item.created_at.split("T")[0])
    // filters the values that only occur at the current index for unique dates
    .filter((value, index, self) => self.indexOf(value) === index)
    // sorts them ascending
    .sort();
  // initialize openIssues empty list
  const openIssues: number[] = [];
  // initialize closedIssues empty list
  const closedIssues: number[] = [];
  // execute if dates not null
  if (dates)
    // loop through dates
    for (let i = 0; i < dates.length; i++) {
      // for each date map through all the issues
      issues?.map((issue) => {
        // if the created at date without time equals the date at current index
        if (issue.created_at.split("T")[0] === dates[i]) {
          // if state of the issue is open continue
          if (issue.state === "open") {
            // if null assign openIssues pos i to 1
            if (openIssues[i] == null) openIssues[i] = 1;
            // else increment openIssues pos i by 1
            else openIssues[i] = openIssues[i] + 1;
          } else {
            // state is not open
            // if null assign closedIssues pos i to 1
            if (closedIssues[i] == null) closedIssues[i] = 1;
            // else increment closedIssues pos i by 1
            else closedIssues[i] = closedIssues[i] + 1;
          }
        }
      });
    }
  // return object of dates, openIssues, and closedIssues
  return {
    dates: dates,
    openIssues: openIssues,
    closedIssues: closedIssues
  };
};

// returns an array of commit count by date and an array of unique dates
export const prepCommits = (
  // parameter of commits from API response
  commits: ListCommitsResponse
): {
  // return type
  dates: string[];
  commitData: number[];
} => {

  const dates = commits
    // maps through each of the commits dates if present without time using split on T with first index
    ?.map((commit) =>
      // checks if date is present
      commit.commit.author?.date
        // true condition
        ? commit.commit.author.date.split("T")[0]
        // false condition
        : "Unknown"
    )
    // filters the values that only occur at the current index for unique dates
    .filter((value, index, self) => self.indexOf(value) === index)
    // sorts them ascending
    .sort();
  // initialize commitData empty list
  const commitData: number[] = [];
  // if dates is not null
  if (dates)
    // loop through dates
    for (let i = 0; i < dates.length; i++) {
      // for each date map through all the commits
      commits?.map((commit) => {
        // if date present in commit
        if (commit.commit.author?.date) {
          // if the created at date without time equals the date at current index
          if (commit.commit.author.date.split("T")[0] === dates[i]) {
            // if null assign closedIssues pos i to 1
            if (commitData[i] == null) commitData[i] = 1;
            // else increment closedIssues pos i by 1
            else commitData[i] = commitData[i] + 1;
          }
        }
      });
    }
  // returns object of dates and commitData
  return {
    dates: dates,
    commitData: commitData,
  };
};

// returns an array of pull requests count by date and an array of unique dates
export const prepPulls = (
  // parameter of pulls from API response
  pulls: ListPullsResponse
): {
  // return type
  dates: string[];
  openPulls: number[];
  closedPulls: number[];
} => {
  const dates = pulls
    // maps through each of the pulls dates without time using split on T with first index
    ?.map((item) => item.created_at.split("T")[0])
    // filters the values that only occur at the current index for unique dates
    .filter((value, index, self) => self.indexOf(value) === index)
    // sorts them ascending
    .sort();
  // initialize closedPulls empty list
  const closedPulls: number[] = [];
  // initialize openPulls empty list
  const openPulls: number[] = [];
  // if dates is not null
  if (dates)
    // loop through each of the dates
    for (let i = 0; i < dates.length; i++) {
      // for each date loop through each pull request
      pulls?.map((pull) => {
        // if the created at date without time equals the date at current index
        if (pull.created_at.split("T")[0] === dates[i]) {
          // if state of pull request is closed
          if (pull.state === "closed") {
            // if closedPulls at pos i is null set it to 1
            if (closedPulls[i] == null) closedPulls[i] = 1;
            // else increment the same pos in closedPulls by 1
            else closedPulls[i] = closedPulls[i] + 1;
          } else {
            // if openPulls at pos i is null set it to 1
            if (openPulls[i] == null) openPulls[i] = 1;
            // else increment the same pos in openPulls by 1
            else openPulls[i] = openPulls[i] + 1;
          }
        }
      });
    }
  // return object of dates, openPulls, and closedPulls
  return {
    dates: dates,
    openPulls: openPulls,
    closedPulls: closedPulls
  };
};

// returns an array of releases count by date and an array of unique dates
export const prepReleases = (
  releases: ListReleasesResponse
): {
  dates: string[];
  draftReleases: number[];
  preReleases: number[];
  publishedReleases: number[];
} => {
  const dates = releases
    // maps through each of the pulls dates without time using split on T with first index
    ?.map((item) => item.created_at.split("T")[0])
    // filters the values that only occur at the current index for unique dates
    .filter((value, index, self) => self.indexOf(value) === index)
    // sorts them ascending
    .sort();
  // initialize draftReleases empty list
  const draftReleases: number[] = [];
  // initialize preReleases empty list
  const preReleases: number[] = [];
  // initialize publishedReleases empty list
  const publishedReleases: number[] = [];
  // if dates is not null
  if (dates)
    // loop through each of the dates
    for (let i = 0; i < dates.length; i++) {
      // for each date loop through each pull releases
      releases?.map((release) => {
        // if the created at date without time equals the date at current index
        if (release.created_at.split("T")[0] === dates[i]) {
          // if it is a draft release
          if (release.draft === true) {
            // if draftReleases at pos i is null set it to 1
            if (draftReleases[i] == null) draftReleases[i] = 1;
            // else increment the same pos in draftReleases by 1
            else draftReleases[i] = draftReleases[i] + 1;
          } // else if it is a pre release
          else if (release.prerelease === true) {
            // if preReleases at pos i is null set it to 1
            if (preReleases[i] == null) preReleases[i] = 1;
            // else increment the same pos in preReleases by 1
            else preReleases[i] = preReleases[i] + 1;
          } // else it is a published release 
          else {
            // if publishedReleases at pos i is null set it to 1
            if (publishedReleases[i] == null) publishedReleases[i] = 1;
            // else increment the same pos in publishedReleases by 1
            else publishedReleases[i] = publishedReleases[i] + 1;
          }
        }
      });
    }
  // return object of dates, draft, pre, and published releases
  return {
    dates: dates,
    draftReleases: draftReleases,
    preReleases: preReleases,
    publishedReleases: publishedReleases
  };
};

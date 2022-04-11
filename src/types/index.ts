import {Endpoints} from "@octokit/types";

export type ListCommitsResponse = Endpoints["GET /repos/{owner}/{repo}/commits"]["response"]["data"];
export type ListPullsResponse = Endpoints["GET /repos/{owner}/{repo}/pulls"]["response"]["data"];
export type ListIssuesResponse = Endpoints["GET /repos/{owner}/{repo}/issues"]["response"]["data"];
export type ListReleasesResponse = Endpoints["GET /repos/{owner}/{repo}/releases"]["response"]["data"];


export type Input = {
  owner: string;
  repo: string;
  since: string;
  until: string;
}

export type GithubData = {
    commits?: ListCommitsResponse
    pulls?: ListPullsResponse
    issues?: ListIssuesResponse
    releases?: ListReleasesResponse
}
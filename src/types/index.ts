import { Endpoints } from "@octokit/types";

// Types for GitHub API Response
export type ListCommitsResponse = Endpoints["GET /repos/{owner}/{repo}/commits"]["response"]["data"];
export type ListPullsResponse = Endpoints["GET /repos/{owner}/{repo}/pulls"]["response"]["data"];
export type ListIssuesResponse = Endpoints["GET /repos/{owner}/{repo}/issues"]["response"]["data"];
export type ListReleasesResponse = Endpoints["GET /repos/{owner}/{repo}/releases"]["response"]["data"];


// type for user input
export type Input = {
  owner: string;
  repo: string;
  since: string;
  until: string;
}

// type for certain component props that need API data
// ? means optional
export type GithubData = {
  commits?: ListCommitsResponse
  pulls?: ListPullsResponse
  issues?: ListIssuesResponse
  releases?: ListReleasesResponse
}
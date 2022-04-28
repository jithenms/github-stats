import {
  ListCommitsResponse,
  ListIssuesResponse,
  ListPullsResponse,
  ListReleasesResponse,
} from "../src/types";

/* 
  Mock Data for Testing
  Check Tests for Implementation
*/

export const mockCommits = [
  {
    sha: "0e922aab41eb47687aa78fdc9753ed884c4981ff",
    node_id:
      "MDY6Q29tbWl0MjM0MTg1MTc6MGU5MjJhYWI0MWViNDc2ODdhYTc4ZmRjOTc1M2VkODg0YzQ5ODFmZg==",
    commit: {
      author: {
        name: "litao",
        email: "tomleescut@gmail.com",
        date: "2021-08-19T01:51:00Z",
      },
      committer: {
        name: "GitHub",
        email: "noreply@github.com",
        date: "2021-08-19T01:51:00Z",
      },
      message:
        "HDFS-16160. Improve the parameter annotation in DatanodeProtocol#sendHeartbeat (#3291)",
      tree: {
        sha: "6ce62d9f94d089bc2c9aa2c310d5f81ddc56fca5",
        url: "https://api.github.com/repos/apache/hadoop/git/trees/6ce62d9f94d089bc2c9aa2c310d5f81ddc56fca5",
      },
      url: "https://api.github.com/repos/apache/hadoop/git/commits/0e922aab41eb47687aa78fdc9753ed884c4981ff",
      comment_count: 0,
      verification: {
        verified: true,
        reason: "valid",
        signature:
          "-----BEGIN PGP SIGNATURE-----\n\nwsBcBAABCAAQBQJhHbkECRBK7hj4Ov3rIwAAANcIACAMEjae+raYOuAtHJSbIpAs\nOu7V2kiUfOc7p0D+wfmzMN3eZrx9yxfNoWL6Rvsffd+vbsj1H8y37pZAE1DVR+MM\no7eEwLuzsKSSnyAZ9Y/FBhOofcR5e4u2sUGRQcpdcPv6skSHv5bRsqhykmnHv8wn\nrdytZsEevRzhFqZc44CrxergVBlS2rFWf/IRL4BnAbdEBHKjxAr7elac+uvhl+AJ\n5b3qTsdiQSkIXuF7mCxgRInv9EMr1HV+vwnqRCgmpROzUGV09DGHRQLVl2OKwMLk\nKBmodkRK9SOcY+TAIjY3pSiaaqe0NFK/7T3ziQSu8Jzq5Hlv4KWyKH1u9lP3vfs=\n=F8aY\n-----END PGP SIGNATURE-----\n",
        payload:
          "tree 6ce62d9f94d089bc2c9aa2c310d5f81ddc56fca5\nparent dcddc6a59f687f40062383aec2fbb548d011821d\nauthor litao <tomleescut@gmail.com> 1629337860 +0800\ncommitter GitHub <noreply@github.com> 1629337860 +0800\n\nHDFS-16160. Improve the parameter annotation in DatanodeProtocol#sendHeartbeat (#3291)\n\n",
      },
    },
    url: "https://api.github.com/repos/apache/hadoop/commits/0e922aab41eb47687aa78fdc9753ed884c4981ff",
    html_url:
      "https://github.com/apache/hadoop/commit/0e922aab41eb47687aa78fdc9753ed884c4981ff",
    comments_url:
      "https://api.github.com/repos/apache/hadoop/commits/0e922aab41eb47687aa78fdc9753ed884c4981ff/comments",
    author: {
      login: "tomscut",
      id: 55134131,
      node_id: "MDQ6VXNlcjU1MTM0MTMx",
      avatar_url: "https://avatars.githubusercontent.com/u/55134131?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/tomscut",
      html_url: "https://github.com/tomscut",
      followers_url: "https://api.github.com/users/tomscut/followers",
      following_url:
        "https://api.github.com/users/tomscut/following{/other_user}",
      gists_url: "https://api.github.com/users/tomscut/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/tomscut/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/tomscut/subscriptions",
      organizations_url: "https://api.github.com/users/tomscut/orgs",
      repos_url: "https://api.github.com/users/tomscut/repos",
      events_url: "https://api.github.com/users/tomscut/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/tomscut/received_events",
      type: "User",
      site_admin: false,
    },
    committer: {
      login: "web-flow",
      id: 19864447,
      node_id: "MDQ6VXNlcjE5ODY0NDQ3",
      avatar_url: "https://avatars.githubusercontent.com/u/19864447?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/web-flow",
      html_url: "https://github.com/web-flow",
      followers_url: "https://api.github.com/users/web-flow/followers",
      following_url:
        "https://api.github.com/users/web-flow/following{/other_user}",
      gists_url: "https://api.github.com/users/web-flow/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/web-flow/subscriptions",
      organizations_url: "https://api.github.com/users/web-flow/orgs",
      repos_url: "https://api.github.com/users/web-flow/repos",
      events_url: "https://api.github.com/users/web-flow/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/web-flow/received_events",
      type: "User",
      site_admin: false,
    },
    parents: [
      {
        sha: "dcddc6a59f687f40062383aec2fbb548d011821d",
        url: "https://api.github.com/repos/apache/hadoop/commits/dcddc6a59f687f40062383aec2fbb548d011821d",
        html_url:
          "https://github.com/apache/hadoop/commit/dcddc6a59f687f40062383aec2fbb548d011821d",
      },
    ],
  },
  {
    sha: "dcddc6a59f687f40062383aec2fbb548d011821d",
    node_id:
      "MDY6Q29tbWl0MjM0MTg1MTc6ZGNkZGM2YTU5ZjY4N2Y0MDA2MjM4M2FlYzJmYmI1NDhkMDExODIxZA==",
    commit: {
      author: {
        name: "sumangala-patki",
        email: "70206833+sumangala-patki@users.noreply.github.com",
        date: "2021-08-18T13:44:10Z",
      },
      committer: {
        name: "GitHub",
        email: "noreply@github.com",
        date: "2021-08-18T13:44:10Z",
      },
      message:
        "HADOOP-17682. ABFS: Support FileStatus input to OpenFileWithOptions() via OpenFileParameters (#2975)",
      tree: {
        sha: "8cbcff4b3008ad5b3b3abc82a4011f95dd00d46c",
        url: "https://api.github.com/repos/apache/hadoop/git/trees/8cbcff4b3008ad5b3b3abc82a4011f95dd00d46c",
      },
      url: "https://api.github.com/repos/apache/hadoop/git/commits/dcddc6a59f687f40062383aec2fbb548d011821d",
      comment_count: 0,
      verification: {
        verified: true,
        reason: "valid",
        signature:
          "-----BEGIN PGP SIGNATURE-----\n\nwsBcBAABCAAQBQJhHQ6qCRBK7hj4Ov3rIwAAx/sIAJAYyHr6CfbjYRMcPDOQKOwL\nE6/kFk6DoJClPKHpWU+6Dj2I2YsmRaJaHLr1jPxveiJSdSKQnZQavoti4vaHZdNJ\nmga+API9jpmynku2osKW8GKTENgkvRqV/URLuADmPT+LnEaqVTrnMvGTLQsYBeZc\nZ+3U+GTZwF8DJTrEBOsCicikFS+tJYCYp4BudoytTlHOZ8UtovAGxrQulBjBSqFF\npugpXfOuQxsefuWRyborrHrdnvjx2iTxuBgOg6kdydoF1dNAAWP1HRDm00LyaS8J\nQl7DO0JCILJFImium4atXSRPj0iVJBs/DziZGWn+oTY4rHUYvGC0ISCz46WlNUk=\n=QfUz\n-----END PGP SIGNATURE-----\n",
        payload:
          "tree 8cbcff4b3008ad5b3b3abc82a4011f95dd00d46c\nparent ee07b9028614843a7594ce1534e21e6feebc5fdc\nauthor sumangala-patki <70206833+sumangala-patki@users.noreply.github.com> 1629294250 +0530\ncommitter GitHub <noreply@github.com> 1629294250 +0530\n\nHADOOP-17682. ABFS: Support FileStatus input to OpenFileWithOptions() via OpenFileParameters (#2975)\n\n",
      },
    },
    url: "https://api.github.com/repos/apache/hadoop/commits/dcddc6a59f687f40062383aec2fbb548d011821d",
    html_url:
      "https://github.com/apache/hadoop/commit/dcddc6a59f687f40062383aec2fbb548d011821d",
    comments_url:
      "https://api.github.com/repos/apache/hadoop/commits/dcddc6a59f687f40062383aec2fbb548d011821d/comments",
    author: {
      login: "sumangala-patki",
      id: 70206833,
      node_id: "MDQ6VXNlcjcwMjA2ODMz",
      avatar_url: "https://avatars.githubusercontent.com/u/70206833?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/sumangala-patki",
      html_url: "https://github.com/sumangala-patki",
      followers_url: "https://api.github.com/users/sumangala-patki/followers",
      following_url:
        "https://api.github.com/users/sumangala-patki/following{/other_user}",
      gists_url: "https://api.github.com/users/sumangala-patki/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/sumangala-patki/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/sumangala-patki/subscriptions",
      organizations_url: "https://api.github.com/users/sumangala-patki/orgs",
      repos_url: "https://api.github.com/users/sumangala-patki/repos",
      events_url:
        "https://api.github.com/users/sumangala-patki/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/sumangala-patki/received_events",
      type: "User",
      site_admin: false,
    },
    committer: {
      login: "web-flow",
      id: 19864447,
      node_id: "MDQ6VXNlcjE5ODY0NDQ3",
      avatar_url: "https://avatars.githubusercontent.com/u/19864447?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/web-flow",
      html_url: "https://github.com/web-flow",
      followers_url: "https://api.github.com/users/web-flow/followers",
      following_url:
        "https://api.github.com/users/web-flow/following{/other_user}",
      gists_url: "https://api.github.com/users/web-flow/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/web-flow/subscriptions",
      organizations_url: "https://api.github.com/users/web-flow/orgs",
      repos_url: "https://api.github.com/users/web-flow/repos",
      events_url: "https://api.github.com/users/web-flow/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/web-flow/received_events",
      type: "User",
      site_admin: false,
    },
    parents: [
      {
        sha: "ee07b9028614843a7594ce1534e21e6feebc5fdc",
        url: "https://api.github.com/repos/apache/hadoop/commits/ee07b9028614843a7594ce1534e21e6feebc5fdc",
        html_url:
          "https://github.com/apache/hadoop/commit/ee07b9028614843a7594ce1534e21e6feebc5fdc",
      },
    ],
  },
];

export const mockPulls = [
  {
    url: "https://api.github.com/repos/facebook/react/pulls/24322",
    id: 904315907,
    node_id: "PR_kwDOAJy2Ks415sQD",
    html_url: "https://github.com/facebook/react/pull/24322",
    diff_url: "https://github.com/facebook/react/pull/24322.diff",
    patch_url: "https://github.com/facebook/react/pull/24322.patch",
    issue_url: "https://api.github.com/repos/facebook/react/issues/24322",
    number: 24322,
    state: "open",
    locked: false,
    title: "Use FB specific stream config for native-relay",
    user: {
      login: "sebmarkbage",
      id: 63648,
      node_id: "MDQ6VXNlcjYzNjQ4",
      avatar_url: "https://avatars.githubusercontent.com/u/63648?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/sebmarkbage",
      html_url: "https://github.com/sebmarkbage",
      followers_url: "https://api.github.com/users/sebmarkbage/followers",
      following_url:
        "https://api.github.com/users/sebmarkbage/following{/other_user}",
      gists_url: "https://api.github.com/users/sebmarkbage/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/sebmarkbage/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/sebmarkbage/subscriptions",
      organizations_url: "https://api.github.com/users/sebmarkbage/orgs",
      repos_url: "https://api.github.com/users/sebmarkbage/repos",
      events_url: "https://api.github.com/users/sebmarkbage/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/sebmarkbage/received_events",
      type: "User",
      site_admin: false,
    },
    body: "This is not really used yet but for parity with the dom-relay implementation this should use the FB-specific fake stream protocol and not the Node protocol. For Server Components for Native.",
    created_at: "2022-04-09T00:17:12Z",
    updated_at: "2022-04-09T00:40:36Z",
    closed_at: null,
    merged_at: null,
    merge_commit_sha: "30f6ce0fcb5f03795e16007fd0bd046de09d0d86",
    assignee: null,
    assignees: [],
    requested_reviewers: [
      {
        login: "gnoff",
        id: 2716369,
        node_id: "MDQ6VXNlcjI3MTYzNjk=",
        avatar_url: "https://avatars.githubusercontent.com/u/2716369?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/gnoff",
        html_url: "https://github.com/gnoff",
        followers_url: "https://api.github.com/users/gnoff/followers",
        following_url:
          "https://api.github.com/users/gnoff/following{/other_user}",
        gists_url: "https://api.github.com/users/gnoff/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/gnoff/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/gnoff/subscriptions",
        organizations_url: "https://api.github.com/users/gnoff/orgs",
        repos_url: "https://api.github.com/users/gnoff/repos",
        events_url: "https://api.github.com/users/gnoff/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/gnoff/received_events",
        type: "User",
        site_admin: false,
      },
    ],
    requested_teams: [],
    labels: [
      {
        id: 196858374,
        node_id: "MDU6TGFiZWwxOTY4NTgzNzQ=",
        url: "https://api.github.com/repos/facebook/react/labels/CLA%20Signed",
        name: "CLA Signed",
        color: "e7e7e7",
        default: false,
        // issue with actual null here
        description: "null",
      },
    ],
    milestone: null,
    draft: false,
    commits_url:
      "https://api.github.com/repos/facebook/react/pulls/24322/commits",
    review_comments_url:
      "https://api.github.com/repos/facebook/react/pulls/24322/comments",
    review_comment_url:
      "https://api.github.com/repos/facebook/react/pulls/comments{/number}",
    comments_url:
      "https://api.github.com/repos/facebook/react/issues/24322/comments",
    statuses_url:
      "https://api.github.com/repos/facebook/react/statuses/d00b9cc86045fc1a739113c1446213159fb60d39",
    head: {
      label: "sebmarkbage:nativerelay",
      ref: "nativerelay",
      sha: "d00b9cc86045fc1a739113c1446213159fb60d39",
      user: {
        login: "sebmarkbage",
        id: 63648,
        node_id: "MDQ6VXNlcjYzNjQ4",
        avatar_url: "https://avatars.githubusercontent.com/u/63648?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/sebmarkbage",
        html_url: "https://github.com/sebmarkbage",
        followers_url: "https://api.github.com/users/sebmarkbage/followers",
        following_url:
          "https://api.github.com/users/sebmarkbage/following{/other_user}",
        gists_url: "https://api.github.com/users/sebmarkbage/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/sebmarkbage/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/sebmarkbage/subscriptions",
        organizations_url: "https://api.github.com/users/sebmarkbage/orgs",
        repos_url: "https://api.github.com/users/sebmarkbage/repos",
        events_url: "https://api.github.com/users/sebmarkbage/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/sebmarkbage/received_events",
        type: "User",
        site_admin: false,
      },
      repo: {
        id: 10374314,
        node_id: "MDEwOlJlcG9zaXRvcnkxMDM3NDMxNA==",
        name: "react",
        full_name: "sebmarkbage/react",
        private: false,
        owner: {
          login: "sebmarkbage",
          id: 63648,
          node_id: "MDQ6VXNlcjYzNjQ4",
          avatar_url: "https://avatars.githubusercontent.com/u/63648?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/sebmarkbage",
          html_url: "https://github.com/sebmarkbage",
          followers_url: "https://api.github.com/users/sebmarkbage/followers",
          following_url:
            "https://api.github.com/users/sebmarkbage/following{/other_user}",
          gists_url: "https://api.github.com/users/sebmarkbage/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/sebmarkbage/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/sebmarkbage/subscriptions",
          organizations_url: "https://api.github.com/users/sebmarkbage/orgs",
          repos_url: "https://api.github.com/users/sebmarkbage/repos",
          events_url:
            "https://api.github.com/users/sebmarkbage/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/sebmarkbage/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/sebmarkbage/react",
        description:
          "React is a JavaScript library for building user interfaces.",
        fork: true,
        url: "https://api.github.com/repos/sebmarkbage/react",
        forks_url: "https://api.github.com/repos/sebmarkbage/react/forks",
        keys_url:
          "https://api.github.com/repos/sebmarkbage/react/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/sebmarkbage/react/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/sebmarkbage/react/teams",
        hooks_url: "https://api.github.com/repos/sebmarkbage/react/hooks",
        issue_events_url:
          "https://api.github.com/repos/sebmarkbage/react/issues/events{/number}",
        events_url: "https://api.github.com/repos/sebmarkbage/react/events",
        assignees_url:
          "https://api.github.com/repos/sebmarkbage/react/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/sebmarkbage/react/branches{/branch}",
        tags_url: "https://api.github.com/repos/sebmarkbage/react/tags",
        blobs_url:
          "https://api.github.com/repos/sebmarkbage/react/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/sebmarkbage/react/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/sebmarkbage/react/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/sebmarkbage/react/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/sebmarkbage/react/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/sebmarkbage/react/languages",
        stargazers_url:
          "https://api.github.com/repos/sebmarkbage/react/stargazers",
        contributors_url:
          "https://api.github.com/repos/sebmarkbage/react/contributors",
        subscribers_url:
          "https://api.github.com/repos/sebmarkbage/react/subscribers",
        subscription_url:
          "https://api.github.com/repos/sebmarkbage/react/subscription",
        commits_url:
          "https://api.github.com/repos/sebmarkbage/react/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/sebmarkbage/react/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/sebmarkbage/react/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/sebmarkbage/react/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/sebmarkbage/react/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/sebmarkbage/react/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/sebmarkbage/react/merges",
        archive_url:
          "https://api.github.com/repos/sebmarkbage/react/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/sebmarkbage/react/downloads",
        issues_url:
          "https://api.github.com/repos/sebmarkbage/react/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/sebmarkbage/react/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/sebmarkbage/react/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/sebmarkbage/react/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/sebmarkbage/react/labels{/name}",
        releases_url:
          "https://api.github.com/repos/sebmarkbage/react/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/sebmarkbage/react/deployments",
        created_at: "2013-05-30T03:09:16Z",
        updated_at: "2021-12-23T02:04:41Z",
        pushed_at: "2022-04-09T00:15:37Z",
        git_url: "git://github.com/sebmarkbage/react.git",
        ssh_url: "git@github.com:sebmarkbage/react.git",
        clone_url: "https://github.com/sebmarkbage/react.git",
        svn_url: "https://github.com/sebmarkbage/react",
        homepage: "http://facebook.github.io/react/",
        size: 127049,
        stargazers_count: 13,
        watchers_count: 13,
        language: "JavaScript",
        has_issues: false,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 2,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: {
          key: "apache-2.0",
          name: "Apache License 2.0",
          spdx_id: "Apache-2.0",
          url: "https://api.github.com/licenses/apache-2.0",
          node_id: "MDc6TGljZW5zZTI=",
        },
        allow_forking: true,
        is_template: false,
        topics: [],
        visibility: "public",
        forks: 2,
        open_issues: 0,
        watchers: 13,
        default_branch: "master",
      },
    },
    base: {
      label: "facebook:main",
      ref: "main",
      sha: "b0f13e5d391c0deba4327eb15c07e7321f3a871e",
      user: {
        login: "facebook",
        id: 69631,
        node_id: "MDEyOk9yZ2FuaXphdGlvbjY5NjMx",
        avatar_url: "https://avatars.githubusercontent.com/u/69631?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/facebook",
        html_url: "https://github.com/facebook",
        followers_url: "https://api.github.com/users/facebook/followers",
        following_url:
          "https://api.github.com/users/facebook/following{/other_user}",
        gists_url: "https://api.github.com/users/facebook/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/facebook/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/facebook/subscriptions",
        organizations_url: "https://api.github.com/users/facebook/orgs",
        repos_url: "https://api.github.com/users/facebook/repos",
        events_url: "https://api.github.com/users/facebook/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/facebook/received_events",
        type: "Organization",
        site_admin: false,
      },
      repo: {
        id: 10270250,
        node_id: "MDEwOlJlcG9zaXRvcnkxMDI3MDI1MA==",
        name: "react",
        full_name: "facebook/react",
        private: false,
        owner: {
          login: "facebook",
          id: 69631,
          node_id: "MDEyOk9yZ2FuaXphdGlvbjY5NjMx",
          avatar_url: "https://avatars.githubusercontent.com/u/69631?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/facebook",
          html_url: "https://github.com/facebook",
          followers_url: "https://api.github.com/users/facebook/followers",
          following_url:
            "https://api.github.com/users/facebook/following{/other_user}",
          gists_url: "https://api.github.com/users/facebook/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/facebook/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/facebook/subscriptions",
          organizations_url: "https://api.github.com/users/facebook/orgs",
          repos_url: "https://api.github.com/users/facebook/repos",
          events_url: "https://api.github.com/users/facebook/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/facebook/received_events",
          type: "Organization",
          site_admin: false,
        },
        html_url: "https://github.com/facebook/react",
        description:
          "A declarative, efficient, and flexible JavaScript library for building user interfaces.",
        fork: false,
        url: "https://api.github.com/repos/facebook/react",
        forks_url: "https://api.github.com/repos/facebook/react/forks",
        keys_url: "https://api.github.com/repos/facebook/react/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/facebook/react/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/facebook/react/teams",
        hooks_url: "https://api.github.com/repos/facebook/react/hooks",
        issue_events_url:
          "https://api.github.com/repos/facebook/react/issues/events{/number}",
        events_url: "https://api.github.com/repos/facebook/react/events",
        assignees_url:
          "https://api.github.com/repos/facebook/react/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/facebook/react/branches{/branch}",
        tags_url: "https://api.github.com/repos/facebook/react/tags",
        blobs_url:
          "https://api.github.com/repos/facebook/react/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/facebook/react/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/facebook/react/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/facebook/react/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/facebook/react/statuses/{sha}",
        languages_url: "https://api.github.com/repos/facebook/react/languages",
        stargazers_url:
          "https://api.github.com/repos/facebook/react/stargazers",
        contributors_url:
          "https://api.github.com/repos/facebook/react/contributors",
        subscribers_url:
          "https://api.github.com/repos/facebook/react/subscribers",
        subscription_url:
          "https://api.github.com/repos/facebook/react/subscription",
        commits_url:
          "https://api.github.com/repos/facebook/react/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/facebook/react/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/facebook/react/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/facebook/react/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/facebook/react/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/facebook/react/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/facebook/react/merges",
        archive_url:
          "https://api.github.com/repos/facebook/react/{archive_format}{/ref}",
        downloads_url: "https://api.github.com/repos/facebook/react/downloads",
        issues_url:
          "https://api.github.com/repos/facebook/react/issues{/number}",
        pulls_url: "https://api.github.com/repos/facebook/react/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/facebook/react/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/facebook/react/notifications{?since,all,participating}",
        labels_url: "https://api.github.com/repos/facebook/react/labels{/name}",
        releases_url:
          "https://api.github.com/repos/facebook/react/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/facebook/react/deployments",
        created_at: "2013-05-24T16:15:54Z",
        updated_at: "2022-04-10T02:46:45Z",
        pushed_at: "2022-04-09T20:01:30Z",
        git_url: "git://github.com/facebook/react.git",
        ssh_url: "git@github.com:facebook/react.git",
        clone_url: "https://github.com/facebook/react.git",
        svn_url: "https://github.com/facebook/react",
        homepage: "https://reactjs.org",
        size: 176584,
        stargazers_count: 186039,
        watchers_count: 186039,
        language: "JavaScript",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: true,
        forks_count: 38199,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 915,
        license: {
          key: "mit",
          name: "MIT License",
          spdx_id: "MIT",
          url: "https://api.github.com/licenses/mit",
          node_id: "MDc6TGljZW5zZTEz",
        },
        allow_forking: true,
        is_template: false,
        topics: [
          "declarative",
          "frontend",
          "javascript",
          "library",
          "react",
          "ui",
        ],
        visibility: "public",
        forks: 38199,
        open_issues: 915,
        watchers: 186039,
        default_branch: "main",
      },
    },
    _links: {
      self: {
        href: "https://api.github.com/repos/facebook/react/pulls/24322",
      },
      html: {
        href: "https://github.com/facebook/react/pull/24322",
      },
      issue: {
        href: "https://api.github.com/repos/facebook/react/issues/24322",
      },
      comments: {
        href: "https://api.github.com/repos/facebook/react/issues/24322/comments",
      },
      review_comments: {
        href: "https://api.github.com/repos/facebook/react/pulls/24322/comments",
      },
      review_comment: {
        href: "https://api.github.com/repos/facebook/react/pulls/comments{/number}",
      },
      commits: {
        href: "https://api.github.com/repos/facebook/react/pulls/24322/commits",
      },
      statuses: {
        href: "https://api.github.com/repos/facebook/react/statuses/d00b9cc86045fc1a739113c1446213159fb60d39",
      },
    },
    author_association: "COLLABORATOR",
    auto_merge: null,
    active_lock_reason: null,
  },
  {
    url: "https://api.github.com/repos/facebook/react/pulls/24314",
    id: 903881615,
    node_id: "PR_kwDOAJy2Ks414COP",
    html_url: "https://github.com/facebook/react/pull/24314",
    diff_url: "https://github.com/facebook/react/pull/24314.diff",
    patch_url: "https://github.com/facebook/react/pull/24314.patch",
    issue_url: "https://api.github.com/repos/facebook/react/issues/24314",
    number: 24314,
    state: "open",
    locked: false,
    title:
      "[Flight] Add a better error message for undefined server components",
    user: {
      login: "jplhomer",
      id: 848147,
      node_id: "MDQ6VXNlcjg0ODE0Nw==",
      avatar_url: "https://avatars.githubusercontent.com/u/848147?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/jplhomer",
      html_url: "https://github.com/jplhomer",
      followers_url: "https://api.github.com/users/jplhomer/followers",
      following_url:
        "https://api.github.com/users/jplhomer/following{/other_user}",
      gists_url: "https://api.github.com/users/jplhomer/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/jplhomer/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/jplhomer/subscriptions",
      organizations_url: "https://api.github.com/users/jplhomer/orgs",
      repos_url: "https://api.github.com/users/jplhomer/repos",
      events_url: "https://api.github.com/users/jplhomer/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/jplhomer/received_events",
      type: "User",
      site_admin: false,
    },
    body: '## Summary\r\n\r\nUsers who accidentally mix up default and named imports inside server components are confronted with the following error currently:\r\n\r\n<img width="1430" alt="Screen Shot 2022-04-08 at 8 08 34 AM" src="https://user-images.githubusercontent.com/848147/162451149-2651f93c-4d84-4567-b2aa-3228dbe422d1.png">\r\n\r\nThis is not helpful during development.\r\n\r\nThis PR uses the same message used in React Fizz Server, for example.\r\n\r\n## How did you test this change?\r\n\r\nThere are not any raw tests for ReactFlightServer, so it was difficult to test this change. Open to suggestions on testing this.\r\n',
    created_at: "2022-04-08T14:00:47Z",
    updated_at: "2022-04-09T02:37:55Z",
    closed_at: null,
    merged_at: null,
    merge_commit_sha: "457bcfaba5ae24bcf4a0eb259d0edcd4a3f112fc",
    assignee: null,
    assignees: [],
    requested_reviewers: [],
    requested_teams: [],
    labels: [
      {
        id: 196858374,
        node_id: "MDU6TGFiZWwxOTY4NTgzNzQ=",
        url: "https://api.github.com/repos/facebook/react/labels/CLA%20Signed",
        name: "CLA Signed",
        color: "e7e7e7",
        default: false,
        // issue with actual null here?
        description: "null",
      },
    ],
    milestone: null,
    draft: false,
    commits_url:
      "https://api.github.com/repos/facebook/react/pulls/24314/commits",
    review_comments_url:
      "https://api.github.com/repos/facebook/react/pulls/24314/comments",
    review_comment_url:
      "https://api.github.com/repos/facebook/react/pulls/comments{/number}",
    comments_url:
      "https://api.github.com/repos/facebook/react/issues/24314/comments",
    statuses_url:
      "https://api.github.com/repos/facebook/react/statuses/a8ea508f6acf5acd140461bbfa3316892a730f8c",
    head: {
      label: "jplhomer:jl-better-error-undefined-server-components",
      ref: "jl-better-error-undefined-server-components",
      sha: "a8ea508f6acf5acd140461bbfa3316892a730f8c",
      user: {
        login: "jplhomer",
        id: 848147,
        node_id: "MDQ6VXNlcjg0ODE0Nw==",
        avatar_url: "https://avatars.githubusercontent.com/u/848147?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/jplhomer",
        html_url: "https://github.com/jplhomer",
        followers_url: "https://api.github.com/users/jplhomer/followers",
        following_url:
          "https://api.github.com/users/jplhomer/following{/other_user}",
        gists_url: "https://api.github.com/users/jplhomer/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/jplhomer/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/jplhomer/subscriptions",
        organizations_url: "https://api.github.com/users/jplhomer/orgs",
        repos_url: "https://api.github.com/users/jplhomer/repos",
        events_url: "https://api.github.com/users/jplhomer/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/jplhomer/received_events",
        type: "User",
        site_admin: false,
      },
      repo: {
        id: 433940800,
        node_id: "R_kgDOGd1pQA",
        name: "react",
        full_name: "jplhomer/react",
        private: false,
        owner: {
          login: "jplhomer",
          id: 848147,
          node_id: "MDQ6VXNlcjg0ODE0Nw==",
          avatar_url: "https://avatars.githubusercontent.com/u/848147?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/jplhomer",
          html_url: "https://github.com/jplhomer",
          followers_url: "https://api.github.com/users/jplhomer/followers",
          following_url:
            "https://api.github.com/users/jplhomer/following{/other_user}",
          gists_url: "https://api.github.com/users/jplhomer/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/jplhomer/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/jplhomer/subscriptions",
          organizations_url: "https://api.github.com/users/jplhomer/orgs",
          repos_url: "https://api.github.com/users/jplhomer/repos",
          events_url: "https://api.github.com/users/jplhomer/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/jplhomer/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/jplhomer/react",
        description:
          "A declarative, efficient, and flexible JavaScript library for building user interfaces.",
        fork: true,
        url: "https://api.github.com/repos/jplhomer/react",
        forks_url: "https://api.github.com/repos/jplhomer/react/forks",
        keys_url: "https://api.github.com/repos/jplhomer/react/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/jplhomer/react/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/jplhomer/react/teams",
        hooks_url: "https://api.github.com/repos/jplhomer/react/hooks",
        issue_events_url:
          "https://api.github.com/repos/jplhomer/react/issues/events{/number}",
        events_url: "https://api.github.com/repos/jplhomer/react/events",
        assignees_url:
          "https://api.github.com/repos/jplhomer/react/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/jplhomer/react/branches{/branch}",
        tags_url: "https://api.github.com/repos/jplhomer/react/tags",
        blobs_url:
          "https://api.github.com/repos/jplhomer/react/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/jplhomer/react/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/jplhomer/react/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/jplhomer/react/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/jplhomer/react/statuses/{sha}",
        languages_url: "https://api.github.com/repos/jplhomer/react/languages",
        stargazers_url:
          "https://api.github.com/repos/jplhomer/react/stargazers",
        contributors_url:
          "https://api.github.com/repos/jplhomer/react/contributors",
        subscribers_url:
          "https://api.github.com/repos/jplhomer/react/subscribers",
        subscription_url:
          "https://api.github.com/repos/jplhomer/react/subscription",
        commits_url:
          "https://api.github.com/repos/jplhomer/react/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/jplhomer/react/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/jplhomer/react/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/jplhomer/react/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/jplhomer/react/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/jplhomer/react/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/jplhomer/react/merges",
        archive_url:
          "https://api.github.com/repos/jplhomer/react/{archive_format}{/ref}",
        downloads_url: "https://api.github.com/repos/jplhomer/react/downloads",
        issues_url:
          "https://api.github.com/repos/jplhomer/react/issues{/number}",
        pulls_url: "https://api.github.com/repos/jplhomer/react/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/jplhomer/react/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/jplhomer/react/notifications{?since,all,participating}",
        labels_url: "https://api.github.com/repos/jplhomer/react/labels{/name}",
        releases_url:
          "https://api.github.com/repos/jplhomer/react/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/jplhomer/react/deployments",
        created_at: "2021-12-01T18:28:33Z",
        updated_at: "2021-12-01T18:28:35Z",
        pushed_at: "2022-04-08T15:27:48Z",
        git_url: "git://github.com/jplhomer/react.git",
        ssh_url: "git@github.com:jplhomer/react.git",
        clone_url: "https://github.com/jplhomer/react.git",
        svn_url: "https://github.com/jplhomer/react",
        homepage: "https://reactjs.org",
        size: 176163,
        stargazers_count: 0,
        watchers_count: 0,
        language: null,
        has_issues: false,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: {
          key: "mit",
          name: "MIT License",
          spdx_id: "MIT",
          url: "https://api.github.com/licenses/mit",
          node_id: "MDc6TGljZW5zZTEz",
        },
        allow_forking: true,
        is_template: false,
        topics: [],
        visibility: "public",
        forks: 0,
        open_issues: 0,
        watchers: 0,
        default_branch: "main",
      },
    },
    base: {
      label: "facebook:main",
      ref: "main",
      sha: "65f35035a6184865c495934c89477a4d507fba1a",
      user: {
        login: "facebook",
        id: 69631,
        node_id: "MDEyOk9yZ2FuaXphdGlvbjY5NjMx",
        avatar_url: "https://avatars.githubusercontent.com/u/69631?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/facebook",
        html_url: "https://github.com/facebook",
        followers_url: "https://api.github.com/users/facebook/followers",
        following_url:
          "https://api.github.com/users/facebook/following{/other_user}",
        gists_url: "https://api.github.com/users/facebook/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/facebook/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/facebook/subscriptions",
        organizations_url: "https://api.github.com/users/facebook/orgs",
        repos_url: "https://api.github.com/users/facebook/repos",
        events_url: "https://api.github.com/users/facebook/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/facebook/received_events",
        type: "Organization",
        site_admin: false,
      },
      repo: {
        id: 10270250,
        node_id: "MDEwOlJlcG9zaXRvcnkxMDI3MDI1MA==",
        name: "react",
        full_name: "facebook/react",
        private: false,
        owner: {
          login: "facebook",
          id: 69631,
          node_id: "MDEyOk9yZ2FuaXphdGlvbjY5NjMx",
          avatar_url: "https://avatars.githubusercontent.com/u/69631?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/facebook",
          html_url: "https://github.com/facebook",
          followers_url: "https://api.github.com/users/facebook/followers",
          following_url:
            "https://api.github.com/users/facebook/following{/other_user}",
          gists_url: "https://api.github.com/users/facebook/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/facebook/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/facebook/subscriptions",
          organizations_url: "https://api.github.com/users/facebook/orgs",
          repos_url: "https://api.github.com/users/facebook/repos",
          events_url: "https://api.github.com/users/facebook/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/facebook/received_events",
          type: "Organization",
          site_admin: false,
        },
        html_url: "https://github.com/facebook/react",
        description:
          "A declarative, efficient, and flexible JavaScript library for building user interfaces.",
        fork: false,
        url: "https://api.github.com/repos/facebook/react",
        forks_url: "https://api.github.com/repos/facebook/react/forks",
        keys_url: "https://api.github.com/repos/facebook/react/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/facebook/react/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/facebook/react/teams",
        hooks_url: "https://api.github.com/repos/facebook/react/hooks",
        issue_events_url:
          "https://api.github.com/repos/facebook/react/issues/events{/number}",
        events_url: "https://api.github.com/repos/facebook/react/events",
        assignees_url:
          "https://api.github.com/repos/facebook/react/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/facebook/react/branches{/branch}",
        tags_url: "https://api.github.com/repos/facebook/react/tags",
        blobs_url:
          "https://api.github.com/repos/facebook/react/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/facebook/react/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/facebook/react/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/facebook/react/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/facebook/react/statuses/{sha}",
        languages_url: "https://api.github.com/repos/facebook/react/languages",
        stargazers_url:
          "https://api.github.com/repos/facebook/react/stargazers",
        contributors_url:
          "https://api.github.com/repos/facebook/react/contributors",
        subscribers_url:
          "https://api.github.com/repos/facebook/react/subscribers",
        subscription_url:
          "https://api.github.com/repos/facebook/react/subscription",
        commits_url:
          "https://api.github.com/repos/facebook/react/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/facebook/react/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/facebook/react/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/facebook/react/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/facebook/react/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/facebook/react/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/facebook/react/merges",
        archive_url:
          "https://api.github.com/repos/facebook/react/{archive_format}{/ref}",
        downloads_url: "https://api.github.com/repos/facebook/react/downloads",
        issues_url:
          "https://api.github.com/repos/facebook/react/issues{/number}",
        pulls_url: "https://api.github.com/repos/facebook/react/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/facebook/react/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/facebook/react/notifications{?since,all,participating}",
        labels_url: "https://api.github.com/repos/facebook/react/labels{/name}",
        releases_url:
          "https://api.github.com/repos/facebook/react/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/facebook/react/deployments",
        created_at: "2013-05-24T16:15:54Z",
        updated_at: "2022-04-10T02:46:45Z",
        pushed_at: "2022-04-09T20:01:30Z",
        git_url: "git://github.com/facebook/react.git",
        ssh_url: "git@github.com:facebook/react.git",
        clone_url: "https://github.com/facebook/react.git",
        svn_url: "https://github.com/facebook/react",
        homepage: "https://reactjs.org",
        size: 176584,
        stargazers_count: 186039,
        watchers_count: 186039,
        language: "JavaScript",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: true,
        forks_count: 38199,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 915,
        license: {
          key: "mit",
          name: "MIT License",
          spdx_id: "MIT",
          url: "https://api.github.com/licenses/mit",
          node_id: "MDc6TGljZW5zZTEz",
        },
        allow_forking: true,
        is_template: false,
        topics: [
          "declarative",
          "frontend",
          "javascript",
          "library",
          "react",
          "ui",
        ],
        visibility: "public",
        forks: 38199,
        open_issues: 915,
        watchers: 186039,
        default_branch: "main",
      },
    },
    _links: {
      self: {
        href: "https://api.github.com/repos/facebook/react/pulls/24314",
      },
      html: {
        href: "https://github.com/facebook/react/pull/24314",
      },
      issue: {
        href: "https://api.github.com/repos/facebook/react/issues/24314",
      },
      comments: {
        href: "https://api.github.com/repos/facebook/react/issues/24314/comments",
      },
      review_comments: {
        href: "https://api.github.com/repos/facebook/react/pulls/24314/comments",
      },
      review_comment: {
        href: "https://api.github.com/repos/facebook/react/pulls/comments{/number}",
      },
      commits: {
        href: "https://api.github.com/repos/facebook/react/pulls/24314/commits",
      },
      statuses: {
        href: "https://api.github.com/repos/facebook/react/statuses/a8ea508f6acf5acd140461bbfa3316892a730f8c",
      },
    },
    author_association: "CONTRIBUTOR",
    auto_merge: null,
    active_lock_reason: null,
  },
];

export const mockIssues = [
  {
    url: "https://api.github.com/repos/facebook/react/issues/24333",
    repository_url: "https://api.github.com/repos/facebook/react",
    labels_url:
      "https://api.github.com/repos/facebook/react/issues/24333/labels{/name}",
    comments_url:
      "https://api.github.com/repos/facebook/react/issues/24333/comments",
    events_url:
      "https://api.github.com/repos/facebook/react/issues/24333/events",
    html_url: "https://github.com/facebook/react/issues/24333",
    id: 1199041750,
    node_id: "I_kwDOAJy2Ks5Hd-zW",
    number: 24333,
    title:
      "Suggestion: Process higher priority renders after each useEffect callback",
    user: {
      login: "selsamman",
      id: 1441870,
      node_id: "MDQ6VXNlcjE0NDE4NzA=",
      avatar_url: "https://avatars.githubusercontent.com/u/1441870?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/selsamman",
      html_url: "https://github.com/selsamman",
      followers_url: "https://api.github.com/users/selsamman/followers",
      following_url:
        "https://api.github.com/users/selsamman/following{/other_user}",
      gists_url: "https://api.github.com/users/selsamman/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/selsamman/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/selsamman/subscriptions",
      organizations_url: "https://api.github.com/users/selsamman/orgs",
      repos_url: "https://api.github.com/users/selsamman/repos",
      events_url: "https://api.github.com/users/selsamman/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/selsamman/received_events",
      type: "User",
      site_admin: false,
    },
    labels: [],
    state: "open",
    locked: false,
    assignee: null,
    assignees: [],
    milestone: null,
    comments: 0,
    created_at: "2022-04-10T13:51:41Z",
    updated_at: "2022-04-10T13:51:41Z",
    closed_at: null,
    author_association: "NONE",
    active_lock_reason: null,
    body: "## React Version: 18\r\n## Steps to Reproduce:\r\nUsing the classic useDeferredValue demo which shows how an input can be responsive even when components have a slow render,  place the delay (loop) in a useEffect callback rather than in the render itself.  This can be demonstrated in this [sandbox](https://codesandbox.io/s/quirky-hofstadter-h8yvu1?file=/src/App.js).  When you check the box to make the delay in the useEffect rather than the render function the input is no longer responsive. \r\n## Current Behavior\r\nThe input is not responsive because all useEffect callbacks run to completion before the higher priority render of the input component can occur.\r\n## Expected  Behavior\r\nThe input remains responsive as the high priority render occurs after the completion of each useEffect callback.\r\n## Related\r\n While this example is contrived, a real example, where the problem was uncovered, is a fractal application that by necessity does it's canvas processing in a useEffect callback.\r\n",
    reactions: {
      url: "https://api.github.com/repos/facebook/react/issues/24333/reactions",
      total_count: 0,
      "+1": 0,
      "-1": 0,
      laugh: 0,
      hooray: 0,
      confused: 0,
      heart: 0,
      rocket: 0,
      eyes: 0,
    },
    timeline_url:
      "https://api.github.com/repos/facebook/react/issues/24333/timeline",
    performed_via_github_app: null,
  },
  {
    url: "https://api.github.com/repos/facebook/react/issues/24332",
    repository_url: "https://api.github.com/repos/facebook/react",
    labels_url:
      "https://api.github.com/repos/facebook/react/issues/24332/labels{/name}",
    comments_url:
      "https://api.github.com/repos/facebook/react/issues/24332/comments",
    events_url:
      "https://api.github.com/repos/facebook/react/issues/24332/events",
    html_url: "https://github.com/facebook/react/pull/24332",
    id: 1198981326,
    node_id: "PR_kwDOAJy2Ks419AwA",
    number: 24332,
    title: "Remove unnecessary check",
    user: {
      login: "zh-lx",
      id: 73059627,
      node_id: "MDQ6VXNlcjczMDU5NjI3",
      avatar_url: "https://avatars.githubusercontent.com/u/73059627?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/zh-lx",
      html_url: "https://github.com/zh-lx",
      followers_url: "https://api.github.com/users/zh-lx/followers",
      following_url:
        "https://api.github.com/users/zh-lx/following{/other_user}",
      gists_url: "https://api.github.com/users/zh-lx/gists{/gist_id}",
      starred_url: "https://api.github.com/users/zh-lx/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/zh-lx/subscriptions",
      organizations_url: "https://api.github.com/users/zh-lx/orgs",
      repos_url: "https://api.github.com/users/zh-lx/repos",
      events_url: "https://api.github.com/users/zh-lx/events{/privacy}",
      received_events_url: "https://api.github.com/users/zh-lx/received_events",
      type: "User",
      site_admin: false,
    },
    labels: [
      {
        id: 196858374,
        node_id: "MDU6TGFiZWwxOTY4NTgzNzQ=",
        url: "https://api.github.com/repos/facebook/react/labels/CLA%20Signed",
        name: "CLA Signed",
        color: "e7e7e7",
        default: false,
        description: null,
      },
    ],
    state: "open",
    locked: false,
    assignee: null,
    assignees: [],
    milestone: null,
    comments: 1,
    created_at: "2022-04-10T10:48:17Z",
    updated_at: "2022-04-10T10:53:00Z",
    closed_at: null,
    author_association: "CONTRIBUTOR",
    active_lock_reason: null,
    // draft: false,
    pull_request: {
      url: "https://api.github.com/repos/facebook/react/pulls/24332",
      html_url: "https://github.com/facebook/react/pull/24332",
      diff_url: "https://github.com/facebook/react/pull/24332.diff",
      patch_url: "https://github.com/facebook/react/pull/24332.patch",
      merged_at: null,
    },
    body: "<!--\r\n  Thanks for submitting a pull request!\r\n  We appreciate you spending the time to work on these changes. Please provide enough information so that others can review your pull request. The three fields below are mandatory.\r\n\r\n  Before submitting a pull request, please make sure the following is done:\r\n\r\n  1. Fork [the repository](https://github.com/facebook/react) and create your branch from `main`.\r\n  2. Run `yarn` in the repository root.\r\n  3. If you've fixed a bug or added code that should be tested, add tests!\r\n  4. Ensure the test suite passes (`yarn test`). Tip: `yarn test --watch TestName` is helpful in development.\r\n  5. Run `yarn test --prod` to test in the production environment. It supports the same options as `yarn test`.\r\n  6. If you need a debugger, run `yarn debug-test --watch TestName`, open `chrome://inspect`, and press \"Inspect\".\r\n  7. Format your code with [prettier](https://github.com/prettier/prettier) (`yarn prettier`).\r\n  8. Make sure your code lints (`yarn lint`). Tip: `yarn linc` to only check changed files.\r\n  9. Run the [Flow](https://flowtype.org/) type checks (`yarn flow`).\r\n  10. If you haven't already, complete the CLA.\r\n\r\n  Learn more about contributing: https://reactjs.org/docs/how-to-contribute.html\r\n-->\r\n\r\n## Summary\r\n\r\nWhen the code is executed to `!hasBeenInitialized && !didCheckForLazyInit`, `hasBeenInitialized ` must be false.\r\n<!--\r\n Explain the **motivation** for making this change. What existing problem does the pull request solve?\r\n-->\r\n\r\n## How did you test this change?\r\n\r\nIt does not need additional test.\r\n<!--\r\n  Demonstrate the code is solid. Example: The exact commands you ran and their output, screenshots / videos if the pull request changes the user interface.\r\n  How exactly did you verify that your PR solves the issue you wanted to solve?\r\n  If you leave this empty, your PR will very likely be closed.\r\n-->\r\n",
    reactions: {
      url: "https://api.github.com/repos/facebook/react/issues/24332/reactions",
      total_count: 0,
      "+1": 0,
      "-1": 0,
      laugh: 0,
      hooray: 0,
      confused: 0,
      heart: 0,
      rocket: 0,
      eyes: 0,
    },
    timeline_url:
      "https://api.github.com/repos/facebook/react/issues/24332/timeline",
    performed_via_github_app: null,
  },
];

export const mockReleasesOne = [
  {
    url: "https://api.github.com/repos/facebook/react/releases/19092544",
    assets_url:
      "https://api.github.com/repos/facebook/react/releases/19092544/assets",
    upload_url:
      "https://uploads.github.com/repos/facebook/react/releases/19092544/assets{?name,label}",
    html_url: "https://github.com/facebook/react/releases/tag/v16.9.0-rc.0",
    id: 19092544,
    author: {
      login: "acdlite",
      id: 3624098,
      node_id: "MDQ6VXNlcjM2MjQwOTg=",
      avatar_url: "https://avatars.githubusercontent.com/u/3624098?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/acdlite",
      html_url: "https://github.com/acdlite",
      followers_url: "https://api.github.com/users/acdlite/followers",
      following_url:
        "https://api.github.com/users/acdlite/following{/other_user}",
      gists_url: "https://api.github.com/users/acdlite/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/acdlite/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/acdlite/subscriptions",
      organizations_url: "https://api.github.com/users/acdlite/orgs",
      repos_url: "https://api.github.com/users/acdlite/repos",
      events_url: "https://api.github.com/users/acdlite/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/acdlite/received_events",
      type: "User",
      site_admin: false,
    },
    node_id: "MDc6UmVsZWFzZTE5MDkyNTQ0",
    tag_name: "v16.9.0-rc.0",
    target_commitish: "master",
    name: "",
    draft: false,
    prerelease: true,
    created_at: "2019-08-05T22:19:41Z",
    published_at: "2019-08-05T22:27:49Z",
    assets: [],
    tarball_url:
      "https://api.github.com/repos/facebook/react/tarball/v16.9.0-rc.0",
    zipball_url:
      "https://api.github.com/repos/facebook/react/zipball/v16.9.0-rc.0",
    body: "This is a release candidate for React v16.9.0.\r\n\r\nChangelog is available in https://github.com/facebook/react/pull/16254.\r\n\r\n## UMD builds\r\n• react: https://unpkg.com/react@16.9.0-rc.0/umd/\r\n• react-art: https://unpkg.com/react-art@16.9.0-rc.0/umd/\r\n• react-dom: https://unpkg.com/react-dom@16.9.0-rc.0/umd/\r\n• react-is: https://unpkg.com/react-is@16.9.0-rc.0/umd/\r\n• react-test-renderer: https://unpkg.com/react-test-renderer@16.9.0-rc.0/umd/\r\n• scheduler: https://unpkg.com/scheduler@0.15.0-rc.0/umd/",
  },
  {
    url: "https://api.github.com/repos/facebook/react/releases/19092544",
    assets_url:
      "https://api.github.com/repos/facebook/react/releases/19092544/assets",
    upload_url:
      "https://uploads.github.com/repos/facebook/react/releases/19092544/assets{?name,label}",
    html_url: "https://github.com/facebook/react/releases/tag/v16.9.0-rc.0",
    id: 19092544,
    author: {
      login: "acdlite",
      id: 3624098,
      node_id: "MDQ6VXNlcjM2MjQwOTg=",
      avatar_url: "https://avatars.githubusercontent.com/u/3624098?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/acdlite",
      html_url: "https://github.com/acdlite",
      followers_url: "https://api.github.com/users/acdlite/followers",
      following_url:
        "https://api.github.com/users/acdlite/following{/other_user}",
      gists_url: "https://api.github.com/users/acdlite/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/acdlite/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/acdlite/subscriptions",
      organizations_url: "https://api.github.com/users/acdlite/orgs",
      repos_url: "https://api.github.com/users/acdlite/repos",
      events_url: "https://api.github.com/users/acdlite/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/acdlite/received_events",
      type: "User",
      site_admin: false,
    },
    node_id: "MDc6UmVsZWFzZTE5MDkyNTQ0",
    tag_name: "v16.9.0-rc.0",
    target_commitish: "master",
    name: "",
    draft: true,
    prerelease: false,
    created_at: "2019-08-05T22:19:41Z",
    published_at: "2019-08-05T22:27:49Z",
    assets: [],
    tarball_url:
      "https://api.github.com/repos/facebook/react/tarball/v16.9.0-rc.0",
    zipball_url:
      "https://api.github.com/repos/facebook/react/zipball/v16.9.0-rc.0",
    body: "This is a release candidate for React v16.9.0.\r\n\r\nChangelog is available in https://github.com/facebook/react/pull/16254.\r\n\r\n## UMD builds\r\n• react: https://unpkg.com/react@16.9.0-rc.0/umd/\r\n• react-art: https://unpkg.com/react-art@16.9.0-rc.0/umd/\r\n• react-dom: https://unpkg.com/react-dom@16.9.0-rc.0/umd/\r\n• react-is: https://unpkg.com/react-is@16.9.0-rc.0/umd/\r\n• react-test-renderer: https://unpkg.com/react-test-renderer@16.9.0-rc.0/umd/\r\n• scheduler: https://unpkg.com/scheduler@0.15.0-rc.0/umd/",
  },
  {
    url: "https://api.github.com/repos/facebook/react/releases/19092544",
    assets_url:
      "https://api.github.com/repos/facebook/react/releases/19092544/assets",
    upload_url:
      "https://uploads.github.com/repos/facebook/react/releases/19092544/assets{?name,label}",
    html_url: "https://github.com/facebook/react/releases/tag/v16.9.0-rc.0",
    id: 19092544,
    author: {
      login: "acdlite",
      id: 3624098,
      node_id: "MDQ6VXNlcjM2MjQwOTg=",
      avatar_url: "https://avatars.githubusercontent.com/u/3624098?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/acdlite",
      html_url: "https://github.com/acdlite",
      followers_url: "https://api.github.com/users/acdlite/followers",
      following_url:
        "https://api.github.com/users/acdlite/following{/other_user}",
      gists_url: "https://api.github.com/users/acdlite/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/acdlite/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/acdlite/subscriptions",
      organizations_url: "https://api.github.com/users/acdlite/orgs",
      repos_url: "https://api.github.com/users/acdlite/repos",
      events_url: "https://api.github.com/users/acdlite/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/acdlite/received_events",
      type: "User",
      site_admin: false,
    },
    node_id: "MDc6UmVsZWFzZTE5MDkyNTQ0",
    tag_name: "v16.9.0-rc.0",
    target_commitish: "master",
    name: "",
    draft: false,
    prerelease: false,
    created_at: "2019-08-05T22:19:41Z",
    published_at: "2019-08-05T22:27:49Z",
    assets: [],
    tarball_url:
      "https://api.github.com/repos/facebook/react/tarball/v16.9.0-rc.0",
    zipball_url:
      "https://api.github.com/repos/facebook/react/zipball/v16.9.0-rc.0",
    body: "This is a release candidate for React v16.9.0.\r\n\r\nChangelog is available in https://github.com/facebook/react/pull/16254.\r\n\r\n## UMD builds\r\n• react: https://unpkg.com/react@16.9.0-rc.0/umd/\r\n• react-art: https://unpkg.com/react-art@16.9.0-rc.0/umd/\r\n• react-dom: https://unpkg.com/react-dom@16.9.0-rc.0/umd/\r\n• react-is: https://unpkg.com/react-is@16.9.0-rc.0/umd/\r\n• react-test-renderer: https://unpkg.com/react-test-renderer@16.9.0-rc.0/umd/\r\n• scheduler: https://unpkg.com/scheduler@0.15.0-rc.0/umd/",
  },
  {
    url: "https://api.github.com/repos/facebook/react/releases/19092544",
    assets_url:
      "https://api.github.com/repos/facebook/react/releases/19092544/assets",
    upload_url:
      "https://uploads.github.com/repos/facebook/react/releases/19092544/assets{?name,label}",
    html_url: "https://github.com/facebook/react/releases/tag/v16.9.0-rc.0",
    id: 19092544,
    author: {
      login: "acdlite",
      id: 3624098,
      node_id: "MDQ6VXNlcjM2MjQwOTg=",
      avatar_url: "https://avatars.githubusercontent.com/u/3624098?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/acdlite",
      html_url: "https://github.com/acdlite",
      followers_url: "https://api.github.com/users/acdlite/followers",
      following_url:
        "https://api.github.com/users/acdlite/following{/other_user}",
      gists_url: "https://api.github.com/users/acdlite/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/acdlite/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/acdlite/subscriptions",
      organizations_url: "https://api.github.com/users/acdlite/orgs",
      repos_url: "https://api.github.com/users/acdlite/repos",
      events_url: "https://api.github.com/users/acdlite/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/acdlite/received_events",
      type: "User",
      site_admin: false,
    },
    node_id: "MDc6UmVsZWFzZTE5MDkyNTQ0",
    tag_name: "v16.9.0-rc.0",
    target_commitish: "master",
    name: "",
    draft: false,
    prerelease: false,
    created_at: "2019-08-05T22:19:41Z",
    published_at: "2019-08-05T22:27:49Z",
    assets: [],
    tarball_url:
      "https://api.github.com/repos/facebook/react/tarball/v16.9.0-rc.0",
    zipball_url:
      "https://api.github.com/repos/facebook/react/zipball/v16.9.0-rc.0",
    body: "This is a release candidate for React v16.9.0.\r\n\r\nChangelog is available in https://github.com/facebook/react/pull/16254.\r\n\r\n## UMD builds\r\n• react: https://unpkg.com/react@16.9.0-rc.0/umd/\r\n• react-art: https://unpkg.com/react-art@16.9.0-rc.0/umd/\r\n• react-dom: https://unpkg.com/react-dom@16.9.0-rc.0/umd/\r\n• react-is: https://unpkg.com/react-is@16.9.0-rc.0/umd/\r\n• react-test-renderer: https://unpkg.com/react-test-renderer@16.9.0-rc.0/umd/\r\n• scheduler: https://unpkg.com/scheduler@0.15.0-rc.0/umd/",
  },
  {
    url: "https://api.github.com/repos/facebook/react/releases/19092544",
    assets_url:
      "https://api.github.com/repos/facebook/react/releases/19092544/assets",
    upload_url:
      "https://uploads.github.com/repos/facebook/react/releases/19092544/assets{?name,label}",
    html_url: "https://github.com/facebook/react/releases/tag/v16.9.0-rc.0",
    id: 19092544,
    author: {
      login: "acdlite",
      id: 3624098,
      node_id: "MDQ6VXNlcjM2MjQwOTg=",
      avatar_url: "https://avatars.githubusercontent.com/u/3624098?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/acdlite",
      html_url: "https://github.com/acdlite",
      followers_url: "https://api.github.com/users/acdlite/followers",
      following_url:
        "https://api.github.com/users/acdlite/following{/other_user}",
      gists_url: "https://api.github.com/users/acdlite/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/acdlite/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/acdlite/subscriptions",
      organizations_url: "https://api.github.com/users/acdlite/orgs",
      repos_url: "https://api.github.com/users/acdlite/repos",
      events_url: "https://api.github.com/users/acdlite/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/acdlite/received_events",
      type: "User",
      site_admin: false,
    },
    node_id: "MDc6UmVsZWFzZTE5MDkyNTQ0",
    tag_name: "v16.9.0-rc.0",
    target_commitish: "master",
    name: "",
    draft: false,
    prerelease: false,
    created_at: "2019-08-05T22:19:41Z",
    published_at: "2019-08-05T22:27:49Z",
    assets: [],
    tarball_url:
      "https://api.github.com/repos/facebook/react/tarball/v16.9.0-rc.0",
    zipball_url:
      "https://api.github.com/repos/facebook/react/zipball/v16.9.0-rc.0",
    body: "This is a release candidate for React v16.9.0.\r\n\r\nChangelog is available in https://github.com/facebook/react/pull/16254.\r\n\r\n## UMD builds\r\n• react: https://unpkg.com/react@16.9.0-rc.0/umd/\r\n• react-art: https://unpkg.com/react-art@16.9.0-rc.0/umd/\r\n• react-dom: https://unpkg.com/react-dom@16.9.0-rc.0/umd/\r\n• react-is: https://unpkg.com/react-is@16.9.0-rc.0/umd/\r\n• react-test-renderer: https://unpkg.com/react-test-renderer@16.9.0-rc.0/umd/\r\n• scheduler: https://unpkg.com/scheduler@0.15.0-rc.0/umd/",
  },
];

export const mockReleasesTwo = [
  {
    url: "https://api.github.com/repos/facebook/react/releases/65406837",
    assets_url:
      "https://api.github.com/repos/facebook/react/releases/65406837/assets",
    upload_url:
      "https://uploads.github.com/repos/facebook/react/releases/65406837/assets{?name,label}",
    html_url: "https://github.com/facebook/react/releases/tag/v18.1.0",
    id: 65406837,
    author: {
      login: "acdlite",
      id: 3624098,
      node_id: "MDQ6VXNlcjM2MjQwOTg=",
      avatar_url: "https://avatars.githubusercontent.com/u/3624098?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/acdlite",
      html_url: "https://github.com/acdlite",
      followers_url: "https://api.github.com/users/acdlite/followers",
      following_url:
        "https://api.github.com/users/acdlite/following{/other_user}",
      gists_url: "https://api.github.com/users/acdlite/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/acdlite/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/acdlite/subscriptions",
      organizations_url: "https://api.github.com/users/acdlite/orgs",
      repos_url: "https://api.github.com/users/acdlite/repos",
      events_url: "https://api.github.com/users/acdlite/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/acdlite/received_events",
      type: "User",
      site_admin: false,
    },
    node_id: "RE_kwDOAJy2Ks4D5gd1",
    tag_name: "v18.1.0",
    target_commitish: "main",
    name: "18.1.0 (April 26, 2022)",
    draft: false,
    prerelease: false,
    created_at: "2022-04-26T21:13:49Z",
    published_at: "2022-04-26T21:15:00Z",
    assets: [],
    tarball_url: "https://api.github.com/repos/facebook/react/tarball/v18.1.0",
    zipball_url: "https://api.github.com/repos/facebook/react/zipball/v18.1.0",
    body: "## 18.1.0 (April 26, 2022)\r\n\r\n### React DOM\r\n\r\n* Fix the false positive warning about `react-dom/client` when using UMD bundle. ([@alireza-molaee](https://github.com/alireza-molaee) in [#24274](https://github.com/facebook/react/pull/24274))\r\n* Fix `suppressHydrationWarning` to work in production too. ([@gaearon](https://github.com/gaearon) in [#24271](https://github.com/facebook/react/pull/24271))\r\n* Fix `componentWillUnmount` firing twice inside of Suspense. ([@acdlite](https://github.com/acdlite) in [#24308](https://github.com/facebook/react/pull/24308))\r\n* Fix some transition updates being ignored. ([@acdlite](https://github.com/acdlite) in [#24353](https://github.com/facebook/react/pull/24353))\r\n* Fix `useDeferredValue` causing an infinite loop when passed an unmemoized value. ([@acdlite](https://github.com/acdlite) in [#24247](https://github.com/facebook/react/pull/24247))\r\n* Fix throttling of revealing Suspense fallbacks. ([@sunderls](https://github.com/sunderls) in [#24253](https://github.com/facebook/react/pull/24253))\r\n* Fix an inconsistency in whether the props object is the same between renders. ([@acdlite](https://github.com/acdlite) in [#24421](https://github.com/facebook/react/pull/24421))\r\n* Fix a missing warning about a `setState` loop in `useEffect`. ([@gaearon](https://github.com/gaearon) in [#24298](https://github.com/facebook/react/pull/24298))\r\n* Fix a spurious hydration error. ([@gnoff](https://github.com/gnoff) in [#24404](https://github.com/facebook/react/pull/24404))\r\n* Warn when calling `setState` in `useInsertionEffect`. ([@gaearon](https://github.com/gaearon) in [#24295](https://github.com/facebook/react/pull/24295))\r\n* Ensure the reason for hydration errors is always displayed. ([@gaearon](https://github.com/gaearon) in [#24276](https://github.com/facebook/react/pull/24276))\r\n\r\n### React DOM Server\r\n\r\n* Fix escaping for the `bootstrapScriptContent` contents. ([@gnoff](https://github.com/gnoff) in [#24385](https://github.com/facebook/react/pull/24385))\r\n* Significantly improve performance of `renderToPipeableStream`. ([@gnoff](https://github.com/gnoff) in [#24291](https://github.com/facebook/react/pull/24291))\r\n\r\n### ESLint Plugin: React Hooks\r\n\r\n* Fix false positive errors with a large number of branches. ([@scyron6](https://github.com/scyron6) in [#24287](https://github.com/facebook/react/pull/24287))\r\n* Don't consider a known dependency stable when the variable is reassigned. ([@afzalsayed96](https://github.com/afzalsayed96) in [#24343](https://github.com/facebook/react/pull/24343))\r\n\r\n### Use Subscription\r\n\r\n* Replace the implementation with the `use-sync-external-store` shim. ([@gaearon](https://github.com/gaearon) in [#24289](https://github.com/facebook/react/pull/24289))",
    reactions: {
      url: "https://api.github.com/repos/facebook/react/releases/65406837/reactions",
      total_count: 283,
      "+1": 97,
      "-1": 0,
      laugh: 25,
      hooray: 63,
      confused: 0,
      heart: 29,
      rocket: 47,
      eyes: 22,
    },
  },
  {
    url: "https://api.github.com/repos/facebook/react/releases/65406837",
    assets_url:
      "https://api.github.com/repos/facebook/react/releases/65406837/assets",
    upload_url:
      "https://uploads.github.com/repos/facebook/react/releases/65406837/assets{?name,label}",
    html_url: "https://github.com/facebook/react/releases/tag/v18.1.0",
    id: 65406837,
    author: {
      login: "acdlite",
      id: 3624098,
      node_id: "MDQ6VXNlcjM2MjQwOTg=",
      avatar_url: "https://avatars.githubusercontent.com/u/3624098?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/acdlite",
      html_url: "https://github.com/acdlite",
      followers_url: "https://api.github.com/users/acdlite/followers",
      following_url:
        "https://api.github.com/users/acdlite/following{/other_user}",
      gists_url: "https://api.github.com/users/acdlite/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/acdlite/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/acdlite/subscriptions",
      organizations_url: "https://api.github.com/users/acdlite/orgs",
      repos_url: "https://api.github.com/users/acdlite/repos",
      events_url: "https://api.github.com/users/acdlite/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/acdlite/received_events",
      type: "User",
      site_admin: false,
    },
    node_id: "RE_kwDOAJy2Ks4D5gd1",
    tag_name: "v18.1.0",
    target_commitish: "main",
    name: "18.1.0 (April 26, 2022)",
    draft: false,
    prerelease: false,
    created_at: "2022-04-27T21:13:49Z",
    published_at: "2022-04-27T21:15:00Z",
    assets: [],
    tarball_url: "https://api.github.com/repos/facebook/react/tarball/v18.1.0",
    zipball_url: "https://api.github.com/repos/facebook/react/zipball/v18.1.0",
    body: "## 18.1.0 (April 26, 2022)\r\n\r\n### React DOM\r\n\r\n* Fix the false positive warning about `react-dom/client` when using UMD bundle. ([@alireza-molaee](https://github.com/alireza-molaee) in [#24274](https://github.com/facebook/react/pull/24274))\r\n* Fix `suppressHydrationWarning` to work in production too. ([@gaearon](https://github.com/gaearon) in [#24271](https://github.com/facebook/react/pull/24271))\r\n* Fix `componentWillUnmount` firing twice inside of Suspense. ([@acdlite](https://github.com/acdlite) in [#24308](https://github.com/facebook/react/pull/24308))\r\n* Fix some transition updates being ignored. ([@acdlite](https://github.com/acdlite) in [#24353](https://github.com/facebook/react/pull/24353))\r\n* Fix `useDeferredValue` causing an infinite loop when passed an unmemoized value. ([@acdlite](https://github.com/acdlite) in [#24247](https://github.com/facebook/react/pull/24247))\r\n* Fix throttling of revealing Suspense fallbacks. ([@sunderls](https://github.com/sunderls) in [#24253](https://github.com/facebook/react/pull/24253))\r\n* Fix an inconsistency in whether the props object is the same between renders. ([@acdlite](https://github.com/acdlite) in [#24421](https://github.com/facebook/react/pull/24421))\r\n* Fix a missing warning about a `setState` loop in `useEffect`. ([@gaearon](https://github.com/gaearon) in [#24298](https://github.com/facebook/react/pull/24298))\r\n* Fix a spurious hydration error. ([@gnoff](https://github.com/gnoff) in [#24404](https://github.com/facebook/react/pull/24404))\r\n* Warn when calling `setState` in `useInsertionEffect`. ([@gaearon](https://github.com/gaearon) in [#24295](https://github.com/facebook/react/pull/24295))\r\n* Ensure the reason for hydration errors is always displayed. ([@gaearon](https://github.com/gaearon) in [#24276](https://github.com/facebook/react/pull/24276))\r\n\r\n### React DOM Server\r\n\r\n* Fix escaping for the `bootstrapScriptContent` contents. ([@gnoff](https://github.com/gnoff) in [#24385](https://github.com/facebook/react/pull/24385))\r\n* Significantly improve performance of `renderToPipeableStream`. ([@gnoff](https://github.com/gnoff) in [#24291](https://github.com/facebook/react/pull/24291))\r\n\r\n### ESLint Plugin: React Hooks\r\n\r\n* Fix false positive errors with a large number of branches. ([@scyron6](https://github.com/scyron6) in [#24287](https://github.com/facebook/react/pull/24287))\r\n* Don't consider a known dependency stable when the variable is reassigned. ([@afzalsayed96](https://github.com/afzalsayed96) in [#24343](https://github.com/facebook/react/pull/24343))\r\n\r\n### Use Subscription\r\n\r\n* Replace the implementation with the `use-sync-external-store` shim. ([@gaearon](https://github.com/gaearon) in [#24289](https://github.com/facebook/react/pull/24289))",
    reactions: {
      url: "https://api.github.com/repos/facebook/react/releases/65406837/reactions",
      total_count: 283,
      "+1": 97,
      "-1": 0,
      laugh: 25,
      hooray: 63,
      confused: 0,
      heart: 29,
      rocket: 47,
      eyes: 22,
    },
  },
];

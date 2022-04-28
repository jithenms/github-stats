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

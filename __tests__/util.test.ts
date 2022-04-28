import { prepReleases } from '../src/util/index';
import { mockReleasesOne, mockReleasesTwo } from '../mocks/data';

test("it should return prepReleases with one pre and draft and three published releases on the same date", async () => {
  const res = prepReleases(mockReleasesOne);
  expect(res.draftReleases.length).toEqual(1);
  expect(res.draftReleases[0]).toEqual(1);
  expect(res.preReleases.length).toEqual(1);
  expect(res.preReleases[0]).toEqual(1);
  expect(res.publishedReleases.length).toEqual(1);
  expect(res.publishedReleases[0]).toEqual(3);
});

test("it should return prepReleases with two published releases on different dates", async () => {
  const res = prepReleases(mockReleasesTwo);
  expect(res.draftReleases.length).toEqual(0);
  expect(res.preReleases.length).toEqual(0);
  expect(res.publishedReleases.length).toEqual(2);
  for(let i=0; i<res.publishedReleases.length; i++) {
    expect(res.publishedReleases[i]).toEqual(1);
  }
});
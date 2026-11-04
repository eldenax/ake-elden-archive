import { test } from "node:test";
import assert from "node:assert/strict";
import { EXPERT_PEOPLE, EXPERT_CATEGORIES, filterExperts, profileSearchUrl } from "../src/data/ai-directory";
import { PUBLIC_PROFILE_LINKS } from "../src/data/ai-profile-links";

test("the upload contains 100 distinct people in 15 categories, without a ranking sort", () => {
  assert.equal(EXPERT_PEOPLE.length, 100);
  assert.equal(new Set(EXPERT_PEOPLE.map((p) => p.id)).size, 100);
  assert.equal(EXPERT_CATEGORIES.length, 15);
  assert.equal(EXPERT_PEOPLE[0]?.name, "Morten Goodwin");
  assert.equal(EXPERT_PEOPLE[99]?.name, "Vasileios Mavroeidis");
});

test("name, institution and expertise search can be combined with category filters", () => {
  assert.deepEqual(filterExperts("ake elden", "", "").map((p) => p.id), [62]);
  assert.deepEqual(filterExperts("sami", "", "UiT").map((p) => p.id), [17]);
  assert.equal(filterExperts("", "AI in health and medicine", "").length, 8);
  assert.equal(filterExperts("sami", "AI in health and medicine", "").length, 0);
  assert.equal(filterExperts("", "", "").length, 100);
});

test("each person has a public profile address or a person-specific search fallback", () => {
  for (const person of EXPERT_PEOPLE) {
    const profile = PUBLIC_PROFILE_LINKS.find((p) => p.id === person.id);
    if (profile) {
      assert.equal(profile.name, person.name);
      assert.equal(new URL(profile.url).protocol, "https:");
    } else {
      const url = new URL(profileSearchUrl(person));
      assert.ok(url.searchParams.get("q")?.includes(person.name));
      assert.ok(url.searchParams.get("q")?.includes(person.institution));
    }
  }
});
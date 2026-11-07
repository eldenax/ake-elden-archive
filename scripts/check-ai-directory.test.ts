import { test } from "node:test";
import assert from "node:assert/strict";
import { EXPERT_PEOPLE, EXPERT_CATEGORIES, filterExperts, profileSearchUrl } from "../src/data/ai-directory";
import { PUBLIC_PROFILE_LINKS } from "../src/data/ai-profile-links";

test("the expanded directory retains the original entries without a ranking sort or duplicates", () => {
  assert.ok(EXPERT_PEOPLE.length > 100);
  assert.equal(new Set(EXPERT_PEOPLE.map((p) => p.id)).size, EXPERT_PEOPLE.length);
  assert.equal(new Set(EXPERT_PEOPLE.map((p) => p.name)).size, EXPERT_PEOPLE.length);
  assert.equal(EXPERT_CATEGORIES.length, 17);
  assert.equal(EXPERT_PEOPLE[0]?.name, "Morten Goodwin");
  assert.equal(EXPERT_PEOPLE[99]?.name, "Vasileios Mavroeidis");
});

test("name, institution and expertise search can be combined with category filters", () => {
  assert.deepEqual(filterExperts("ake elden", "", "").map((p) => p.id), [62]);
  assert.deepEqual(filterExperts("sami", "", "UiT").map((p) => p.id), [17]);
  assert.equal(filterExperts("", "AI in health and medicine", "").length, 8);
  assert.equal(filterExperts("sami", "AI in health and medicine", "").length, 0);
  assert.equal(filterExperts("", "", "").length, EXPERT_PEOPLE.length);
});

test("requested additions are searchable by the supplied shorter names", () => {
  for (const query of ["Herman Cappelen", "Kari Steen-Johnsen", "Alexander Refsum Jensenius", "Fabian Harang", "Astrid Jorde Sandsør"]) {
    assert.equal(filterExperts(query, "", "").length, 1, query);
  }
});

test("Geir Kjetil Sandve is retained exactly once", () => {
  assert.deepEqual(filterExperts("Geir Kjetil Sandve", "", "").map((p) => p.id), [43]);
});

test("the requested theology/religion field contains the five documented contributors", () => {
  assert.deepEqual(filterExperts("", "AI and theology/religion", "").map((p) => p.name), [
    "Åke Elden", "Atle Ottesen Søvik", "Asle Eikrem", "Clemens Cavallin", "Simon Simchai Hansen",
  ]);
  assert.deepEqual(filterExperts("sovik", "AI and theology/religion", "").map((p) => p.id), [116]);
});

test("the expansion adds seven people without duplicating existing suggestions", () => {
  assert.equal(EXPERT_PEOPLE.length, 122);
  for (const query of ["Atle Ottesen Søvik", "Asle Eikrem", "Clemens Cavallin", "Simon Simchai Hansen", "Einar Duenger Bøhn", "Anders Malthe-Sørenssen", "Stefano Nichele", "Barbara Wasson", "Monika Nerland", "Morten Goodwin", "Åke Elden"]) {
    assert.equal(filterExperts(query, "", "").length, 1, query);
  }
});

test("adjacent education expertise is not categorised as AI specialisation", () => {
  const person = filterExperts("Astrid Jorde Sandsør", "", "")[0];
  assert.equal(person?.category, "Adjacent expertise in education and society");
});

test("Cappelen's affiliation does not imply a current Norway-based role", () => {
  const person = filterExperts("Herman Cappelen", "", "")[0];
  assert.equal(person?.institution, "The University of Hong Kong · formerly University of Oslo");
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
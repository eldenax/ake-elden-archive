import { test } from "node:test";
import assert from "node:assert/strict";
import { EXPERT_PEOPLE, EXPERT_CATEGORIES, filterExperts, profileSearchUrl } from "../src/data/ai-directory";
import { PUBLIC_PROFILE_LINKS } from "../src/data/ai-profile-links";

test("the expanded directory retains the original entries without a ranking sort or duplicates", () => {
  assert.ok(EXPERT_PEOPLE.length > 100);
  assert.equal(new Set(EXPERT_PEOPLE.map((p) => p.id)).size, EXPERT_PEOPLE.length);
  assert.equal(new Set(EXPERT_PEOPLE.map((p) => p.name)).size, EXPERT_PEOPLE.length);
  assert.equal(EXPERT_CATEGORIES.length, 25);
  assert.equal(EXPERT_PEOPLE[0]?.name, "Morten Goodwin");
  assert.equal(EXPERT_PEOPLE[99]?.name, "Vasileios Mavroeidis");
});

test("name, institution and expertise search can be combined with category filters", () => {
  assert.deepEqual(filterExperts("ake elden", "", "").map((p) => p.id), [62]);
  assert.deepEqual(filterExperts("sami", "", "UiT").map((p) => p.id), [17, 136]);
  assert.equal(filterExperts("", "AI in health and medicine", "").length, 9);
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

test("the expanded directory retains the seven recent additions without duplicates", () => {
  assert.ok(EXPERT_PEOPLE.length >= 122);
  for (const query of ["Atle Ottesen Søvik", "Asle Eikrem", "Clemens Cavallin", "Simon Simchai Hansen", "Einar Duenger Bøhn", "Anders Malthe-Sørenssen", "Stefano Nichele", "Barbara Wasson", "Monika Nerland", "Morten Goodwin", "Åke Elden"]) {
    assert.equal(filterExperts(query, "", "").length, 1, query);
  }
});

test("all six latest suggested names appear exactly once, with Yan Zhang added separately", () => {
  assert.ok(EXPERT_PEOPLE.length >= 123);
  for (const name of ["Anis Yazidi", "Yan Zhang", "Morten Goodwin", "Einar Duenger Bøhn", "Inga Strümke", "Åke Elden"]) {
    assert.equal(filterExperts(name, "", "").length, 1, name);
  }
  assert.deepEqual(filterExperts("Yan Zhang", "", "UiO").map((p) => p.id), [123]);
  assert.equal(PUBLIC_PROFILE_LINKS.find((p) => p.id === 123)?.url, "https://www.computer.org/profiles/yan-zhang");
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

const NEW_FIELDS = [
  ["AI and working life", ["Lene Pettersen", "Inger Marie Hagen", "Christin Thea Wathne"]],
  ["AI in finance and economics", ["Petter Eilif de Lange", "Ranik Raaen Wahlstrøm", "Morten Risstad"]],
  ["AI and defence/security policy", ["Johanne Jensen Skeie", "Stian Kjeksrud", "Ingebjørg Kåsen"]],
  ["AI and climate/sustainability", ["Rituka Jaiswal", "Xiangping Hu", "Stefan Pieter Sobolowski"]],
  ["AI and psychology/mental health", ["Kerstin Bach", "E. F. Haghish", "Torhild Tønnesen Haugnes"]],
  ["AI and language technology for smaller languages", ["Erik Velldal", "Trond Trosterud", "Sjur Nørstebø Moshagen", "Ronny Paul"]],
  ["AI and art/music", ["Alexander Refsum Jensenius", "Kyrre Glette", "Daniel Nordgård", "Çağrı Erdem"]],
  ["AI and sport", ["Ingrid Eir Thorp Eythorsdottir", "Dag Johansen"]],
] as const;

for (const [field, names] of NEW_FIELDS) {
  test(`${field} has documented contributors discoverable through field and name filters`, () => {
    assert.ok(EXPERT_CATEGORIES.includes(field));
    assert.deepEqual(filterExperts("", field, "").map((p) => p.name), [...names]);
    for (const name of names) {
      const matches = filterExperts(name, field, "");
      assert.equal(matches.length, 1, name);
      const profile = PUBLIC_PROFILE_LINKS.find((p) => p.id === matches[0]?.id);
      assert.ok(profile?.source, name);
      assert.equal(new URL(profile?.url ?? "").protocol, "https:");
    }
  });
}

test("FFI interview is labelled as a source rather than a professional profile", () => {
  assert.equal(PUBLIC_PROFILE_LINKS.find((p) => p.name === "Ingebjørg Kåsen")?.kind, "source");
});

test("sport contributors have separate AI evidence and professional profile links", () => {
  for (const person of filterExperts("", "AI and sport", "")) {
    const profile = PUBLIC_PROFILE_LINKS.find(p => p.id === person.id);
    assert.ok(profile?.evidenceUrl);
    assert.notEqual(profile.evidenceUrl, profile.url);
    assert.equal(new URL(profile.evidenceUrl).protocol, "https:");
    assert.equal(profile.kind, undefined);
  }
});

const SOURCE_CHECKED_ADDITIONS = [
  "Alvaro Fernandez-Quilez", "Tom Ryen", "Krisztian Balog", "Vinay Jayarama Setty",
  "Petra Galuscakova", "Antorweep Chakravorty", "Sabita Maharjan", "Shen Yin",
  "Annie Karoline Elgen", "Katherina Dodou", "Lisbeth M. Brevik", "John Krogstie",
] as const;

for (const name of SOURCE_CHECKED_ADDITIONS) {
  test(`${name} is included once with an institutional profile and documented AI scope`, () => {
    const matches = filterExperts(name, "", "");
    assert.equal(matches.length, 1);
    const person = matches[0];
    const profile = PUBLIC_PROFILE_LINKS.find(p => p.id === person?.id);
    assert.equal(profile?.name, name);
    assert.ok(profile?.source);
    assert.equal(profile?.kind, undefined);
    assert.ok(EXPERT_CATEGORIES.includes(person?.category ?? ""));
    const host = new URL(profile?.url ?? "https://invalid.example").hostname;
    assert.ok(["www.uis.no", "www.mn.uio.no", "www.uv.uio.no", "www.ntnu.no", "www.ntnu.edu", "www.du.se"].includes(host));
  });
}

test("education additions link to the co-authored GenAI classroom study", () => {
  for (const name of ["Annie Karoline Elgen", "Katherina Dodou", "Lisbeth M. Brevik"]) {
    assert.equal(filterExperts(name, "AI in education, learning and human formation", "").length, 1);
    assert.equal(PUBLIC_PROFILE_LINKS.find(p => p.name === name)?.evidenceUrl, "https://doi.org/10.1016/j.tate.2026.105517");
  }
});

test("Dodou's current Sweden affiliation is distinct from her former Norwegian connection", () => {
  assert.equal(filterExperts("Katherina Dodou", "", "")[0]?.institution, "Dalarna University, Sweden · formerly UiO / EDUCATE (2022–2025)");
});

test("unsupported uploaded AI claims do not create entries for Nordhagen or Terje Johansen", () => {
  assert.equal(filterExperts("Rolf Nordhagen", "", "").length, 0);
  assert.equal(filterExperts("Terje Johansen", "", "").length, 0);
});

test("Krogstie's AI business-value contribution has separate publication evidence", () => {
  assert.equal(filterExperts("John Krogstie", "AI strategy, leadership and commercialisation", "NTNU").length, 1);
  assert.equal(PUBLIC_PROFILE_LINKS.find(p => p.name === "John Krogstie")?.evidenceUrl, "https://doi.org/10.1007/s10796-021-10186-w");
});
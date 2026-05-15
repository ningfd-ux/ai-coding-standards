import type { CollectionEntry } from "astro:content";

type StandardEntry = CollectionEntry<"standards">;

export function getRelated(
  entry: StandardEntry,
  allEntries: StandardEntry[]
): StandardEntry[] {
  return allEntries
    .filter((e) => e.id !== entry.id)
    .map((e) => ({
      ...e,
      score: e.data.tags.filter((t) => entry.data.tags.includes(t)).length,
    }))
    .filter((e) => e.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 5);
}

export function sortByDate(
  entries: StandardEntry[]
): StandardEntry[] {
  return entries.sort(
    (a, b) => b.data.publishedAt.getTime() - a.data.publishedAt.getTime()
  );
}

export function getFeatured(
  entries: StandardEntry[]
): StandardEntry[] {
  return entries.filter((e) => e.data.featured);
}

export function getAllTags(
  entries: StandardEntry[]
): string[] {
  const tagSet = new Set<string>();
  entries.forEach((e) => e.data.tags.forEach((t) => tagSet.add(t)));
  return Array.from(tagSet).sort();
}

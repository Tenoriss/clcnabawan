import { STORAGE_KEYS } from "@/lib/config";
import { seedNews } from "@/lib/mock-data";
import type { NewsItem } from "@/lib/types";
import { readJSON, writeJSON } from "./storage";

function all(): NewsItem[] {
  const stored = readJSON<NewsItem[] | null>(STORAGE_KEYS.news, null);
  if (stored) return stored;
  writeJSON(STORAGE_KEYS.news, seedNews);
  return seedNews;
}

function persist(items: NewsItem[]) {
  writeJSON(STORAGE_KEYS.news, items);
}

export function listNews(): NewsItem[] {
  return [...all()].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return all().find((n) => n.slug === slug);
}

export function saveNews(item: NewsItem) {
  const items = all();
  const idx = items.findIndex((n) => n.id === item.id);
  if (idx >= 0) {
    const next = [...items];
    next[idx] = item;
    persist(next);
  } else {
    persist([item, ...items]);
  }
}

export function deleteNews(id: string) {
  persist(all().filter((n) => n.id !== id));
}

export function slugify(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .slice(0, 72) || `berita-${Date.now()}`;
}

import { STORAGE_KEYS } from "@/lib/config";
import { seedGallery } from "@/lib/mock-data";
import type { GalleryItem } from "@/lib/types";
import { readJSON, writeJSON } from "./storage";

function all(): GalleryItem[] {
  const stored = readJSON<GalleryItem[] | null>(STORAGE_KEYS.gallery, null);
  if (stored) return stored;
  writeJSON(STORAGE_KEYS.gallery, seedGallery);
  return seedGallery;
}

export function listGallery(): GalleryItem[] {
  return all();
}

export function addGalleryItem(item: GalleryItem) {
  writeJSON(STORAGE_KEYS.gallery, [item, ...all()]);
}

export function deleteGalleryItem(id: string) {
  writeJSON(
    STORAGE_KEYS.gallery,
    all().filter((g) => g.id !== id),
  );
}

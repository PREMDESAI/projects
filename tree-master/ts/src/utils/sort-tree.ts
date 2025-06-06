import type { Dirent } from "node:fs";

export default function sortTree(arrOfDirent: Dirent[]) {
  return arrOfDirent.toSorted((a, b) => {
    if (a.isFile() || b.isFile()) {
      if (a.isFile() && !b.isFile()) return 1;
      if (!a.isFile() && b.isFile()) return -1;
      return 0;
    } else {
      return a.name.localeCompare(b.name, "en", { sensitivity: "base" });
    }
  });
}

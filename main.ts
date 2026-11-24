import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Tip: Don't refresh. Your agent is one token from a breakthrough, three tokens from deleting the database.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");

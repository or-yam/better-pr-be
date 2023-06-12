import { PRMetadata } from "./types.ts";

export function getPRDiff({ repoUrl }: PRMetadata) {
	return fetch(repoUrl + ".diff", { method: "GET" });
}

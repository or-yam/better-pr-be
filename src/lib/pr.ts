import { PRMetadata } from "./types.ts";

export function getPRDiff({ prUrl }: PRMetadata) {
	return fetch(prUrl + ".diff", { method: "GET" });
}

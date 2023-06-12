import { PRMetadata } from "./types.ts";

export async function getPRDiff({ prUrl }: PRMetadata) {
	const resp = await fetch(prUrl + ".diff", { method: "GET" });
	return resp.text();
}

import { serve } from "server";

import { getCompletions } from "./lib/openai.ts";
import type { PRMetadata } from "./lib/types.ts";
import { getPRDiff } from "./lib/pr.ts";

export function main() {
	return serve(async (req: Request) => {
		if (req.method === "POST") {
			const body: PRMetadata = await req.json();
			if (typeof body !== "object") throw Error("Failed to parse request body");
			const prDiff = await getPRDiff(body);
			const prDiffStr = await prDiff.text();

			const comp = await getCompletions(prDiffStr);
			return Response.json(comp);
		} else {
			return new Response("Unsupported method " + req.method, {
				status: 404,
			});
		}
	});
}

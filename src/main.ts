import { serve } from "server";

import { getCompletions } from "./lib/openai.ts";
import { getPRDiff } from "./lib/pr.ts";
import type { PRMetadata } from "./lib/types.ts";

export function main() {
	return serve(async (req: Request) => {
		const path = new URL(req.url).pathname;

		if (path === "/" && req.method === "POST") {
			const body: PRMetadata = await req.json();
			if (typeof body !== "object") {
				throw Error("Failed to parse request body");
			}

			const prDiff = await getPRDiff(body);
			const comp = await getCompletions(prDiff);
			return Response.json(comp, {
				status: 200,
				headers: {
					"Access-Control-Allow-Origin": "*",
					"Access-Control-Allow-Methods": "*",
				},
			});
		} else if (path === "/health") {
			return Response.json({ healthy: true });
		} else {
			return new Response(`${req.method} on ${req.url} not found`, {
				status: 404,
			});
		}
	});
}

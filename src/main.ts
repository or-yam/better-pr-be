import { serve } from "server";

import { getCompletions } from "./lib/openai.ts";
import type { RequestBody } from "./lib/types.ts";

export function main() {
	return serve(async (req: Request) => {
		if (req.method === "POST") {
			const body = await req.json();
			if (typeof body !== "object") throw Error("Failed to parse request body");
			const { author, prNumber, repoName, repoUrl }: RequestBody = body;
			console.log({ author, prNumber, repoName, repoUrl });

			const comp = await getCompletions();
			return Response.json(comp);
		} else {
			return new Response("Unsupported method " + req.method, {
				status: 404,
			});
		}
	});
}

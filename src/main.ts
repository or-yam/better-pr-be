import { serve } from "server";

import { getCompletions } from "./lib/openai.ts";
import { RequestBody } from "./lib/types.ts";

export function main() {
	return serve(async (request: Request) => {
		const body = await request.json();
		if (typeof body !== "object") throw Error("Failed to parse request body");
		const { author, prNumber, repoName, repoUrl }: RequestBody = body;
		console.log({ author, prNumber, repoName, repoUrl });

		const comp = await getCompletions();
		const compStr = JSON.stringify(comp);

		return new Response(new Blob([compStr]), { status: 200 });
	});
}

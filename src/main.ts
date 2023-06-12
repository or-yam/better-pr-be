import { serve } from "server";

import { getCompletions } from "./lib/openai.ts";

export function main() {
	return serve(async (request: Request) => {
		const body = await request.json();
		if (typeof body !== "object") throw Error("Failed to parse request body");

		const comp = await getCompletions();
		const compStr = JSON.stringify(comp);

		return new Response(new Blob([compStr]), { status: 200 });
	});
}

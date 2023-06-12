import { serve } from "server";

import { getCompletions } from "./lib/openai.ts";

export function main(): void {
	serve(async (_req: Request) => {
		const comp = await getCompletions();
		return new Response(comp);
	});
}

if (import.meta.main) {
	main();
}

import { serve } from "server";

import { getCompletions } from "./lib/openai.ts";

export function main(): void {
	serve(async (_req: Request) => {
		const comp = await getCompletions();
		const comp_str = JSON.stringify(comp);
		return new Response(comp_str);
	});
}

if (import.meta.main) {
	main();
}

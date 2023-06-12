import { serve } from "server";

export function main(): void {
	serve((_req: Request) => new Response("Hello World"));
}

if (import.meta.main) {
	main();
}

import { OpenAI } from "openai";

const OPENAI_API_KEY = Deno.env.get("OPENAI_API_KEY");
if (!OPENAI_API_KEY) throw Error("No openai API key");

const OPEN_AI = new OpenAI(OPENAI_API_KEY);

export async function getCompletions(prDiff: string) {
	const chatCompletion = await OPEN_AI.createChatCompletion({
		model: "gpt-3.5-turbo",
		messages: [
			{ role: "system", content: "You are a helpful code reviewer." },
			{ role: "user", content: prDiff },
			{
				role: "user",
				content:
					"Can you please review this diff and send me the result in markdown",
			},
		],
	});
	return chatCompletion.choices.map((c) => c.message.content);
}

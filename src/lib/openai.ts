import { ChatCompletion, OpenAI } from "openai";

const OPENAI_API_KEY = Deno.env.get("OPENAI_API_KEY");
if (!OPENAI_API_KEY) throw Error("No openai API key");

const OPEN_AI = new OpenAI(OPENAI_API_KEY);

export async function getCompletions(): Promise<ChatCompletion> {
	const chatCompletion = await OPEN_AI.createChatCompletion({
		model: "gpt-3.5-turbo",
		messages: [
			{ role: "system", content: "You are a helpful code reviewer." },
			{ role: "user", content: "Who won the world series in 2020?" },
			{
				role: "assistant",
				content: "The Los Angeles Dodgers won the World Series in 2020.",
			},
			{ role: "user", content: "Where was it played?" },
		],
	});
	return chatCompletion;
}

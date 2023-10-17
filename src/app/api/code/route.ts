import { auth } from "@clerk/nextjs";
import { OpenAIStream, StreamingTextResponse } from "ai";
import { NextResponse } from "next/server";
import OpenAi from "openai";
import { ChatCompletionMessageParam } from "openai/resources/index.mjs";

const openai = new OpenAi({
  apiKey: process.env.OPENAI_API_KEY,
});

const aiParameter: ChatCompletionMessageParam = {
  role: "system",
  content:
    "You are a code generator. Answer in markdown mode, and use code comments for explanatory statements.",
};

export const runtime = "edge";

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { messages } = body;

    if (!userId) {
      return new NextResponse("Unauthorized user.", { status: 401 });
    }

    if (!openai.apiKey) {
      return new NextResponse("OpenAI API not configured!", { status: 500 });
    }

    if (!messages) {
      return new NextResponse("You can't just say nothing!", { status: 400 });
    }

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [aiParameter, ...messages],
      stream: true,
    });

    const stream = OpenAIStream(response);
    // Respond with the stream
    return new StreamingTextResponse(stream);
  } catch (error) {
    console.log("[CODE_GEN_ERROR]: ", error);
    return new NextResponse("Internal error: ", { status: 500 });
  }
}

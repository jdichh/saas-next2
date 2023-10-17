import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import OpenAi from "openai";

const openai = new OpenAi({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { prompt, amount = 1, resolution = "512x512" } = body;

    if (!userId) {
      return new NextResponse("Unauthorized user.", { status: 401 });
    }

    if (!openai.apiKey) {
      return new NextResponse("OpenAI API not configured!", { status: 500 });
    }

    if (!prompt) {
      return new NextResponse("You can't just say nothing!", { status: 400 });
    }

    if (!amount) {
      return new NextResponse("You have to set how many images you need.", { status: 400 });
    }

    if (!resolution) {
      return new NextResponse("You have to set a resolution.", { status: 400 });
    }

    const response = await openai.images.generate({
      prompt,
      n: parseInt(amount, 10),
      size: resolution
    });

    return NextResponse.json(response.data);
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal error: ", { status: 500 });
  }
}

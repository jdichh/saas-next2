# Dreamscape
A SaaS (software as a service) product that utilizes AI models from Replicate and OpenAI. Features include image, video, audio & code generation, and the ability to have a conversation.
<strong>Some features such as Image and Video Generation may not work as Vercel limits the API timeout to about 10 seconds in the Free/Hobby plan.</strong> However, everything works when run locally.

[Video Demonstration](https://www.youtube.com/watch?v=W-M-yczcgSc)

## Features
<ul>
<li>Conversation</li>
<p>Have a chat with GPT.</p>
<li>Image Generation</li>
<p>Generate images using DALL-E.</p>
<li>Video Generation</li>
<p>Generate videos using Zeroscope from Replicate.</p>
<li>Audio Generation</li>
<p>Generate audio using Zeroscope from Replicate.</p>
<li>Pair Programmer</li>
<p>Enlist the help of GPT when programming.</p>
</ul>

## How to run it locally
If you want to try out some things, download the source code, run it on VSCode/VSCodium/whatever, and use `pnpm install` and `pnpm run dev` to run it locally. Also, you have to get your own API keys from [OpenAI](https://openai.com/), [Clerk](https://clerk.com/), and [Replicate](https://replicate.com/) in order for the app to be functional.

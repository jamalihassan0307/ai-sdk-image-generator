<a href="https://ai-sdk-image-generator.vercel.app">
  <img alt="Next.js 14 and App Router AI SDK Image Generator." src="https://ai-sdk-image-generator.vercel.app/opengraph-image.png">
  <h1 align="center">AI SDK Image Generator</h1>
</a>

<p align="center">
  An open-source AI image generation app template built with Next.js, the AI SDK by Vercel, and various AI providers (Replicate, Fireworks, Google Vertex AI, OpenAI).
</p>

<p align="center">
  <a href="#features"><strong>Features</strong></a> ·
  <a href="#model-providers"><strong>Model Providers</strong></a> ·
  <a href="#deploy-your-own"><strong>Deploy Your Own</strong></a> ·
  <a href="#running-locally"><strong>Running Locally</strong></a> ·
  <a href="#authors"><strong>Authors</strong></a>
</p>
<br/>

## Features

- Supports image generation using [`generateImage`](https://sdk.vercel.ai/docs/reference/ai-sdk-core/generate-image) from the [AI SDK by Vercel](https://sdk.vercel.ai/docs), allowing multiple AI providers to be used interchangeably with just a few lines of code.
- A single input to generate images across multiple providers simultaneously.
- [shadcn/ui](https://ui.shadcn.com/) components for a modern, responsive UI powered by [Tailwind CSS](https://tailwindcss.com).
- Built with the latest [Next.js](https://nextjs.org) App Router (version 15).

## Model Providers

This template includes the following providers by default:

- [Replicate](https://sdk.vercel.ai/providers/ai-sdk-providers/replicate)
- [Google Vertex AI](https://sdk.vercel.ai/providers/ai-sdk-providers/google-vertex)
- [OpenAI](https://sdk.vercel.ai/providers/ai-sdk-providers/openai)
- [Fireworks](https://sdk.vercel.ai/providers/ai-sdk-providers/fireworks)

You can easily add or remove providers (and their associated models) by updating the configuration in the codebase.

## Deploy Your Own

You can deploy your own version of the AI SDK Image Generator to Vercel by clicking the button below:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel-labs%2Fai-sdk-image-generator&env=FIREWORKS_API_KEY,GOOGLE_CLIENT_EMAIL,GOOGLE_PRIVATE_KEY_ID,GOOGLE_VERTEX_LOCATION,GOOGLE_VERTEX_PROJECT,OPENAI_API_KEY,REPLICATE_API_TOKEN&envDescription=AI%20Provider%20API%20keys%20required%20for%20this%20demo.&envLink=https%3A%2F%2Fgithub.com%2Fvercel-labs%2Fai-sdk-image-generator&demo-title=AI%20SDK%20Image%20Generator&demo-description=%20%20An%20open-source%20AI%20image%20generation%20app%20template%20built%20with%20Next.js%2C%20the%20AI%20SDK%20by%20Vercel%2C%20and%20various%20AI%20providers%20(Replicate%2C%20Fireworks%2C%20Google%20Vertex%20AI%2C%20OpenAI).&demo-url=https%3A%2F%2Fai-sdk-image-generator.vercel.app%2F&demo-image=https%3A%2F%2Fai-sdk-image-generator.vercel.app%2Fopengraph-image.png)

## Running Locally

1. Clone the repository and install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

2. Create an `.env.local` file (or set Environment Variables in your Vercel dashboard) to store any necessary API keys for the providers you plan to use. There is an `.env.example` file that you can use as a reference.

   ```
   # Standard API keys
   OPENAI_API_KEY=...
   REPLICATE_API_TOKEN=...
   FIREWORKS_API_KEY=...

   # Google Vertex AI settings
   GOOGLE_CLIENT_EMAIL=...        # From your service account JSON file
   GOOGLE_PRIVATE_KEY=...         # From your service account JSON file
   GOOGLE_VERTEX_PROJECT=...      # Your Google Cloud project ID
   GOOGLE_VERTEX_LOCATION=...     # e.g., "us-central1"
   ```

   For Google Vertex AI setup:
   - Get your service account credentials from the Google Cloud Console
   - The values for `GOOGLE_CLIENT_EMAIL` and `GOOGLE_PRIVATE_KEY` can be found in your service account JSON file
   - Set `GOOGLE_VERTEX_LOCATION` to your preferred region (e.g., "us-central1")
   - Set `GOOGLE_VERTEX_PROJECT` to your Google Cloud project ID

   For more details on Google Vertex AI configuration, see the [AI SDK documentation](https://sdk.vercel.ai/providers/ai-sdk-providers/google-vertex#edge-runtime).

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view your new AI image generator application.

## Authors

This repository is maintained by the [Vercel](https://vercel.com) team and community contributors. Special thanks to:

- Walter Korman ([@shaper](https://x.com/shaper)) - [Vercel](https://vercel.com)
- Nico Albanese ([@nicoalbanese10](https://x.com/nicoalbanese10)) - [Vercel](https://vercel.com)

Contributions are welcome! Feel free to open issues or submit pull requests to enhance functionality or fix bugs.

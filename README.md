<div align="center">
  <img src="screenshots/sdkai.png" alt="AI SDK Image Generator" width="800"/>
  <h1>AI SDK Image Generator</h1>
  <h3>A Modern AI Image Generation Platform</h3>
</div>

<p align="center">
    <a href="https://ai-sdk-image-generator.vercel.app" target="_blank">
        <img alt="" src="https://img.shields.io/badge/Website-EA4C89?style=normal&logo=vercel&logoColor=white" style="vertical-align:center" />
    </a>
    <a href="https://github.com/jamalihassan0307/ai-sdk-image-generator" target="_blank">
        <img alt="" src="https://img.shields.io/badge/GitHub-100000?style=normal&logo=github&logoColor=white" style="vertical-align:center" />
    </a>
</p>

# 📌 Overview

AI SDK Image Generator is a powerful web application that leverages multiple AI providers to generate images from text descriptions. Users can create unique images using different AI models and compare results across providers.

# 🛠️ Tech Stack

![Next.js](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vercel AI SDK](https://img.shields.io/badge/Vercel%20AI%20SDK-000000?style=for-the-badge&logo=vercel&logoColor=white)

## 🔑 Key Features

### AI Model Integration

- Multiple AI providers (Replicate, Vertex AI, OpenAI, Fireworks)
- Simultaneous image generation across providers
- Model selection and customization

### User Interface

- Clean, modern design with shadcn/ui components
- Responsive layout for all devices
- Real-time generation progress indicators

### Image Generation

- Text-to-image generation
- Multiple style options
- Side-by-side provider comparison

## 📸 Screenshots & Workflow

### 1. Main Interface

<div align="center">
  <img src="screenshots/demo_image_generated.png" alt="Main Interface" width="800"/>
  <p>The main application interface showing generated penguin images across different AI providers</p>
</div>

### 2. Model Selection & Generation

#### Replicate Models

<div align="center">
  <img src="screenshots/replicate_model.png" alt="Replicate Models" width="800"/>
  <p>Stable Diffusion model options from Replicate</p>
</div>

#### Vertex AI Models

<div align="center">
  <img src="screenshots/vertex_aI_model.png.png" alt="Vertex AI Models" width="800"/>
  <p>Imagen model from Google Vertex AI</p>
</div>

#### OpenAI Models

<div align="center">
  <img src="screenshots/openAI_model.png" alt="OpenAI Models" width="800"/>
  <p>DALL-E 3 model from OpenAI</p>
</div>

#### Fireworks Models

<div align="center">
  <img src="screenshots/fireworks_models.png" alt="Fireworks Models" width="800"/>
  <p>Available models from Fireworks including flux-1-schnell-fp8</p>
</div>

### 3. Generated Results Example

<div align="center">
  <img src="screenshots/generated_images.png" alt="Generated Images" width="800"/>
  <p>Example of a cat in ukiyo-e style generated across different providers</p>
</div>

### 4. Loading States

<div align="center">
  <img src="screenshots/loading.png" alt="Loading State" width="800"/>
  <p>Generation progress indicators for each provider</p>
</div>

### 5. Error Handling

<div align="center">
  <img src="screenshots/image_generation_error.png" alt="Error Handling" width="800"/>
  <p>Error feedback when image generation fails</p>
</div>

## 🚀 Getting Started

1. Clone the repository:

```bash
git clone https://github.com/jamalihassan0307/ai-sdk-image-generator.git
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables in `.env.local`:

```env
OPENAI_API_KEY=your_openai_key
REPLICATE_API_TOKEN=your_replicate_token
FIREWORKS_API_KEY=your_fireworks_key
GOOGLE_CLIENT_EMAIL=your_google_email
GOOGLE_PRIVATE_KEY=your_google_key
GOOGLE_VERTEX_PROJECT=your_project_id
GOOGLE_VERTEX_LOCATION=your_location
```

4. Run the development server:

```bash
npm run dev
```

## 👨‍💻 Developer Contact

Feel free to reach out for questions or collaboration:

- GitHub: [@jamalihassan0307](https://github.com/jamalihassan0307)
- LinkedIn: [Jamali Hassan](https://www.linkedin.com/in/jamalihassan0307/)

## 🙏 Acknowledgments

Special thanks to:

- Vercel team for the AI SDK
- All AI provider partners (Replicate, OpenAI, Google, Fireworks)
- The open-source community

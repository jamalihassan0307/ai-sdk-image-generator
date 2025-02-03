export type ProviderKey = "replicate" | "vertex" | "openai" | "fireworks";
export type ModelMode = "performance" | "quality";

export const PROVIDERS: Record<
  ProviderKey,
  {
    displayName: string;
    iconPath: string;
    color: string;
    models: string[];
  }
> = {
  replicate: {
    displayName: "Replicate",
    iconPath: "/provider-icons/replicate.svg",
    color: "from-purple-500 to-blue-500",
    models: [
      "black-forest-labs/flux-1.1-pro",
      "black-forest-labs/flux-1.1-pro-ultra",
      "black-forest-labs/flux-dev",
      "black-forest-labs/flux-pro",
      "black-forest-labs/flux-schnell",
      "ideogram-ai/ideogram-v2",
      "ideogram-ai/ideogram-v2-turbo",
      "luma/photon",
      "luma/photon-flash",
      "recraft-ai/recraft-v3",
      "stability-ai/stable-diffusion-3.5-large",
      "stability-ai/stable-diffusion-3.5-large-turbo",
    ],
  },
  vertex: {
    displayName: "Vertex AI",
    iconPath: "/provider-icons/vertex.svg",
    color: "from-green-500 to-emerald-500",
    models: ["imagen-3.0-generate-001", "imagen-3.0-fast-generate-001"],
  },
  openai: {
    displayName: "OpenAI",
    iconPath: "/provider-icons/openai.svg",
    color: "from-blue-500 to-cyan-500",
    models: ["dall-e-2", "dall-e-3"],
  },
  fireworks: {
    displayName: "Fireworks",
    iconPath: "/provider-icons/fireworks.svg",
    color: "from-orange-500 to-red-500",
    models: [
      "accounts/fireworks/models/flux-1-dev-fp8",
      "accounts/fireworks/models/flux-1-schnell-fp8",
      "accounts/fireworks/models/playground-v2-5-1024px-aesthetic",
      "accounts/fireworks/models/japanese-stable-diffusion-xl",
      "accounts/fireworks/models/playground-v2-1024px-aesthetic",
      "accounts/fireworks/models/SSD-1B",
      "accounts/fireworks/models/stable-diffusion-xl-1024-v1-0",
    ],
  },
};

export const MODEL_CONFIGS: Record<ModelMode, Record<ProviderKey, string>> = {
  performance: {
    replicate: "stability-ai/stable-diffusion-3.5-large-turbo",
    vertex: "imagen-3.0-fast-generate-001",
    openai: "dall-e-2",
    fireworks: "accounts/fireworks/models/flux-1-schnell-fp8",
  },
  quality: {
    replicate: "stability-ai/stable-diffusion-3.5-large",
    vertex: "imagen-3.0-generate-001",
    openai: "dall-e-3",
    fireworks: "accounts/fireworks/models/flux-1-dev-fp8",
  },
};

export const PROVIDER_ORDER: ProviderKey[] = [
  "replicate",
  "vertex",
  "openai",
  "fireworks",
];

export const initializeProviderRecord = <T>(defaultValue?: T) =>
  Object.fromEntries(
    PROVIDER_ORDER.map((key) => [key, defaultValue])
  ) as Record<ProviderKey, T>;

import { ImagePlayground } from "@/components/ImagePlayground";
import { getRandomSuggestions } from "@/lib/suggestions";

export const dynamic = "force-dynamic";

export default function Page() {
  return <ImagePlayground suggestions={getRandomSuggestions()} />;
}

// // src/app/vendors/page.tsx
import { getChannels } from "@/app/actions/channel";
import { ChannelClient } from "@/components/channels/channelsClient";

export default async function ChannelsPage() {
  const channels = await getChannels();
  // const channels = [
  //   {
  //     id: "1",
  //     name: "Shopify",
  //     createdAt: "2025-09-06",
  //     updatedAt: "2025-09-06",
  //   },
  //   {
  //     id: "2",
  //     name: "whatsapp",
  //     createdAt: "2025-09-06",
  //     updatedAt: "2025-09-06",
  //   },
  // ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-6 text-center text-2xl font-bold">
        Gestión de Canales
      </h1>
      <ChannelClient channels={channels} />
    </div>
  );
}

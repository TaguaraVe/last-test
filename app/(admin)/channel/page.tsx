import { getChannels } from "@/app/actions/channel";
import { ChannelClient } from "@/components/channels/channelsClient";

export default async function ChannelsPage() {
  const channels = await getChannels();

  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-6 text-center text-2xl font-bold">
        Gestión de Canales
      </h1>
      <ChannelClient channels={channels} />
    </div>
  );
}

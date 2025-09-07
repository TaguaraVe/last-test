// src/app/channels/components/VendorClient.tsx
"use client";
import { PlusCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ChannelTable } from "@/components/channels/channelsTable";
import { ChannelsForm } from "@/components/channels/channelsForms";
import { Channel } from "@/app/generated/prisma";

interface ChannelClientProps {
  channels: Channel[];
}

export const ChannelClient = ({ channels }: ChannelClientProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="mb-4 flex justify-end">
        <Button onClick={() => setIsModalOpen(true)}>
          <PlusCircle className="mr-2 h-4 w-4" />
          Crear Canal
        </Button>
      </div>
      <ChannelTable channels={channels} />
      <ChannelsForm
        initialData={null}
        isOpen={isModalOpen}
        onClose={handleModalClose}
      />
    </>
  );
};

// src/app/vendors/components/VendorTable.tsx
"use client";

import { useState } from "react";
import { Channel } from "@/app/generated/prisma";
import { PencilIcon, TrashIcon } from "lucide-react";
import { toast } from "sonner";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { deleteChannel } from "@/app/actions/channel";
import { ChannelsForm } from "@/components/channels/channelsForms";

interface ChannelTableProps {
  channels: Channel[];
}

export const ChannelTable = ({ channels }: ChannelTableProps) => {
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedChannel, setSelectedChannel] = useState<Channel | null>(null);

  const handleEditClick = (channel: Channel) => {
    setSelectedChannel(channel);
    setIsModalOpen(true);
  };

  const handleDelete = async (id: string) => {
    setLoading(true);
    const result = await deleteChannel(id);
    setLoading(false);
    if (result.success) {
      toast("Canal eliminado correctamente.");
    } else {
      toast(`Error : ${result.error}`);
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedChannel(null);
  };

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nombre</TableHead>
            <TableHead>Fecha Creación</TableHead>
            <TableHead>Fecha Actualización</TableHead>
            <TableHead className="text-right">Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {channels.map((channel) => (
            <TableRow key={channel.id}>
              <TableCell>{channel.name}</TableCell>
              <TableCell>
                {format(new Date(channel.createdAt), "dd/MM/yyyy")}
              </TableCell>
              <TableCell>
                {format(new Date(channel.updatedAt), "dd/MM/yyyy")}
              </TableCell>
              <TableCell className="space-x-2 text-right">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleEditClick(channel)}
                >
                  <PencilIcon className="h-4 w-4" />
                </Button>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <TrashIcon className="h-4 w-4" />
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>¿Estás seguro?</AlertDialogTitle>
                      <AlertDialogDescription>
                        Esta acción no se puede deshacer. Esto eliminará
                        permanentemente el canal.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancelar</AlertDialogCancel>
                      <AlertDialogAction
                        onClick={() => handleDelete(channel.id)}
                      >
                        Eliminar
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <ChannelsForm
        initialData={selectedChannel}
        isOpen={isModalOpen}
        onClose={handleModalClose}
      />
    </>
  );
};

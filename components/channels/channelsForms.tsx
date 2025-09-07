// src/app/vendors/components/VendorForm.tsx
"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Channel } from "@/app/generated/prisma";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ChannelSchema } from "@/schemas/vendorSchema";
import { createChannel, updateChannel } from "@/app/actions/channel";

interface ChannelFormProps {
  initialData?: Channel | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ChannelsForm = ({
  initialData,
  isOpen,
  onClose,
}: ChannelFormProps) => {
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof ChannelSchema>>({
    resolver: zodResolver(ChannelSchema),
    defaultValues: initialData || {
      name: "",
    },
  });

  useEffect(() => {
    if (initialData) {
      form.reset({
        name: initialData.name,
      });
    } else {
      form.reset({
        name: "",
      });
    }
  }, [initialData, form]);

  const onSubmit = async (data: z.infer<typeof ChannelSchema>) => {
    setLoading(true);
    let result;
    if (initialData) {
      result = await updateChannel(initialData.id, data);
    } else {
      result = await createChannel(data);
    }

    setLoading(false);
    if (result.success) {
      toast(`Canal ${initialData ? "actualizado" : "creado"} correctamente.`);
      onClose();
      form.reset();
    } else {
      toast(` Error ${result.error}`);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {initialData ? "Editar Canal" : "Crear Canal"}
          </DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nombre</FormLabel>
                  <FormControl>
                    <Input placeholder="Nombre del canal" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={loading}>
              {initialData ? "Guardar Cambios" : "Crear Canal"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

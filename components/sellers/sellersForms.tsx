"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Seller } from "@/app/generated/prisma";
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
import { sellerSchema } from "@/schemas/Schema";
import { createSeller, updateSeller } from "@/app/actions/seller";

interface SellerFormProps {
  initialData?: Seller | null;
  isOpen: boolean;
  onClose: () => void;
}

export const SellerForm = ({
  initialData,
  isOpen,
  onClose,
}: SellerFormProps) => {
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof sellerSchema>>({
    resolver: zodResolver(sellerSchema),
    defaultValues: initialData || {
      name: "",
      phone: "",
      email: "",
      role: "",
    },
  });

  useEffect(() => {
    if (initialData) {
      form.reset({
        name: initialData.name,
        phone: initialData.phone,
        email: initialData.email,
        role: initialData.role,
      });
    } else {
      form.reset({
        name: "",
        phone: "",
        email: "",
        role: "",
      });
    }
  }, [initialData, form]);

  const onSubmit = async (data: z.infer<typeof sellerSchema>) => {
    setLoading(true);
    let result;
    if (initialData) {
      result = await updateSeller(initialData.id, data);
    } else {
      result = await createSeller(data);
    }

    setLoading(false);
    if (result.success) {
      toast(
        `Vendedor ${initialData ? "actualizado" : "creado"} correctamente.`,
      );
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
            {initialData ? "Editar Vendedor" : "Crear Vendedor"}
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
                    <Input placeholder="Nombre del vendedor" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Teléfono</FormLabel>
                  <FormControl>
                    <Input placeholder="Teléfono" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Correo</FormLabel>
                  <FormControl>
                    <Input placeholder="Correo electrónico" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Rol</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Role del vendedor"
                      {...field}
                      value={field.value ?? ""}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={loading}>
              {initialData ? "Guardar Cambios" : "Crear Vendedor"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

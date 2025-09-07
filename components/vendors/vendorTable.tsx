// src/app/vendors/components/VendorTable.tsx
"use client";

import { useState } from "react";
import { Vendor } from "@/app/generated/prisma";
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
import { deleteVendor } from "@/app/actions/vendors";
import { VendorForm } from "@/components/vendors/vendorsForms";

interface VendorTableProps {
  vendors: Vendor[];
}

export const VendorTable = ({ vendors }: VendorTableProps) => {
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVendor, setSelectedVendor] = useState<Vendor | null>(null);

  const handleEditClick = (vendor: Vendor) => {
    setSelectedVendor(vendor);
    setIsModalOpen(true);
  };

  const handleDelete = async (id: string) => {
    setLoading(true);
    const result = await deleteVendor(id);
    setLoading(false);
    if (result.success) {
      toast("Vendedor eliminado correctamente.");
    } else {
      toast(`Error : ${result.error}`);
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedVendor(null);
  };

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nombre</TableHead>
            <TableHead>Teléfono</TableHead>
            <TableHead>Correo</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Fecha Creación</TableHead>
            <TableHead>Fecha Actualización</TableHead>
            <TableHead className="text-right">Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {vendors.map((vendor) => (
            <TableRow key={vendor.id}>
              <TableCell>{vendor.name}</TableCell>
              <TableCell>{vendor.phone}</TableCell>
              <TableCell>{vendor.email}</TableCell>
              <TableCell>{vendor.role}</TableCell>
              <TableCell>
                {format(new Date(vendor.createdAt), "dd/MM/yyyy")}
              </TableCell>
              <TableCell>
                {format(new Date(vendor.updatedAt), "dd/MM/yyyy")}
              </TableCell>
              <TableCell className="space-x-2 text-right">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleEditClick(vendor)}
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
                        permanentemente al vendedor.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancelar</AlertDialogCancel>
                      <AlertDialogAction
                        onClick={() => handleDelete(vendor.id)}
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
      <VendorForm
        initialData={selectedVendor}
        isOpen={isModalOpen}
        onClose={handleModalClose}
      />
    </>
  );
};

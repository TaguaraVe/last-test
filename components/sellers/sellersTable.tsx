"use client";

import { useState } from "react";
import { Seller } from "@/app/generated/prisma";
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
import { deleteSeller } from "@/app/actions/seller";
import { SellerForm } from "@/components/sellers/sellersForms";

interface SellerTableProps {
  sellers: Seller[];
}

export const SellerTable = ({ sellers }: SellerTableProps) => {
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSeller, setSelectedSeller] = useState<Seller | null>(null);

  const handleEditClick = (seller: Seller) => {
    setSelectedSeller(seller);
    setIsModalOpen(true);
  };

  const handleDelete = async (id: string) => {
    setLoading(true);
    const result = await deleteSeller(id);
    setLoading(false);
    if (result.success) {
      toast("Vendedor eliminado correctamente.");
    } else {
      toast(`Error : ${result.error}`);
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedSeller(null);
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
          {sellers.map((seller) => (
            <TableRow key={seller.id}>
              <TableCell>{seller.name}</TableCell>
              <TableCell>{seller.phone}</TableCell>
              <TableCell>{seller.email}</TableCell>
              <TableCell>{seller.role}</TableCell>
              <TableCell>
                {format(new Date(seller.createdAt), "dd/MM/yyyy")}
              </TableCell>
              <TableCell>
                {format(new Date(seller.updatedAt), "dd/MM/yyyy")}
              </TableCell>
              <TableCell className="space-x-2 text-right">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleEditClick(seller)}
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
                        onClick={() => handleDelete(seller.id)}
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
      <SellerForm
        initialData={selectedSeller}
        isOpen={isModalOpen}
        onClose={handleModalClose}
      />
    </>
  );
};

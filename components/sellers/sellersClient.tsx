"use client";
import { PlusCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { SellerTable } from "@/components/sellers/sellersTable";
import { SellerForm } from "@/components/sellers/sellersForms";
import { Seller } from "@/app/generated/prisma";

interface SellerClientProps {
  sellers: Seller[];
}

export const SellerClient = ({ sellers }: SellerClientProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="mb-4 flex justify-end">
        <Button onClick={() => setIsModalOpen(true)}>
          <PlusCircle className="mr-2 h-4 w-4" />
          Crear Vendedor
        </Button>
      </div>
      <SellerTable sellers={sellers} />
      <SellerForm
        initialData={null}
        isOpen={isModalOpen}
        onClose={handleModalClose}
      />
    </>
  );
};

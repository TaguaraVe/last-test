// src/app/vendors/components/VendorClient.tsx
"use client";
import { PlusCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { VendorTable } from "@/components/vendors/vendorTable";
import { VendorForm } from "@/components/vendors/vendorsForms";
import { Vendor } from "@/app/generated/prisma";

interface VendorClientProps {
  vendors: Vendor[];
}

export const VendorClient = ({ vendors }: VendorClientProps) => {
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
      <VendorTable vendors={vendors} />
      <VendorForm
        initialData={null}
        isOpen={isModalOpen}
        onClose={handleModalClose}
      />
    </>
  );
};

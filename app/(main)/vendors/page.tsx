// // src/app/vendors/page.tsx
import { getVendors } from "@/app/actions/vendors";
import { VendorClient } from "@/components/vendors/vendorsClient";

export default async function VendorsPage() {
  const vendors = await getVendors();

  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-6 text-2xl font-bold">Gestión de Vendedores</h1>
      <VendorClient vendors={vendors} />
    </div>
  );
}

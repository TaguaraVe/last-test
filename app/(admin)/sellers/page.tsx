import { getSellers } from "@/app/actions/seller";
import { SellerClient } from "@/components/sellers/sellersClient";

export default async function SellersPage() {
  const sellers = await getSellers();

  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-6 text-center text-2xl font-bold">
        Gestión de Vendedores
      </h1>
      <SellerClient sellers={sellers} />
    </div>
  );
}

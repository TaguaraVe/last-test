import prisma from "../../../lib/prisma";
export default async function Customers() {
  const vendors = await prisma.vendor.findMany();
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-[url('/images/home-bg-img.jpg')] bg-cover bg-center">
      <h1 className="mb-8 font-[family-name:var(--font-geist-sans)] text-4xl font-bold text-[#333333]">
        Taguara Digital
      </h1>
      <ol className="list-inside list-decimal font-[family-name:var(--font-geist-sans)]">
        {vendors.map((vendor) => (
          <li key={vendor.id} className="mb-2">
            {vendor.name} - {vendor.email} - {vendor.role}
          </li>
        ))}
      </ol>
    </div>
  );
}

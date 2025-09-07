"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";
import prisma from "@/lib/prisma";

import { VendorSchema } from "@/schemas/vendorSchema";

const validateVendorData = (data: z.infer<typeof VendorSchema>) => {
  const result = VendorSchema.safeParse(data);
  if (!result.success) {
    throw new Error("Datos de vendedor no válidos");
  }
  return result.data;
};

export async function getVendors() {
  const vendors = await prisma.vendor.findMany({
    orderBy: { createdAt: "desc" },
  });
  return vendors;
}

export async function createVendor(data: z.infer<typeof VendorSchema>) {
  try {
    const validatedData = validateVendorData(data);
    await prisma.vendor.create({
      data: validatedData,
    });
    revalidatePath("/vendors");
    return { success: true };
  } catch (error) {
    return { success: false, error: (error as Error).message };
  }
}

export async function updateVendor(
  id: string,
  data: z.infer<typeof VendorSchema>,
) {
  try {
    const validatedData = validateVendorData(data);
    await prisma.vendor.update({
      where: { id },
      data: validatedData,
    });
    revalidatePath("/vendors");
    return { success: true };
  } catch (error) {
    return { success: false, error: (error as Error).message };
  }
}

export async function deleteVendor(id: string) {
  try {
    await prisma.vendor.delete({
      where: { id },
    });
    revalidatePath("/vendors");
    return { success: true };
  } catch (error) {
    return { success: false, error: (error as Error).message };
  }
}

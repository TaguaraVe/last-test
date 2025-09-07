"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";
import prisma from "@/lib/prisma";

import { sellerSchema } from "@/schemas/Schema";

const validatedSellerData = (data: z.infer<typeof sellerSchema>) => {
  const result = sellerSchema.safeParse(data);
  if (!result.success) {
    throw new Error("Datos de vendedor no válidos");
  }
  return result.data;
};

export async function getSellers() {
  const vendors = await prisma.seller.findMany({
    orderBy: { createdAt: "desc" },
  });
  return vendors;
}

export async function createSeller(data: z.infer<typeof sellerSchema>) {
  try {
    const validatedData = validatedSellerData(data);
    await prisma.seller.create({
      data: validatedData,
    });
    revalidatePath("/sellers");
    return { success: true };
  } catch (error) {
    return { success: false, error: (error as Error).message };
  }
}

export async function updateSeller(
  id: string,
  data: z.infer<typeof sellerSchema>,
) {
  try {
    const validatedData = validatedSellerData(data);
    await prisma.seller.update({
      where: { id },
      data: validatedData,
    });
    revalidatePath("/sallers");
    return { success: true };
  } catch (error) {
    return { success: false, error: (error as Error).message };
  }
}

export async function deleteSeller(id: string) {
  try {
    await prisma.seller.delete({
      where: { id },
    });
    revalidatePath("/sellers");
    return { success: true };
  } catch (error) {
    return { success: false, error: (error as Error).message };
  }
}

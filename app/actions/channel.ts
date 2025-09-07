"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";
import prisma from "@/lib/prisma";

import { ChannelSchema } from "@/schemas/vendorSchema";

const validateChannelData = (data: z.infer<typeof ChannelSchema>) => {
  const result = ChannelSchema.safeParse(data);
  if (!result.success) {
    throw new Error("Datos del canal no válidos");
  }
  return result.data;
};

export async function getChannels() {
  const channels = await prisma.channel.findMany({
    orderBy: { createdAt: "desc" },
  });
  return channels;
}

export async function createChannel(data: z.infer<typeof ChannelSchema>) {
  try {
    const validatedData = validateChannelData(data);
    await prisma.channel.create({
      data: validatedData,
    });
    revalidatePath("/channel");
    return { success: true };
  } catch (error) {
    return { success: false, error: (error as Error).message };
  }
}

export async function updateChannel(
  id: string,
  data: z.infer<typeof ChannelSchema>,
) {
  try {
    const validatedData = validateChannelData(data);
    await prisma.channel.update({
      where: { id },
      data: validatedData,
    });
    revalidatePath("/channel");
    return { success: true };
  } catch (error) {
    return { success: false, error: (error as Error).message };
  }
}

export async function deleteChannel(id: string) {
  try {
    await prisma.channel.delete({
      where: { id },
    });
    revalidatePath("/channel");
    return { success: true };
  } catch (error) {
    return { success: false, error: (error as Error).message };
  }
}

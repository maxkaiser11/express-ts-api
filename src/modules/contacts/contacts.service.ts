import { prisma } from "../../lib/prisma";
import type { CreateContactInput } from "./contacts.schemas";

class ContactService {
  async list(userId: number) {
    return prisma.contact.findMany({
      where: { userId },
    });
  }

  async get(id: number, userId: number) {
    return prisma.contact.findFirst({
      where: { id, userId },
    });
  }

  async create(data: CreateContactInput, userId: number) {
    return prisma.contact.create({
      data: {
        ...data,
        phone: data.phone ?? null,
        address: data.address ?? null,
        userId,
      }
    })
  }
}

export default new ContactService();

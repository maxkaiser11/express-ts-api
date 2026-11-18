import { prisma } from "../../lib/prisma";

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
}

export default new ContactService();

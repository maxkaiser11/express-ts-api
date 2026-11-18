import type { Request, Response } from "express";
import contactsService from "./contacts.service";

type ContactServiceType = typeof contactsService;

const TEMP_USER_ID = 1;

class ContactController {
  constructor(private contactService: ContactServiceType) {}

  async list(req: Request, res: Response) {
    const contacts = await this.contactService.list(TEMP_USER_ID);

    return res.status(200).json({ success: true, data: contacts });
  }

  async get(req: Request, res: Response) {
    const { id } = req.params;

    const contactId = Number(id);

    if (isNaN(contactId)) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid contact ID" });
    }

    const contact = await this.contactService.get(contactId, TEMP_USER_ID);

    if (!contact) {
      return res
        .status(400)
        .json({ success: false, message: "Contact not found" });
    }

    return res.status(200).json({ success: true, data: contact });
  }
}

export default new ContactController(contactsService);

import * as z from 'zod';

export const createContactSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.email('Invalid email address'),
  phone: z.string().optional(),
  address: z.string().optional(),
});

export type CreateContactInput = z.infer<typeof createContactSchema>;

import express from "express";
import type {Request, Response} from 'express';
import contactRoutes from './modules/contacts/contacts.routes';


const app = express();

app.use('/contacts', contactRoutes);

app.get('/', (req: Request, res: Response) => {
  return res.send("Hello from Express");
})

const PORT = 3000;

app.listen(3000, () => console.log("Running in Port: ", PORT));

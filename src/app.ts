import { petsRoutes } from "./http/controllers/pets/routes";
import fastify from "fastify";

export const app = fastify();

app.register(petsRoutes);

import { FastifyInstance } from "fastify";

import { register } from "./register";
import { authenticate } from "./authenticate";

export async function usersRoutes(app: FastifyInstance) {
	app.post("/auth/register", register);

	app.post("/auth/login", authenticate);
}

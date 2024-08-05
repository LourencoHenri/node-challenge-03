import { FastifyInstance } from "fastify";

import { verifyJwt } from "../../middlewares/verify-jwt";

import { authenticate } from "./authenticate";
import { register } from "./register";
import { profile } from "./profile";
import { refresh } from "./refresh";
import { logout } from "./logout";

export async function usersRoutes(app: FastifyInstance) {
	app.post("/register", register);

	app.post("/login", authenticate);

	app.patch("/token/refresh", refresh);

	app.post("/logout", { onRequest: [verifyJwt] }, logout);

	app.get("/me", { onRequest: [verifyJwt] }, profile);
}

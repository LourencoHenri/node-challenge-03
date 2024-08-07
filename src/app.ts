import fastifyCookie from "@fastify/cookie";
import fastifyJwt from "@fastify/jwt";
import fastify from "fastify";

import { ZodError } from "zod";

import { usersRoutes } from "./http/controllers/users/routes";
import { env } from "./env";

export const app = fastify();

app.register(fastifyJwt, {
	secret: env.JWT_SECRET,
	cookie: {
		cookieName: "refreshToken",
		signed: false,
	},
	sign: {
		expiresIn: "10m",
	},
});

app.register(usersRoutes);

app.register(fastifyCookie);

app.setErrorHandler((error, _, reply) => {
	if (error instanceof ZodError) {
		return reply
			.status(400)
			.send({ message: "Validation error.", issues: error.format() });
	}

	if (env.NODE_ENV !== "production") {
		console.error(error);
	} else {
	}

	return reply.status(500).send({ message: "Internal server error." });
});

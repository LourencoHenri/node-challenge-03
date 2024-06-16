import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function search(request: FastifyRequest, reply: FastifyReply) {
	const searchPetsQuerySchema = z.object({});

	const {} = searchPetsQuerySchema.parse(request.query);

	return reply.status(200).send({});
}

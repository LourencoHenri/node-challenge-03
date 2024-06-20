import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function search(request: FastifyRequest, reply: FastifyReply) {
	const createPetQuerySchema = z.object({
		name: z.string(),
		age: z.number(),
		species: z.string(),
		breed: z.string(),
		description: z.string(),
		city: z.string(),
	});

	const { name, age, species, breed, description, city } =
		createPetQuerySchema.parse(request.query);

	// await createPetUseCase.execute({ name, age, species, breed, description, city })

	return reply.status(200).send();
}

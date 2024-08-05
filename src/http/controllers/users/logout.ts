import { FastifyReply, FastifyRequest } from "fastify";

export async function logout(request: FastifyRequest, reply: FastifyReply) {
	return reply.clearCookie("refreshToken").send("Logged Out!");
}

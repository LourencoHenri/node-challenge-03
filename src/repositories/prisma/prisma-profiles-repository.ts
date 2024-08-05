import { prisma } from "../../lib/prisma";
import { Prisma } from "@prisma/client";

import { ProfilesRepository } from "../profiles-repository";

export class PrismaProfilesRepository implements ProfilesRepository {
	async findById(id: string) {
		const profile = await prisma.profile.findUnique({
			where: {
				id,
			},
		});

		return profile;
	}

	async create(data: { userId: string }) {
		const profile = await prisma.profile.create({
			data: {
				user: {
					connect: { id: data.userId },
				},
			},
		});

		return profile;
	}
}

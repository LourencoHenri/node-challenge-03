import { prisma } from "../../lib/prisma";
import { Prisma } from "@prisma/client";

import { ProfilesRepository } from "../profiles-repository";

export class PrismaProfilesRepository implements ProfilesRepository {
	async create(data: Prisma.ProfileCreateInput) {
		const profile = await prisma.profile.create({
			data,
		});

		return profile;
	}
}

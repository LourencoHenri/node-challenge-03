import { prisma } from "../../lib/prisma";
import { Prisma } from "@prisma/client";
import { OrgsRepository } from "../orgs-repository";

export class PrismaOrgsRepository implements OrgsRepository {
	async findById(id: string) {
		const org = await prisma.org.findUnique({
			where: {
				id,
			},
		});

		return org;

		// return org;
	}

	async create(data: Prisma.OrgCreateInput) {
		const org = await prisma.org.create({
			data,
		});

		return org;
	}
}

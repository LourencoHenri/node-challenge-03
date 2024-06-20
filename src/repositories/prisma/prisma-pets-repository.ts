import { prisma } from "../../lib/prisma";
import { Prisma } from "@prisma/client";
import { PetsRepository } from "../pets-repository";

export class PrismaPetsRepository implements PetsRepository {
	async findById(id: string) {
		const pet = await prisma.pet.findUnique({
			where: {
				id,
			},
		});

		return pet;
	}

	async searchMany(query: string, page: number) {
		const pets = await prisma.pet.findMany({
			where: {
				city: {
					contains: query,
				},
			},
			take: 20,
			skip: (page - 1) * 20,
		});

		return pets;
	}

	async create(data: Prisma.PetCreateInput) {
		const pet = await prisma.pet.create({
			data,
		});

		return pet;
	}
}

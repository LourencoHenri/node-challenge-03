import { Pet } from "@prisma/client";
import { PetsRepository } from "../repositories/pets-repository";

interface SearchPetsUseCaseRequest {
	query: string;
	page: number;
}

interface SearchPetsUseCaseResponse {
	pets: Pet[];
}

export class SearchPetsUseCase {
	constructor(private petsRepository: PetsRepository) {}

	async execute({
		query,
		page,
	}: SearchPetsUseCaseRequest): Promise<SearchPetsUseCaseResponse> {
		const pets = await this.petsRepository.searchMany(query, page);

		return {
			pets,
		};
	}
}

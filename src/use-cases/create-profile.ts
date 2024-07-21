import { Profile } from "@prisma/client";
import { ProfilesRepository } from "../repositories/profiles-repository";

interface CreateProfileUseCaseRequest {
	id: string;
	age: string | null;
	name: string;
	phone: string;
	avatarUrl: string;
	birthdate: string;
	weight: string;
	height: string;
	goals: string;

	postalCode: string;
	address: string;
	neighborhood: string;
	city: string;
	country: string;
}

interface CreateProfileUseCaseResponse {
	profile: Profile;
}

export class CreateProfileUseCase {
	constructor(private profilesRepository: ProfilesRepository) {}

	async execute({}: CreateProfileUseCaseRequest): Promise<CreateProfileUseCaseResponse> {
		const profile = await this.profilesRepository.create({});

		return {
			profile,
		};
	}
}

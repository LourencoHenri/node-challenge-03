// import { ProfilesRepository } from "../repositories/profiles-repository";
// import { Profile } from "@prisma/client";

// interface CreateProfileUseCaseRequest {
// 	id: string;
// 	age?: string;
// 	name?: string;
// 	phone?: string;
// 	avatarUrl?: string;
// 	birthdate?: string;
// 	weight?: string;
// 	height?: string;
// 	goals?: string;

// 	postalCode?: string;
// 	address?: string;
// 	neighborhood?: string;
// 	city?: string;
// 	country?: string;
// }

// interface CreateProfileUseCaseResponse {
// 	profile: Profile;
// }

// export class CreateProfileUseCase {
// 	constructor(private profilesRepository: ProfilesRepository) {}

// 	async execute({
// 		age,
// 		name,
// 		phone,
// 		avatarUrl,
// 		birthdate,
// 		weight,
// 		height,
// 		goals,

// 		postalCode,
// 		address,
// 		neighborhood,
// 		city,
// 		country,
// 	}: CreateProfileUseCaseRequest): Promise<CreateProfileUseCaseResponse> {
// 		const profile = await this.profilesRepository.create({
// 			age,
// 			name,
// 			phone,
// 			avatarUrl,
// 			birthdate,
// 			weight,
// 			height,
// 			goals,

// 			postalCode,
// 			address,
// 			neighborhood,
// 			city,
// 			country,
// 		});

// 		return {
// 			profile,
// 		};
// 	}
// }

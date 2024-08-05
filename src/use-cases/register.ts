import { UserAlreadyExistsError } from "./errors/user-already-exists-error";
import { UsersRepository } from "../repositories/users-repository";
import { User } from "@prisma/client";
import { Profile } from "@prisma/client";
import { hash } from "bcryptjs";
import { ProfilesRepository } from "../repositories/profiles-repository";

interface RegisterUseCaseRequest {
	name: string;
	email: string;
	password: string;
}

interface RegisterUseCaseResponse {
	user: User;
	profile?: Profile;
}

export class RegisterUseCase {
	constructor(
		private usersRepository: UsersRepository,
		private profilesRepository: ProfilesRepository
	) {}

	async execute({
		name,
		email,
		password,
	}: RegisterUseCaseRequest): Promise<RegisterUseCaseResponse> {
		const passwordHash = await hash(password, 6);

		const userWithSameEmail = await this.usersRepository.findByEmail(email);

		if (userWithSameEmail) {
			throw new UserAlreadyExistsError();
		}

		const user = await this.usersRepository.create({
			name,
			email,
			passwordHash,
		});

		await this.profilesRepository.create({
			userId: user.id,
		});

		console.log(user.id);

		return {
			user,
		};
	}
}

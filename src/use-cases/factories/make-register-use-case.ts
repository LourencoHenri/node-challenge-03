import { PrismaProfilesRepository } from "../../repositories/prisma/prisma-profiles-repository";
import { PrismaUsersRepository } from "../../repositories/prisma/prisma-users-repository";
import { RegisterUseCase } from "../register";

export function makeRegisterUseCase() {
	const usersRepository = new PrismaUsersRepository();
	const profilesRepository = new PrismaProfilesRepository(); 
	const registerUseCase = new RegisterUseCase(usersRepository, profilesRepository);

	return registerUseCase;
}

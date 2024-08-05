import { PrismaProfilesRepository } from '../../repositories/prisma/prisma-profiles-repository';
import { CreateProfileUseCase } from '../create-profile';

export function makeCreateProfileUseCase() {
	const profilesRepository = new PrismaProfilesRepository();
	const createProfileUseCase = new CreateProfileUseCase(profilesRepository);

	return createProfileUseCase;
}

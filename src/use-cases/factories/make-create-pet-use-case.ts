import { PrismaPetsRepository } from "../../repositories/prisma/prisma-pets-repository";

export function makeCreateGymUseCase() {
	const gymsRepository = new PrismaPetsRepository();
	//   const useCase = new CreatePetUseCase(gymsRepository)

	// return useCase;
}

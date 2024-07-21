import { Prisma, Profile } from "@prisma/client";

export interface ProfilesRepository {
	create(data: Prisma.ProfileCreateInput): Promise<Profile>;
}

import { Prisma, Profile } from "@prisma/client";

export interface ProfilesRepository {
	findById(id: string): Promise<Profile | null>;
	create(data: { userId: string }): Promise<Profile>;
}

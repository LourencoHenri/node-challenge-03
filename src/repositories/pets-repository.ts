import { Pet, Prisma } from "@prisma/client";

export interface FindManyNearbyParams {
	latitude: number;
	longitude: number;
}

export interface GymsRepository {
	// findById(id: string): Promise<Pet | null>;
	// findManyNearby(params: FindManyNearbyParams): Promise<Gym[]>;
	// searchMany(query: string, page: number): Promise<Gym[]>;
	// create(data: Prisma.GymCreateInput): Promise<Gym>;
}

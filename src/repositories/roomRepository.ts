import { appDataSource } from "../data-source";
import { Room } from "../entities/Room";

export const roomRepository = appDataSource.getRepository(Room);

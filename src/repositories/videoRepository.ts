import { appDataSource } from "../data-source";
import { Video } from "../entities/Video";

export const videoRepository = appDataSource.getRepository(Video);

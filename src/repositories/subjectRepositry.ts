import { appDataSource } from "../data-source";
import { Subject } from "../entities/Subject";

export const subjectRepository = appDataSource.getRepository(Subject);

import { Router } from "express";
import { SubjectController } from "./controllers/SubjectController";
import { RoomControler } from "./controllers/RoomController";

const routes = Router();

routes.post("/subject", new SubjectController().create);
routes.post("/room", new RoomControler().create);
routes.post("/room/:room_id/create", new RoomControler().createVideo);
routes.post("/room/:room_id/subject", new RoomControler().roomSubject);
routes.get("/room", new RoomControler().list);

export default routes;

import { Request, Response } from "express";
import { roomRepository } from "../repositories/roomRepository";
import { videoRepository } from "../repositories/videoRepository";
import { subjectRepository } from "../repositories/subjectRepositry";

class RoomControler {
  async create(request: Request, response: Response) {
    const { name } = request.body;

    try {
      const newRoom = roomRepository.create({ name });

      await roomRepository.save(newRoom);

      return response.status(201).json(newRoom);
    } catch (error) {
      console.log(error);
      return response.status(500).json({ message: "Internal server error!!!" });
    }
  }

  async createVideo(request: Request, response: Response) {
    const { title, url } = request.body;
    const { room_id } = request.params;

    try {
      const room = await roomRepository.findOneBy({ id: Number(room_id) });

      if (!room) {
        return response.status(404).json({ message: " Aula não existe!!! " });
      }

      const newVideo = videoRepository.create({
        title,
        url,
        room,
      });

      await videoRepository.save(newVideo);

      return response.status(201).json(newVideo);
    } catch (error) {
      console.log(error);
      return response.status(500).json({ message: "Internal server error!!!" });
    }
  }

  async roomSubject(request: Request, response: Response) {
    const { subject_id } = request.body;
    const { room_id } = request.params;

    try {
      const room = await roomRepository.findOneBy({ id: Number(room_id) });

      if (!room) {
        return response.status(404).json({ message: " Aula não existe!!! " });
      }

      const subjects = await subjectRepository.findOneBy({
        id: Number(subject_id),
      });

      if (!subjects) {
        return response.status(404).json({ message: " Aula não existe!!! " });
      }

      const roomUpdate = {
        ...room,
        subjects: [subjects],
      };

      await roomRepository.save(roomUpdate);

      return response.status(200).json(room);
    } catch (error) {
      console.log(error);
      return response.status(500).json({ message: "Internal server error!!!" });
    }
  }

  async list(request: Request, response: Response) {
    try {
      const rooms = await roomRepository.find({
        relations: {
          subjects: true,
        },
      });
      return response.json(rooms);
    } catch (error) {
      console.log(error);
      return response.status(500).json({ message: "Internal server error!!!" });
    }
  }
}

export { RoomControler };

import { text } from "stream/consumers";
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Room } from "./Room";

@Entity("videos")
class Video {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "text" }) // poderia adicinar um nullable: true para dizer que não obrigatorio
  title: string;

  @Column({ type: "text" })
  url: string;

  @ManyToOne(() => Room, (room) => room.videos) //muitos para um
  @JoinColumn({ name: "room_id" }) // precisa desse decorator para não dar erro
  room: Room;
}

export { Video };

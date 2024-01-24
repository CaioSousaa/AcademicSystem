import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Video } from "./Video";

@Entity("rooms")
class Room {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "text" })
  name: string;

  @OneToMany(() => Video, (video) => video.room) // um para muitos // função callback
  videos: Video[];
}

export { Room };

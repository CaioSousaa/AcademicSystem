import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("rooms")
class Room {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "text" })
  name: string;
}

export { Room };

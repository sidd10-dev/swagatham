import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { hash } from "bcrypt";

@Entity({ name: "admins" })
export class AdminEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  username: string

  @Column()
  phone: string

  @Column()
  password: string

  @BeforeInsert()
  async hashPassword() {
    this.password = await hash(this.password, 10)
  }
}
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

import { E_Gender } from './types'


@Entity('users')  // <--- указывает название сущности, тоесть создаваемой им таблицы
export class User {
  @PrimaryGeneratedColumn()  // <--- указывает тип колонки в таблице, имя и тип данных в ней
  id: number    // <--- указывает имя колонки и тип данных, размещаемых в ней

  @Column({ name: 'email', type: 'varchar' })
  email: string

  @Column({ name: 'password', type: 'varchar' })
  password: string

  @Column({ name: 'name_first', type: 'varchar' })
  nameFirst: string     // <--- это указание для TypeORM по стандарту Camel Case. А postgres переделает это по своему в стандарте Snake case

  @Column({ name: 'name_last', type: 'varchar' })
  nameLast: string

  @Column({ name: 'birth_date', type: 'timestamp', nullable: true })
  birthDate: Date

  @Column({ name: 'gender', type: 'enum', enum: E_Gender, nullable: true })
  gender: E_Gender | null
}

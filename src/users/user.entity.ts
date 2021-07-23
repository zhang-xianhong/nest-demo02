import { AutoIncrement, DataType, Model, PrimaryKey, Table, Column } from 'sequelize-typescript';
// import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Table({
  timestamps: false,
  underscored: true
})
export class User extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.BIGINT)
  id: number;

  @Column({
    type: DataType.STRING
  })
  firstName: string;

  @Column({
    type: DataType.STRING
  })
  lastName: string;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: true
  })
  isActive: boolean;

//   @OneToMany((type) => Photo, (photo) => photo.user)
//   photos: Photo[];
}

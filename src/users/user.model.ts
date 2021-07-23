import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { User } from './user.entity';
import { Photo } from '../photos/photo.model';
import { Optional } from '@nestjs/common';

@Table({
    tableName: 'user-squelize',
    timestamps: false,
})
export class UserModel extends User {

    @Column({
        type: DataType.STRING
    })
    firstName: string;

    @Column({
        type: DataType.STRING
    })
    lastName: string;

    @Column({
        defaultValue: true
    })
    isActive: boolean;
}
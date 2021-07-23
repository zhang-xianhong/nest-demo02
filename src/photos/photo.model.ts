import { Column, DataType } from "sequelize-typescript";

export class Photo {

    @Column(DataType.BIGINT)
    photoId: number

    @Column(DataType.STRING)
    photoName: string
    
}
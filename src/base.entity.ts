import sequelize from "sequelize";
import { AutoIncrement, Column, DataType, Model, PrimaryKey, Table } from "sequelize-typescript";

@Table({
    timestamps: false,
    underscored: true,
})
export class BaseModel extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.BIGINT)
    id: number;

    // 创建时间
    @Column({
        // type: 'TIMESTAMP',
        type: DataType.DATE,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: true
    })
    createTime: Date;

    // 更新时间
    @Column({
        type: 'TIMESTAMP',
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
    })
    updateTime: Date;

    // 创建人
    @Column({
        type: DataType.STRING,
    })
    createUser: string;

    // 更新人
    @Column({
        type: DataType.STRING,
    })
    updateUser: string;

}
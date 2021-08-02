import { Column, DataType, Table } from "sequelize-typescript";
import { BaseModel } from "src/base.entity";

@Table({
    timestamps: false,
    underscored: true,
    tableName: 'type',
})
export class TypeModel extends BaseModel {
    
    // @Column({
    //     type: DataType.BIGINT,
    //     comment: '文章类型编号',
    // })
    // typeId: number;

    @Column({
        type: DataType.STRING,
        comment: '文章类型名称',
    })
    typeName: string;

    @Column({
        type: DataType.BIGINT,
        comment: '类型排序编号',
    })
    orderNum: number;

}
import { IsInt, IsString } from "class-validator";


export class CreateCatDto {
    // 类验证器
    @IsString()
    name: string;

    @IsInt()
    age: number;
    
    @IsString()
    breed: string;
};

export class UpdateCatDto {
    
};

export class ListAllEntities {
    limit: number
};
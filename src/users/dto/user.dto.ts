import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";


export class UserDto {

    // @IsNumber()
    // id: number;
    
    @IsNotEmpty()
    @IsOptional()
    @IsString() 
    @ApiProperty({description: "姓"})
    firstName: string; //firtnane

    @IsString()
    @IsOptional()
    @ApiProperty({description: "名"})
    lastName: string;

    @IsBoolean()
    @IsOptional()
    @ApiProperty({description: "活跃状态"})
    isActive: boolean;
}
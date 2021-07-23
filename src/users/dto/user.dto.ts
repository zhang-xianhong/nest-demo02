import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";


export class UserDto {

    // @IsNumber()
    // id: number;
    
    @IsNotEmpty()
    @IsOptional()
    @IsString() 
    firstName: string; //firtnane

    @IsString()
    @IsOptional()
    lastName: string;

    @IsBoolean()
    @IsOptional()
    isActive: boolean;
}
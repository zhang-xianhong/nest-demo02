import { IsBoolean, IsNotEmpty, IsString } from "class-validator";


export class UserDto {

    @IsNotEmpty()
    @IsString() 
    firstName: string; //firtnane

    @IsString()
    lastName: string;

    @IsBoolean()
    isActive: boolean;
}
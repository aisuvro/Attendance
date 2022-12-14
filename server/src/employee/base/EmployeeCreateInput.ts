/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AttendanceCreateNestedManyWithoutEmployeesInput } from "./AttendanceCreateNestedManyWithoutEmployeesInput";
import {
  ValidateNested,
  IsOptional,
  IsDate,
  IsString,
  IsNumber,
} from "class-validator";
import { Type } from "class-transformer";
@InputType()
class EmployeeCreateInput {
  @ApiProperty({
    required: false,
    type: () => AttendanceCreateNestedManyWithoutEmployeesInput,
  })
  @ValidateNested()
  @Type(() => AttendanceCreateNestedManyWithoutEmployeesInput)
  @IsOptional()
  @Field(() => AttendanceCreateNestedManyWithoutEmployeesInput, {
    nullable: true,
  })
  attendances?: AttendanceCreateNestedManyWithoutEmployeesInput;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  dob!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  name!: string;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsNumber()
  @Field(() => Number)
  salary!: number;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  ssl!: string;
}
export { EmployeeCreateInput };

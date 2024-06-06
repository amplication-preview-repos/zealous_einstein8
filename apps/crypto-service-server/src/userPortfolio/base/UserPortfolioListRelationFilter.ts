/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { UserPortfolioWhereInput } from "./UserPortfolioWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class UserPortfolioListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => UserPortfolioWhereInput,
  })
  @ValidateNested()
  @Type(() => UserPortfolioWhereInput)
  @IsOptional()
  @Field(() => UserPortfolioWhereInput, {
    nullable: true,
  })
  every?: UserPortfolioWhereInput;

  @ApiProperty({
    required: false,
    type: () => UserPortfolioWhereInput,
  })
  @ValidateNested()
  @Type(() => UserPortfolioWhereInput)
  @IsOptional()
  @Field(() => UserPortfolioWhereInput, {
    nullable: true,
  })
  some?: UserPortfolioWhereInput;

  @ApiProperty({
    required: false,
    type: () => UserPortfolioWhereInput,
  })
  @ValidateNested()
  @Type(() => UserPortfolioWhereInput)
  @IsOptional()
  @Field(() => UserPortfolioWhereInput, {
    nullable: true,
  })
  none?: UserPortfolioWhereInput;
}
export { UserPortfolioListRelationFilter as UserPortfolioListRelationFilter };

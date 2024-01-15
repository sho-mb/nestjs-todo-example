import { IsNotEmpty, IsOptional } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateTodoInput {
  @ApiProperty()
  @IsNotEmpty()
  title: string;

  @ApiPropertyOptional()
  @IsOptional()
  deadLine_at!: Date;
}

import {
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsPositive,
  IsString,
  IsOptional,
} from 'class-validator';
import { TransactionType, TType } from '../entities/transaction.entity';

export class CreateTransactionDto {
  @IsInt()
  @IsNotEmpty()
  walletId: number;

  @IsEnum(TransactionType)
  @IsNotEmpty()
  action: TType;

  @IsPositive()
  @IsNotEmpty()
  amount: number;

  @IsString()
  @IsOptional()
  description?: string;
}

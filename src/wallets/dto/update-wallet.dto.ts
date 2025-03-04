import { IsInt, Min, IsOptional } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreateWalletDto } from './create-wallet.dto';

export class UpdateWalletDto extends PartialType(CreateWalletDto) {
  @IsInt()
  @Min(0)
  @IsOptional()
  balance?: number;
}

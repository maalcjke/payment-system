import { IsInt, Min } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreateWalletDto } from './create-wallet.dto';

export class UpdateWalletDto extends PartialType(CreateWalletDto) {
  @IsInt()
  @Min(0)
  balance?: number;
}

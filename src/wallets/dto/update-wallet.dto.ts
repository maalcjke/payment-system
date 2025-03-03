import { IsInt } from 'class-validator';

export class UpdateWalletDto {
  @IsInt()
  balance: number;
}

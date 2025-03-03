import {IsInt, Min} from 'class-validator';

export class UpdateWalletDto {
  @IsInt()
  @Min(0)
  balance: number;
}

import { Wallet } from '../../wallets/entities/wallet.entity';

export class User {
  id: number;
  email: string;
  password: string;
  wallet: Wallet;
}

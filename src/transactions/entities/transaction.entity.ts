import { Wallet } from '../../wallets/entities/wallet.entity';

export class Transaction {
  id: number;
  walletId: number;
  action: string;
  amount: number;
  description?: string;
  createdAt: Date;
  wallet: Wallet;
}

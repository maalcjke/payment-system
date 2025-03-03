import { Wallet } from './wallet.entity';

export class WalletsHistory {
  id: number;
  walletId: number;
  action: string;
  amount: number;
  balanceBefore: number;
  balanceAfter: number;
  description?: string;
  createdAt: Date;
  wallet: Wallet;
}

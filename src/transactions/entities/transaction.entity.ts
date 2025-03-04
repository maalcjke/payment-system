import { Wallet } from '../../wallets/entities/wallet.entity';

export const TransactionType: {
  REFILL: 'REFILL';
  PURCHASE: 'PURCHASE';
} = {
  REFILL: 'REFILL',
  PURCHASE: 'PURCHASE',
};

export type TType = (typeof TransactionType)[keyof typeof TransactionType];

export class Transaction {
  id: number;
  walletId: number;
  action: TType;
  amount: number;
  description?: string;
  createdAt: Date;
  wallet: Wallet;
}
